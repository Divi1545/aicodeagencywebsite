/**
 * Base URL for server-side redirects (Stripe success/cancel, emails).
 * On Vercel, `VERCEL_URL` is set automatically; use `NEXT_PUBLIC_BASE_URL` when you want a canonical domain.
 */
export function getServerBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}
