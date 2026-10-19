# Справка Klinikon

The user help of [Klinikon](https://klinikon.online), published at **https://help.klinikon.online**.
Built with [Astro Starlight](https://starlight.astro.build), Russian only for now.

## Work on it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # build + check that every linked address still has a page (npm run check is the same)
```

Articles are Markdown files in `src/content/docs/<section>/<article>.md`; the sidebar is in
`astro.config.mjs`. Interface labels are quoted exactly as the program shows them and wrapped in
`<kbd>…</kbd>`. The look (colours, Inter and Manrope) follows the program's tokens in
`src/styles/klinikon.css`.

## Permanent addresses

The program links to the articles (for example the update dialog opens
`https://help.klinikon.online/whats-new`). Every address in `permanent-addresses.txt` is kept forever:
never rename or move an article file. If a page really has to move, keep the old address as a
redirect in `astro.config.mjs` (`redirects`). `program-links.txt` lists the addresses the program's «?» opens
(Serkor.Web/src/lib/help.ts); it is rewritten by every release, never by hand. `npm run build` fails when an address
of either file has no page.

## A new release

Serkor's `.\build.ps1 release` ends with `.\build.ps1 help-pr`, which opens a pull request here (branch
`release/vX.Y.Z`) with

- `src/assets/screens/*.png` — the articles' screenshots, taken from that version on the demo clinic;
- `program-links.txt` — the addresses that version's «?» opens;
- `src/content/docs/whats-new.md` — the section «Следующая версия — готовится» renamed to `X.Y.Z — <date>`,
  or a new section on top whose text you write before merging.

Write the coming release's notes in advance under «Следующая версия — готовится». Nothing is published until the
pull request is merged and `npm run deploy` runs on `main`.

## Publish

GitHub Pages serves the `gh-pages` branch of this repository under the custom domain in `public/CNAME`.

```sh
npm run deploy   # check, then push dist/ to the gh-pages branch
```

The domain needs one DNS record at the registrar of klinikon.online:
`help` — `CNAME` — `klinikon.github.io`. GitHub then issues the HTTPS certificate by itself;
afterwards switch on "Enforce HTTPS" in Settings → Pages.
