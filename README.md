# Portfolio

A static showcase of my public GitHub projects, with a project page for each and live GitHub activity.

## Features

- **Project Showcase** — a detailed page for each featured project, linking to live demos and source
- **GitHub Activity** — Dynamically loads public repos from the GitHub API with language color coding
- **Dark / Light Theme** — Toggle with localStorage persistence
- **Responsive Design** — Sidebar navigation on desktop, hamburger menu on mobile
- **About** — Short page listing the tech I work with and the featured projects

## Tech Stack

| Layer | Tech |
|-------|------|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, Grid, Flexbox) |
| Interactivity | Vanilla JavaScript |
| Fonts | Inter (Google Fonts) |
| API | GitHub REST API (public repos) |

## Project Structure

```
Portfolio/
├── index.html              # Home — hero, featured projects, GitHub activity
├── self-assessment.html    # About — tech stack and featured projects
├── assets/
│   ├── style.css           # Theming, layout, responsive styles
│   └── main.js             # Theme toggle, mobile menu, GitHub fetch
└── projects/               # individual project pages
    ├── forge.html
    ├── lastgate.html
    ├── nexabase.html
    ├── anomaly.html
    ├── reporadar.html
    ├── taskflow.html
    └── aterminal.html
```

## Run Locally

No build step required — just open `index.html` in a browser or start a local server:

```bash
python -m http.server 8000
```

## License

MIT

<!-- lastgate-refresh -->
