# LeaCoder0 — Personal site

One-page portfolio for [LeaCoder0](https://leacoder0.github.io/): full-stack software engineer. Built for GitHub Pages with a **theme side pane** (system/light/dark + accent color picker).

## Run locally

From this folder:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this folder to your repo (e.g. `leacoder0/leacoder0.github.io` or any repo name).
2. **Settings → Pages**: Source = “Deploy from a branch”, branch = `main`, folder = `/ (root)`.
3. Site will be at `https://leacoder0.github.io/` (user site) or `https://leacoder0.github.io/repo-name/` (project site).

## Customize

- **Content:** Edit `index.html` — replace placeholders for resume, email, GitHub, LinkedIn, and project links when ready.
- **Theme:** Use the **theme** button (bottom-right) to switch System/Light/Dark and pick an accent color. Choices are saved in `localStorage`.
- **Colors/variables:** All theme colors are in `styles.css` (`:root` and `[data-theme]`). Accent is also controlled by the pane and `script.js` (stored in `localStorage`).
- **Profile photo:** Replace the avatar block in the hero with an `<img>` pointing to a file (e.g. `me.jpg`) in this folder.

## Placeholders to hook up later

- Resume link (Work section)
- Email, GitHub, LinkedIn (Contact section)
- Project links (each card has a “Link coming soon” — set `href` and remove the `placeholder` class)
