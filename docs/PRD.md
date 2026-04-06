# Product Requirements Document — BuiltUp

**Version:** 1.0
**Date:** 5 April 2026
**Status:** Draft

---

## 1. Overview

**Product name:** BuiltUp
**Tagline:** Find Trusted Contractors in Singapore

BuiltUp is a contractor directory web application for Singapore homeowners. It allows homeowners to discover, browse, and contact verified local tradespeople and renovation contractors. The MVP focuses on discoverability — a clean listing page with trade filtering, full-text search, and individual contractor profile pages.

---

## 2. Problem Statement

Singapore homeowners face a fragmented, low-trust market when looking for contractors. Common pain points:
- No central directory of reliable tradespeople categorised by trade
- Difficulty filtering by specialty or service area
- No quick way to compare contractors before calling

BuiltUp solves this by being the go-to directory for Singapore homeowners to find, compare, and reach contractors quickly.

---

## 3. Target Users

**Primary: Singapore homeowners**
- Aged 28–55, HDB or condo owners
- Need a contractor for renovation, repair, or maintenance
- Value trust signals (years of experience, license number, area served)
- Prefer to WhatsApp rather than email

**Secondary: Contractors**
- Sole proprietors or small firms in trades like plumbing, electrical, aircon, carpentry, painting
- Want inbound enquiries from homeowners
- May or may not have a website of their own

---

## 4. Goals & Success Metrics

| Goal | Metric |
|---|---|
| Homeowners can find a contractor by trade quickly | Time-to-first-click on a contractor profile < 30s |
| Directory is comprehensive for common trades | ≥ 10 trades represented at launch |
| Pages are SEO-indexed so homeowners find the site via Google | Core pages indexed within 4 weeks of launch |
| Contractors can be contacted easily | WhatsApp CTA click-through rate ≥ 15% |

---

## 5. Delivery Phases

| Phase | Scope | Gate |
|---|---|---|
| **Phase 0** | Homepage UI only, mock data, no Supabase | User UI approval |
| **Phase 1** | Supabase setup + seed data | After Phase 0 approved |
| **Phase 2** | `/contractors` listing page + filters | After Phase 1 |
| **Phase 3** | `/contractors/[slug]` detail page | After Phase 2 |
| **Phase 4** | Polish, SEO, accessibility | After Phase 3 |

---

## 6. Features — MVP Scope

### 6.1 Homepage (`/`) — Phase 0 deliverable

- Hero section with headline, sub-headline, and search input (routes to `/contractors?q=...`)
- "Browse by Trade" quick-link grid (icons + labels for each trade category)
- Featured Contractors strip (up to 6 contractors marked `is_featured = true`)
- Clear CTA to browse all contractors

### 6.2 Navigation & Layout — Phase 0 deliverable

- Sticky header with BuiltUp wordmark and "Browse Contractors" nav link
- Footer with site links and "Singapore Contractor Directory" descriptor

### 6.3 Contractor Listing Page (`/contractors`) — Phase 2

- Grid of contractor cards (name, trade badge, years of experience, area served, phone)
- Trade filter bar — horizontal scrollable pills (one per trade category)
- Search input — full-text search across name, trade, description, specialties
- Filter state stored in URL query params (`?trade=plumber&q=...`) for shareability
- Server-side rendering — fast initial load, good for SEO
- Empty state when no results match

### 6.4 Contractor Detail Page (`/contractors/[slug]`) — Phase 3

- Full profile: logo, name, trade, description, specialties, years of experience, license number
- Area served chips
- Contact section: phone (click-to-call), email, website link
- WhatsApp CTA button (pre-filled message: "Hi, I found you on BuiltUp and would like to enquire...")
- Statically generated at build time; revalidated hourly (ISR)
- Unique `<title>` and meta description per contractor for SEO

---

## 7. Features — Out of Scope for MVP

- Contractor sign-up / self-service listing management
- Reviews or ratings system
- Booking or scheduling
- Payment processing
- User accounts for homeowners
- Admin dashboard (contractors managed directly in Supabase)
- Ads or sponsored placements

---

## 8. Data Model

**Contractors** (Supabase Postgres table):

| Field | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `slug` | TEXT UNIQUE | URL-safe identifier |
| `name` | TEXT | Business or person name |
| `trade` | TEXT | Primary trade category |
| `specialties` | TEXT[] | Additional skills |
| `description` | TEXT | Bio / about text |
| `years_exp` | SMALLINT | Years in trade |
| `license_no` | TEXT | BCA / CCS license if applicable |
| `phone` | TEXT | Contact number |
| `email` | TEXT | Contact email |
| `website` | TEXT | External website URL |
| `address` | TEXT | Location or district |
| `area_served` | TEXT[] | Singapore regions served |
| `logo_url` | TEXT | Supabase Storage public URL |
| `is_featured` | BOOLEAN | Show in featured strip |
| `is_active` | BOOLEAN | Soft-delete / visibility toggle |

**Trade categories at launch (14):**

| Value | Label | Covers |
|---|---|---|
| `plumber` | Plumber | Pipes, water heater, toilet fittings, basin installation |
| `electrician` | Electrician | Cable runs, power points, lighting, DB box |
| `aircon` | Aircon | Installation, servicing, chemical wash, gas top-up |
| `painting` | Painting | Interior/exterior repaint, texture coating, feature walls |
| `carpentry` | Carpentry | Built-in wardrobes, kitchen cabinets, TV console, study desk |
| `flooring` | Flooring | Vinyl overlay, parquet, laminate, timber strips |
| `tiling` | Tiling | Bathroom/kitchen retiling, mosaic, screed |
| `windows` | Windows & Grilles | Aluminium frames, glass replacement, window grilles, shower screens |
| `doors` | Doors | Timber doors, fire-rated doors, HDB gates, digital lock gates |
| `curtains` | Curtains & Blinds | Curtain tracks, roller blinds, roman blinds, day/night blinds |
| `waterproofing` | Waterproofing | Wet area membrane, flat roof coating, balcony sealing, crack injection |
| `handyman` | Handyman | Furniture assembly, minor repairs, lock install, curtain rod fitting |
| `cleaning` | Cleaning | Post-renovation cleaning, regular home cleaning, move-in/out cleaning |
| `movers` | Movers | Home moving, furniture disposal, storage |

---

## 9. Technical Requirements

| Requirement | Decision |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS v4 |
| Database | Supabase (Postgres) |
| Auth (MVP) | None — read-only public site |
| Hosting | Vercel (recommended for Next.js ISR) |
| Images | Supabase Storage + `next/image` |
| Search | Postgres `tsvector` full-text search |
| SEO | SSR + ISR + `generateMetadata()` per page |

---

## 10. Design Guidelines

- **Tone:** Trustworthy, clean, local
- **Primary colour:** Sky blue (`#0ea5e9`) — reliability without aggression
- **Font:** Inter — modern, highly legible (system font stack in Phase 0)
- **WhatsApp CTA:** Green (`#25D366`) — familiar to Singapore users
- **Cards:** Subtle shadow + hover lift — professional, approachable
- **Mobile-first:** Listings collapse to 1-column on mobile, 2-col on tablet, 3-col on desktop

---

## 11. Constraints & Assumptions

- Contractor data is manually seeded by the site owner via Supabase dashboard (no self-service at MVP)
- All contractors are Singapore-based
- Phone numbers follow Singapore format (+65 XXXX XXXX)
- Site is public and read-only — no login required for homeowners
- No payment or lead-gen fees at MVP stage
