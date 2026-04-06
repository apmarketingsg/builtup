-- BuiltUp — seed data (28 contractors across all 14 trades)
-- Run this in the Supabase SQL editor AFTER running the migration.

INSERT INTO contractors
  (slug, name, trade, specialties, description, years_exp, license_no, phone, email, area_served, is_featured, is_active)
VALUES

-- ── Plumber (2) ──────────────────────────────────────────────────────────────
(
  'ah-kow-plumbing',
  'Ah Kow Plumbing Services',
  'plumber',
  ARRAY['HDB pipe replacement', 'Leak detection', 'Water heater installation'],
  'Reliable plumbing services for HDB, condo, and landed properties across Singapore. Over 12 years of trusted experience handling everything from burst pipes to full bathroom overhauls.',
  12, 'PB-2012-04821', '+6591234567', 'ahkow@example.com',
  ARRAY['Jurong', 'Clementi', 'Buona Vista', 'Queenstown'],
  true, true
),
(
  'speedy-pipes-sg',
  'Speedy Pipes SG',
  'plumber',
  ARRAY['Emergency plumbing', 'Toilet installation', 'Basin replacement', 'Pipe lagging'],
  'Fast-response plumber available 7 days a week. Specialist in emergency callouts, toilet installation, and full bathroom plumbing for HDB and condo units.',
  8, 'PB-2016-07345', '+6592345678', NULL,
  ARRAY['Tampines', 'Pasir Ris', 'Bedok', 'Changi'],
  false, true
),

-- ── Electrician (2) ──────────────────────────────────────────────────────────
(
  'bright-spark-electrical',
  'Bright Spark Electrical',
  'electrician',
  ARRAY['DB box upgrade', 'Lighting installation', 'Aircon power points'],
  'Licensed electrician servicing residential and commercial clients. Fast response, clean work, and all jobs come with a 90-day workmanship warranty.',
  9, 'EL-2015-09234', '+6598765432', NULL,
  ARRAY['Tampines', 'Pasir Ris', 'Bedok', 'Simei'],
  true, true
),
(
  'powersafe-electrical',
  'PowerSafe Electrical Works',
  'electrician',
  ARRAY['Power point installation', 'Fan installation', 'EV charger wiring', 'Smoke detector fitting'],
  'BCA-licensed electrical contractor with a focus on safe, code-compliant installations. Residential and light commercial work island-wide.',
  14, 'EL-2010-03156', '+6583456789', 'powersafe@example.com',
  ARRAY['Bishan', 'Ang Mo Kio', 'Toa Payoh', 'Novena'],
  false, true
),

-- ── Aircon (2) ───────────────────────────────────────────────────────────────
(
  'cool-breeze-aircon',
  'Cool Breeze Aircon Specialist',
  'aircon',
  ARRAY['General servicing', 'Chemical wash', 'Gas top-up', 'Compressor repair'],
  'Authorised Daikin and Mitsubishi service partner. Residential and commercial aircon servicing, repair, and installation across the island.',
  15, NULL, '+6587654321', NULL,
  ARRAY['All Singapore'],
  true, true
),
(
  'arctic-air-services',
  'Arctic Air Services',
  'aircon',
  ARRAY['Split unit installation', 'Aircon dismantling', 'Chemical overhaul', 'Inverter upgrade'],
  'Experienced aircon technicians handling installation, servicing, and repair for all major brands including Daikin, Mitsubishi, Panasonic, and LG.',
  10, NULL, '+6584567890', 'arctic@example.com',
  ARRAY['Yishun', 'Sembawang', 'Woodlands', 'Admiralty'],
  false, true
),

-- ── Painting (2) ─────────────────────────────────────────────────────────────
(
  'perfect-finish-painting',
  'Perfect Finish Painting',
  'painting',
  ARRAY['HDB repainting', 'Texture coating', 'Waterproof painting', 'Feature walls'],
  'Professional painting contractor specialising in HDB and condo interior and exterior repaint. No drips, no mess — just a perfect finish every time.',
  7, NULL, '+6582345678', NULL,
  ARRAY['Bishan', 'Toa Payoh', 'Ang Mo Kio', 'Serangoon'],
  true, true
),
(
  'rainbow-coat-painting',
  'Rainbow Coat Painting Works',
  'painting',
  ARRAY['New BTO painting', 'Ceiling painting', 'Anti-mould coating', 'Epoxy floor coating'],
  'Specialist BTO and resale flat painters. We cover wall prep, skim coat, and final top coat. Competitive rates with a 1-year warranty on all paintwork.',
  5, NULL, '+6585678901', 'rainbowcoat@example.com',
  ARRAY['Punggol', 'Sengkang', 'Hougang', 'Buangkok'],
  false, true
),

