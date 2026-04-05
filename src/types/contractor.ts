export interface Contractor {
  id: string
  slug: string
  name: string
  trade: string
  specialties: string[]
  description: string
  years_exp: number
  license_no?: string
  phone: string
  email?: string
  website?: string
  address?: string
  area_served: string[]
  logo_url?: string
  is_featured: boolean
  is_active: boolean
}
