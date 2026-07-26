# WoodMaster

A responsive carpentry business website — almirahs, doors, tables, chairs,
study tables and custom woodwork — built with **LWC Open Source**, using
the same modern webpack + `lwc-webpack-plugin` setup as your portfolio
(no `lwc-services` — that toolchain is unmaintained and breaks on newer
Node versions).

## Structure

```
src/
  index.html         → page shell, fonts, meta tags
  index.js            → mounts <wm-app>
  modules/wm/
    app/               → root component, assembles the page
    header/             → sticky nav + mobile menu
    hero/                 → headline + exploded dovetail illustration
    services/          → Almirah / Door / Table / Chair / Study Table / Custom
    process/             → 5-step "how a piece gets made" timeline
    gallery/                → recent work grid (swatch placeholders for now)
    testimonials/      → client quotes
    about/                 → workshop story + stats
    contact/                 → lead form + contact details
    footer/
webpack.config.js
```

All colors, fonts and spacing tokens live in one place:
`src/modules/wm/app/app.css` (`:host { --wm-*: ... }`). Change the palette
or fonts there and it cascades through every component.

## Run it locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000` with hot reload.

## Before you go live — replace these placeholders

- **Phone / WhatsApp / email / workshop address** — in
  `src/modules/wm/contact/contact.html` and `src/modules/wm/footer/footer.html`.
- **Gallery photos** — `src/modules/wm/gallery/gallery.js` currently uses
  generated wood-grain swatches as stand-ins. Swap the `<svg>` block in
  `gallery.html` for `<img src="...">` tags once you have real project
  photos.
- **Contact form** — it currently confirms submissions locally (no backend).
  To actually receive leads, wire the `handleSubmit` method in `contact.js`
  to a form service like Formspree or Web3Forms, or your own backend.
- **Testimonials, stats, service copy** — plain text in each component's
  `.js`/`.html` file, easy to edit.

## Publish it so anyone can visit (GitHub Pages)

Same flow as your portfolio:

```bash
npm install        # first time only
npm run build       # builds to /dist
npm run deploy       # builds, then publishes /dist to the gh-pages branch
```

Then in your GitHub repo: **Settings → Pages → Branch: `gh-pages`**.
Your site will be live at:

```
https://<your-username>.github.io/<repo-name>/
```

`publicPath: 'auto'` in `webpack.config.js` means asset paths resolve
correctly on GitHub Pages without manual edits.

## Responsiveness

Every section uses `clamp()` for fluid type and CSS grid with `auto-fit` /
`minmax()` for the card grids, so layouts adapt continuously between phone,
tablet and desktop widths. The nav collapses to a hamburger menu under
860px, and the hero/about/contact two-column layouts stack to single-column
under 900px. `viewport-fit=cover` handles iOS safe areas.
