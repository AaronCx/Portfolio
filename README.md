# Portfolio

Personal portfolio website showcasing full-stack engineering projects, tech stack, and live GitHub activity.

## Features

- **Project Showcase** — 12 detailed project pages covering full-stack apps, CLI tools, games, and addons
- **GitHub Activity** — Dynamically loads public repos from the GitHub API with language color coding
- **Dark / Light Theme** — Toggle with localStorage persistence
- **Responsive Design** — Sidebar navigation on desktop, hamburger menu on mobile
- **Self-Assessment** — Dedicated page covering skills, philosophy, and tech expertise

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
├── self-assessment.html    # About — skills, tech stack, philosophy
├── assets/
│   ├── style.css           # Theming, layout, responsive styles
│   └── main.js             # Theme toggle, mobile menu, GitHub fetch
└── projects/               # 12 individual project pages
    ├── taskflow.html
    ├── nexabase.html
    ├── loglens.html
    ├── algoquest.html
    ├── commitcraft.html
    ├── supaviz.html
    ├── travlr.html
    ├── treasuremaze.html
    ├── chatbot.html
    ├── sportstat.html
    ├── reporadar.html
    └── arcanewatch.html
```

## Run Locally

No build step required — just open `index.html` in a browser or start a local server:

```bash
python -m http.server 8000
```

## License

MIT
