/**
 * Environment variable validation and configuration.
 * Uses static property access (process.env.NEXT_PUBLIC_*) so Next.js can properly
 * inline these values at build time for client-side code.
 */

function requireNonEmpty(name: string): string {
  const value = process.env[name];
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(
      [
        `[env] Missing required environment variable: ${name}`,
        '',
        'Create `.env.local` from `.env.example` and set required values.',
        'See README.md for environment setup instructions.',
      ].join('\n')
    );
  }
  return value;
}

export const env = {
  /**
   * Sanity project ID (required).
   * Find this in https://www.sanity.io/manage
   */
  NEXT_PUBLIC_SANITY_PROJECT_ID: requireNonEmpty('NEXT_PUBLIC_SANITY_PROJECT_ID'),

  /**
   * Sanity dataset name (optional, defaults to 'production').
   */
  NEXT_PUBLIC_SANITY_DATASET:
    process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || 'production',
} as const;
