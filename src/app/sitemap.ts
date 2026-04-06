import type { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'
import { MOCK_CONTRACTORS } from '@/data/mockContractors'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://builtup.sg'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/contractors`, changeFrequency: 'daily', priority: 0.9 },
  ]

  // Contractor detail pages
  let slugs: string[] = []

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    slugs = MOCK_CONTRACTORS.filter((c) => c.is_active).map((c) => c.slug)
  } else {
    try {
      const supabase = await createClient()
      const { data } = await supabase
        .from('contractors')
        .select('slug, updated_at')
        .eq('is_active', true)

      return [
        ...staticRoutes,
        ...(data ?? []).map((c: { slug: string; updated_at?: string }) => ({
          url: `${siteUrl}/contractors/${c.slug}`,
          changeFrequency: 'weekly' as const,
          priority: 0.7,
          lastModified: c.updated_at ? new Date(c.updated_at) : undefined,
        })),
      ]
    } catch {
      slugs = []
    }
  }

  return [
    ...staticRoutes,
    ...slugs.map((slug) => ({
      url: `${siteUrl}/contractors/${slug}`,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
