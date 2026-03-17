# Ultima Online: Cursed Souls — Website

Official website for the **Ultima Online: Cursed Souls** free shard.

## Sections

| Section | Description |
|---------|-------------|
| **Home** | Welcome page with shard overview |
| **Wiki** | In-game wiki with sidebar navigation (Skills, Classes, Races, Items) |
| **Rules** | Server rules and guidelines |
| **Media** | Screenshot and video gallery |
| **Downloads** | Game client download and server connection info |
| **Status** | Live server status, player count, and development roadmap |
| **Contact** | Staff directory, community links, and contact form |

## Tech Stack

- **Frontend**: Vanilla JS (ES6 modules), Bootstrap 5, CSS3
- **Markdown**: Marked.js for wiki page rendering
- **Architecture**: SPA with dynamic section loading (`Main_App_UOCS.js`)
- **Server API**: Connects to the UO game server via REST (`UOServerApi.js`)

## Project Structure

```
index.html                  # Entry point (SPA shell)
JavaScript/
  Main_App_UOCS.js          # App initializer and navigation
  WikiManager.js             # Wiki sidebar and markdown loader
  RoadmapTimeLine.js         # Roadmap timeline component
  UOServerApi.js             # Game server API client
  HtmlBuilder.js             # Template engine
  UtilityClass.js            # File/JSON loading helpers
Views/
  Navbar.html                # Top navigation bar
  ViewSections/              # HTML partials for each section
Styles/
  uocs_style.css             # All custom styles
Json/
  DataInfo.json              # App configuration data
  Wiki-Structure.json        # Wiki category/page tree
  Roadmap.json               # Roadmap milestones
Images/                      # Assets (logo, backgrounds, GIFs)
WikiPages/                   # Markdown files for wiki content
```

## Getting Started

1. Clone the repo
2. Serve with any static HTTP server (e.g. `npx serve` or VS Code Live Server)
3. Open `index.html` in browser

> The server is in **pre-alpha** — contributions welcome!
