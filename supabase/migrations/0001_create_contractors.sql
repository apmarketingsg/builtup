-- BuiltUp — contractors table
-- Run this in the Supabase SQL editor (Dashboard → SQL Editor → New query)

CREATE TABLE contractors (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          TEXT        NOT NULL UNIQUE,
  name          TEXT        NOT NULL,
  trade         TEXT        NOT NULL,
  specialties   TEXT[]      DEFAULT '{}',
  description   TEXT,
  years_exp     SMALLINT    CHECK (years_exp >= 0),
  license_no    TEXT,
  phone         TEXT,
  email         TEXT,
  website       TEXT,
  address       TEXT,
  area_served   TEXT[],
  logo_url      TEXT,
  is_featured   BOOLEAN     NOT NULL DEFAULT false,
  is_active     BOOLEAN     NOT NULL DEFAULT true,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  -- Generated full-text search column (do not insert into this column directly)
  search_vector TSVECTOR GENERATED ALWAYS AS (
    to_tsvector('english',
      coalesce(name, '') || ' ' ||
      coalesce(trade, '') || ' ' ||
      coalesce(description, '') || ' ' ||
      coalesce(array_to_string(specialties, ' '), '')
    )
  ) STORED
);

-- Indexes
CREATE INDEX idx_contractors_trade    ON contractors (trade);
CREATE INDEX idx_contractors_active   ON contractors (is_active);
CREATE INDEX idx_contractors_featured ON contractors (is_featured) WHERE is_featured = true;
CREATE INDEX idx_contractors_fts      ON contractors USING GIN (search_vector);

-- Row-level security: public read for active contractors only
ALTER TABLE contractors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read_active" ON contractors
  FOR SELECT USING (is_active = true);
