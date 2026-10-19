# Справка Klinikon

The user help of [Klinikon](https://klinikon.online), published at **https://help.klinikon.online**.
Built with [Astro Starlight](https://starlight.astro.build), Russian only for now.

## Work on it

```sh
npm install
npm run dev      # http://localhost:4321
npm run check    # build + check that every permanent address still has a page
```

Articles are Markdown files in `src/content/docs/<section>/<article>.md`; the sidebar is in
`astro.config.mjs`. Interface labels are quoted exactly as the program shows them and wrapped in
`<kbd>…</kbd>`. The look (colours, Inter and Manrope) follows the program's tokens in
`src/styles/klinikon.css`.

## Permanent addresses

The program links to the articles (for example the update dialog opens
`https://help.klinikon.online/whats-new`). Every address in `permanent-addresses.txt` is kept forever:
never rename or move an article file. If a page really has to move, keep the old address as a
redirect in `astro.config.mjs` (`redirects`). `npm run check` fails when an address has no page.

## A new release

Add a section on top of `src/content/docs/whats-new.md` with the version and date, then publish.

## Publish

GitHub Pages serves the `gh-pages` branch of this repository under the custom domain in `public/CNAME`.

```sh
npm run deploy   # check, then push dist/ to the gh-pages branch
```

The domain needs one DNS record at the registrar of klinikon.online:
`help` — `CNAME` — `makhsum.github.io`. GitHub then issues the HTTPS certificate by itself;
afterwards switch on "Enforce HTTPS" in Settings → Pages.