-- ── Carpentry (2) ────────────────────────────────────────────────────────────
(
  'solid-wood-carpentry',
  'Solid Wood Carpentry',
  'carpentry',
  ARRAY['Built-in wardrobe', 'Kitchen cabinet', 'TV console', 'Study desk'],
  'Custom carpentry and joinery for your home. From built-in wardrobes to full kitchen cabinets, we craft furniture that fits perfectly and lasts for years.',
  11, NULL, '+6593456789', NULL,
  ARRAY['Woodlands', 'Yishun', 'Sembawang', 'Admiralty'],
  true, true
),
(
  'craftsmen-carpentry-sg',
  'Craftsmen Carpentry SG',
  'carpentry',
  ARRAY['Shoe cabinet', 'Feature wall panel', 'Platform bed', 'Walk-in wardrobe'],
  'Bespoke carpentry solutions for modern Singapore homes. We design, build, and install — no subcontracting. All wood sourced from sustainable suppliers.',
  6, NULL, '+6596789012', 'craftsmen@example.com',
  ARRAY['Bukit Timah', 'Holland Village', 'Clementi', 'Dover'],
  false, true
),

-- ── Flooring (2) ─────────────────────────────────────────────────────────────
(
  'flexfloor-sg',
  'FlexFloor SG',
  'flooring',
  ARRAY['Vinyl plank overlay', 'SPC flooring', 'Timber strip', 'Laminate'],
  'Singapore''s vinyl and SPC flooring specialists. We overlay directly onto existing tiles — no hacking required. Showroom at Toa Payoh.',
  9, NULL, '+6594678901', 'flexfloor@example.com',
  ARRAY['Island-wide'],
  false, true
),
(
  'premier-flooring-works',
  'Premier Flooring Works',
  'flooring',
  ARRAY['Parquet restoration', 'Engineered wood', 'Carpet tiles', 'Anti-slip coating'],
  'Full-range flooring contractor covering everything from parquet sanding and restoration to new engineered wood and carpet tile installations.',
  13, NULL, '+6595789012', NULL,
  ARRAY['Orchard', 'River Valley', 'Tanjong Pagar', 'Bukit Merah'],
  false, true
),

-- ── Tiling (2) ───────────────────────────────────────────────────────────────
(
  'pro-tiling-works',
  'Pro Tiling Works',
  'tiling',
  ARRAY['Bathroom retiling', 'Kitchen wall tiles', 'Outdoor porcelain', 'Grout repointing'],
  'Specialist tiling contractor with an eye for detail. We handle full bathroom and kitchen retiling, feature walls, and outdoor areas. Minimal dust and mess guaranteed.',
  10, NULL, '+6596890123', NULL,
  ARRAY['Central', 'East', 'North-East'],
  false, true
),
(
  'mosaic-masters-sg',
  'MosaicMasters SG',
  'tiling',
  ARRAY['Mosaic feature wall', 'Swimming pool tiles', 'Large-format tiles', 'Screed levelling'],
  'Boutique tiling studio specialising in mosaic, large-format, and bespoke feature tiles. Work featured in luxury condos and Good Class Bungalows.',
  15, NULL, '+6597901234', 'mosaicmasters@example.com',
  ARRAY['Sentosa', 'Bukit Timah', 'Holland Road', 'Nassim'],
  false, true
),

-- ── Windows & Grilles (2) ────────────────────────────────────────────────────
(
  'clear-view-windows-sg',
  'ClearView Windows SG',
  'windows',
  ARRAY['Aluminium casement windows', 'Sliding window installation', 'Glass replacement', 'Window grilles'],
  'HDB-approved window contractor. We install, replace, and repair aluminium windows, window grilles, and glass panels for HDB and condo units.',
  8, 'WS-2018-02234', '+6598012345', NULL,
  ARRAY['Island-wide'],
  false, true
),
(
  'allglass-solutions',
  'AllGlass Solutions',
  'windows',
  ARRAY['Frameless glass shower screen', 'Tempered glass panels', 'Glass balustrade', 'Skylight installation'],
  'Specialist glass and glazing contractor for homes and commercial spaces. We handle frameless shower screens, glass partitions, balustrades, and custom glass features.',
  11, NULL, '+6599123456', 'allglass@example.com',
  ARRAY['Orchard', 'Raffles Place', 'Marina Bay', 'Sentosa'],
  false, true
),

-- ── Doors (2) ────────────────────────────────────────────────────────────────
(
  'doorpro-sg',
  'DoorPro SG',
  'doors',
  ARRAY['HDB gate installation', 'Digital lock supply & install', 'Fire-rated door', 'Timber swing door'],
  'One-stop door specialist for HDB, condo, and landed homes. We supply and install timber doors, fire-rated doors, HDB gates, and digital smart locks.',
  7, NULL, '+6581234567', 'doorpro@example.com',
  ARRAY['Island-wide'],
  false, true
),
(
  'gatemaster-sg',
  'GateMaster SG',
  'doors',
  ARRAY['Folding gate', 'Sliding gate', 'Gate lock replacement', 'Powder coat refinishing'],
  'Wrought iron and mild steel gate specialist. Custom fabrication, installation, and repair for HDB main gates, service gates, and compound gates.',
  9, NULL, '+6582345670', NULL,
  ARRAY['Jurong', 'Boon Lay', 'Bukit Batok', 'Choa Chu Kang'],
  false, true
),

