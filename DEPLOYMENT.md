# Deployment and trust policy

This project is published at **https://gamazon-adelio.netlify.app/**. GitHub Pages must remain disabled for this repository.

No hosting platform can guarantee that a URL will never be reviewed or flagged. These release rules reduce avoidable trust, phishing, marketplace-confusion, credential, payment, and brand-impersonation risks.

## Required release checklist

- Keep the visible educational-demo disclosure and the no-affiliation statement.
- Do not add login, credential, OTP, phone-number, checkout, order, payment, delivery, seller, affiliate, gift-card, or personal-data flows to this static demo.
- Use clearly fictional or illustrative names and original assets; do not present sample cards as real products, customer offers, reviews, endorsements, prices, or guarantees.
- Do not imply ownership of or affiliation with Amazon, Gamazon, Flopcart, or any third-party brand.
- Do not load or publish Amazon-owned logos, photographs, product images, customer claims, or marketing assets.
- Do not commit API keys, tokens, credentials, or other secrets.
- Keep the Netlify canonical URL and `og:url` aligned with the primary public deployment.
- Keep the restrictive `Content-Security-Policy`, including `form-action 'none'` and `frame-ancestors 'none'`.
- Confirm the published page has the expected title, disclosure, original assets, and no unexpected forms before making it primary.
- If GitHub Pages is ever re-enabled, repeat the content review and Safe Browsing check first.

## Deployment

Netlify uses the repository root as its publish directory and reads `netlify.toml` for security headers. There is no build step.
