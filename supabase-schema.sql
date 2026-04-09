-- =============================================
-- AI Code Agency — Supabase Database Schema
-- Run this in your Supabase SQL Editor
-- =============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- Orders table
-- Stores Stripe checkout completions
-- =============================================
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  stripe_session_id TEXT UNIQUE NOT NULL,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  amount INTEGER NOT NULL, -- in cents
  customer_email TEXT NOT NULL,
  customer_name TEXT,
  status TEXT DEFAULT 'paid' CHECK (status IN ('pending', 'paid', 'failed', 'refunded'))
);

-- Index for fast lookups
CREATE INDEX idx_orders_stripe_session ON orders(stripe_session_id);
CREATE INDEX idx_orders_customer_email ON orders(customer_email);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);

-- RLS — only server can write orders
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role full access on orders"
  ON orders FOR ALL USING (true);

-- =============================================
-- Leads table
-- Stores quote requests and community signups
-- =============================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  email TEXT NOT NULL,
  name TEXT,
  service TEXT,
  message TEXT,
  type TEXT NOT NULL CHECK (type IN ('quote', 'community'))
);

-- Index for fast lookups
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_type ON leads(type);
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role full access on leads"
  ON leads FOR ALL USING (true);

-- =============================================
-- Useful views
-- =============================================

-- Recent orders view
CREATE OR REPLACE VIEW recent_orders AS
SELECT
  id,
  created_at,
  product_name,
  amount::FLOAT / 100 AS amount_usd,
  customer_email,
  customer_name,
  status
FROM orders
ORDER BY created_at DESC
LIMIT 100;

-- Revenue summary
CREATE OR REPLACE VIEW revenue_summary AS
SELECT
  DATE_TRUNC('month', created_at) AS month,
  COUNT(*) AS order_count,
  SUM(amount)::FLOAT / 100 AS total_usd
FROM orders
WHERE status = 'paid'
GROUP BY 1
ORDER BY 1 DESC;