-- ── Curtains & Blinds (2) ────────────────────────────────────────────────────
(
  'cosy-curtains-sg',
  'Cosy Curtains SG',
  'curtains',
  ARRAY['Day & night curtains', 'Eyelet curtains', 'Motorised blinds', 'S-fold curtains'],
  'Friendly curtain studio with a home-visit measuring service. We stock over 300 fabric choices and install curtain tracks, roller blinds, and roman blinds island-wide.',
  6, NULL, '+6583456701', 'cosycurtains@example.com',
  ARRAY['Island-wide'],
  false, true
),
(
  'shaderight-blinds',
  'ShadeRight Blinds',
  'curtains',
  ARRAY['Roller blinds', 'Venetian blinds', 'Timber blinds', 'Blackout blinds'],
  'Blinds specialist serving HDB and condo owners. All blinds are custom-cut to your window size, with a 2-year warranty on mechanisms and fabrics.',
  4, NULL, '+6584567012', NULL,
  ARRAY['Punggol', 'Sengkang', 'Tampines', 'Pasir Ris'],
  false, true
),

-- ── Waterproofing (2) ────────────────────────────────────────────────────────
(
  'waterproof-king',
  'Waterproof King',
  'waterproofing',
  ARRAY['Flat roof waterproofing', 'Toilet waterproofing', 'Balcony sealing', 'Crack injection'],
  'Specialist waterproofing contractor with over 8 years solving Singapore''s toughest water ingress problems. All works come with a 5-year warranty.',
  8, 'WP-2018-03312', '+6595678901', NULL,
  ARRAY['Island-wide'],
  false, true
),
(
  'dryseal-pro',
  'DrySeal Pro',
  'waterproofing',
  ARRAY['Wet area membrane', 'External wall coating', 'Basement tanking', 'Expansion joint sealing'],
  'BCA-registered waterproofing specialist with experience in HDB, condo, and landed properties. We diagnose the source before recommending a solution.',
  12, 'WP-2012-01189', '+6596789123', 'dryseal@example.com',
  ARRAY['Island-wide'],
  false, true
),

-- ── Handyman (2) ─────────────────────────────────────────────────────────────
(
  'rapid-handyman-sg',
  'Rapid Handyman SG',
  'handyman',
  ARRAY['Furniture assembly', 'Curtain rod installation', 'Minor repairs', 'Door hinge fixing'],
  'Your all-in-one handyman for small home jobs. Fast, friendly, and affordable — no job is too small. Same-day appointments available.',
  5, NULL, '+6594567890', NULL,
  ARRAY['Central', 'North', 'East', 'West'],
  false, true
),
(
  'master-key-locksmith',
  'Master Key Locksmith',
  'handyman',
  ARRAY['Digital lock installation', 'Gate lock replacement', 'Emergency lockout', 'Rekey service'],
  '24/7 locksmith service across Singapore. Specialists in digital smart locks, gate locks, and emergency lockout assistance. Response within 30 minutes.',
  6, NULL, '+6596789012', NULL,
  ARRAY['All Singapore'],
  false, true
),

-- ── Cleaning (2) ─────────────────────────────────────────────────────────────
(
  'sparkclean-sg',
  'SparkClean SG',
  'cleaning',
  ARRAY['Post-renovation cleaning', 'Move-in cleaning', 'Regular home cleaning', 'Upholstery cleaning'],
  'Professional cleaning service trusted by hundreds of Singapore homeowners. We specialise in post-renovation deep cleans to get your new home sparkling before move-in.',
  5, NULL, '+6597890123', 'sparkclean@example.com',
  ARRAY['Island-wide'],
  true, true
),
(
  'freshstart-cleaning',
  'FreshStart Cleaning',
  'cleaning',
  ARRAY['Weekly home cleaning', 'Part-time cleaner', 'Office cleaning', 'Mattress cleaning'],
  'Reliable recurring and one-time cleaning services for HDB, condo, and landed homes. All cleaners are background-checked and trained in-house.',
  3, NULL, '+6598901234', NULL,
  ARRAY['Island-wide'],
  false, true
),

-- ── Movers (2) ───────────────────────────────────────────────────────────────
(
  'easymove-sg',
  'EasyMove SG',
  'movers',
  ARRAY['HDB moving', 'Office relocation', 'Furniture disposal', 'Piano moving'],
  'Stress-free home moving for HDB and condo owners. Fixed-price quotes, careful wrapping of all furniture, and same-day disposal of unwanted items on request.',
  7, NULL, '+6589012345', 'easymove@example.com',
  ARRAY['Island-wide'],
  false, true
),
(
  'swiftshift-movers',
  'SwiftShift Movers',
  'movers',
  ARRAY['Mini mover', 'Storage rental', 'Packing service', 'Cross-island moving'],
  'Budget-friendly movers with a fleet of lorries from 10ft to 24ft. No hidden fees — what you see in the quote is what you pay. Available 7 days a week.',
  4, NULL, '+6590123456', NULL,
  ARRAY['Island-wide'],
  false, true
);
