# info3d Wiki (Nextra + PWA + GitHub Pages)

## 🚀 Setup

```bash
npm install
npm run dev        # Preview
npm run export     # Build for GitHub Pages
```

## 🌍 GitHub Pages Deployment

This project is configured to deploy using GitHub Actions. On each push to `main`, it:

- Builds and exports static files
- Pushes `out/` to `gh-pages` branch
- Publishes site at: https://jamesd3d.github.io/info3d/
