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
  search_vector TSVECTOR
);

-- Trigger function: keeps search_vector in sync on insert/update
CREATE OR REPLACE FUNCTION contractors_search_vector_update()
RETURNS trigger AS $$
BEGIN
  NEW.search_vector :=
    to_tsvector('english'::regconfig,
      coalesce(NEW.name, '')        || ' ' ||
      coalesce(NEW.trade, '')       || ' ' ||
      coalesce(NEW.description, '') || ' ' ||
      coalesce(array_to_string(NEW.specialties, ' '), '')
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER contractors_search_vector_trigger
  BEFORE INSERT OR UPDATE ON contractors
  FOR EACH ROW EXECUTE FUNCTION contractors_search_vector_update();

-- Indexes
CREATE INDEX idx_contractors_trade    ON contractors (trade);
CREATE INDEX idx_contractors_active   ON contractors (is_active);
CREATE INDEX idx_contractors_featured ON contractors (is_featured) WHERE is_featured = true;
CREATE INDEX idx_contractors_fts      ON contractors USING GIN (search_vector);

-- Row-level security: public read for active contractors only
ALTER TABLE contractors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public_read_active" ON contractors
  FOR SELECT USING (is_active = true);
