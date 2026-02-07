# Host Web

A single-page, UI-rich static site ready to deploy on **GitHub Pages**.

## Run locally

Open `index.html` in a browser, or use a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `yourusername.github.io` for a user site, or any name for a project site).
2. Push this folder to the repo:
   ```bash
   git init
   git add index.html styles.css script.js README.md
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source**: Deploy from branch `main`, folder `/ (root)`.
4. Your site will be at `https://YOUR_USERNAME.github.io/YOUR_REPO/` (or `https://YOUR_USERNAME.github.io` for a user site).

## Customize

- Edit `index.html` for content and structure.
- Edit `styles.css` for colors (see `:root` variables), typography, and layout.
- Update the GitHub link in the Contact section to your actual repo.
