# Gamazon — educational storefront interface demo

Gamazon is an original, responsive portfolio project for exploring common ecommerce-interface layout patterns with HTML, CSS, and vanilla JavaScript.

- **Live demo:** https://gamazon-adelio.netlify.app/
- **Source:** https://github.com/genZadelio/Gamazon

## Demo safeguards

This is a non-transactional interface demonstration:

- No login, sign-up, credential, OTP, phone-number, checkout, order, payment, or personal-data form
- No customer-support, seller, affiliate, gift-card, or delivery workflow
- No backend, analytics, tracking pixels, or real marketplace connection
- Fictional sample category names and original illustration assets only
- Browser-only search and category filtering; no data is stored or transmitted
- No claims of affiliation with Amazon.com, Amazon EU, Amazon India, or any product brand

Gamazon is a fictional storefront brand used for this educational interface concept. The public deployment is hosted on Netlify. GitHub Pages remains disabled for this repository.

## Run locally

From this directory:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

The repository root is the Netlify publish directory. `netlify.toml` applies security headers and a restrictive Content Security Policy. The page has no build step or runtime dependencies.

## Included

- Responsive navigation, banner, hero, sample catalog, and disclosure-focused footer
- Original Gamazon vector logo and original SVG category illustrations
- Browser-only text search and category filtering
- Keyboard-visible focus states and responsive layouts
- No account, cart, checkout, payment, tracking, or personal-data collection

## Structure

- `index.html` — page markup
- `style.css` — responsive design system and components
- `script.js` — browser-only sample filtering
- `assets/` — original logo, hero, and category illustrations
- `netlify.toml` — Netlify publishing and security-header configuration

This is not an official store, a payment service, or an affiliated marketplace.
