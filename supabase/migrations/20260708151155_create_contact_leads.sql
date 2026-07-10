/*
# Create contact_leads table

Single-tenant public contact form — no auth required.

1. New Tables
  - `contact_leads`
    - `id` (uuid, primary key)
    - `nombre` (text) — full name
    - `telefono` (text) — phone number
    - `sector` (text) — business sector (Restauración, Salud, etc.)
    - `negocio` (text) — business name
    - `email` (text) — email address
    - `zona` (text) — coverage zone of interest
    - `plan` (text) — plan of interest (Comercio Pequeño / Comercio Grande)
    - `pantallas` (text) — number of screens
    - `mensaje` (text) — free-text message
    - `created_at` (timestamptz)

2. Security
  - RLS enabled.
  - anon + authenticated may INSERT (public form submission).
  - SELECT, UPDATE, DELETE restricted to authenticated only (admin review).
*/

CREATE TABLE IF NOT EXISTS contact_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL,
  telefono text,
  sector text,
  negocio text,
  email text,
  zona text,
  plan text,
  pantallas text,
  mensaje text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_leads" ON contact_leads;
CREATE POLICY "anon_insert_leads" ON contact_leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_leads" ON contact_leads;
CREATE POLICY "auth_select_leads" ON contact_leads FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_leads" ON contact_leads;
CREATE POLICY "auth_update_leads" ON contact_leads FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_leads" ON contact_leads;
CREATE POLICY "auth_delete_leads" ON contact_leads FOR DELETE
  TO authenticated USING (true);
