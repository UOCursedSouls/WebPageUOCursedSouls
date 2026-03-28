# Ultima Online: Cursed Souls — Website

Official website for the **Ultima Online: Cursed Souls** free shard.

## Sections

| Section | Description |
|---------|-------------|
| **Home** | Welcome page with shard overview |
| **Wiki** | In-game wiki with sidebar navigation (Skills, Classes, Races, Items, Mechanics, Guild System) |
| **Rules** | Server rules and guidelines |
| **Media** | Screenshot and video gallery |
| **Downloads** | Game client download and server connection info |
| **Status** | Live server status, player count, and development roadmap |
| **Contact** | Staff directory, community links, and contact form |

## Wiki Content

The wiki is the core documentation for players. Pages are written in Markdown and rendered via Marked.js.

### Categories

| Category | Pages |
|----------|-------|
| **Skills** | Skills Overview, Crafting Overview, Combat Overview, Anatomy, Blacksmithy, Carpentry, Tailoring, Architecture |
| **Classi** | 18 classes across 6 subcategories (Combattimento, Esplorazione, Furtivita, Magia, Natura, Supporto) |
| **Razze** | Races Overview, Human, Elf, Gargoyle, Dwarf, Orc |
| **Items / Resource** | Ore types (21 minerals), Hide types (15 leathers) |
| **Meccaniche** | Sistema di Casting, Armor System, Armor Materials - Minerals, Armor Materials - Leathers, Dragon Scale Armor, Exceptional Quality |
| **Guild System** | Guild Territory Stone, Crystal Mana Sphere, Guild Accountant, StatCap Progression, Building System |

### Adding a Wiki Page

1. Create a `.md` file in `Documents/UOCS_Wiki_md/<Category>/`
2. Follow the existing format (emoji headers, tables, internal links with `#sectionWiki/` prefix)
3. Add the page name to `Json/Wiki-Structure.json` under the appropriate category
4. WikiManager.js will automatically handle routing and rendering

## Tech Stack

- **Frontend**: Vanilla JS (ES6 modules), Bootstrap 5.3, CSS3
- **Markdown**: Marked.js (ESM import in WikiManager.js)
- **Architecture**: SPA with hash-based routing and dynamic section loading
- **Server API**: Connects to the UO game server via REST (`UOServerApi.js`)

## Project Structure

```
index.html                          # Entry point (SPA shell)
JavaScript/
  Main_App_UOCS.js                  # App initializer, routing, and navigation
  WikiManager.js                    # Wiki sidebar (event delegation) and markdown loader
  RoadmapTimeLine.js                # Roadmap timeline component
  UOServerApi.js                    # Game server API client
  HtmlBuilder.js                    # Template engine with key replacement
  IndexManager.js                   # DOM injection helpers
  UtilityClass.js                   # File/JSON loading helpers
Views/
  Navbar.html                       # Top navigation bar
  Footer.html                       # Footer
  ViewSections/                     # HTML partials for each section
  ViewElements/                     # Reusable UI components
Styles/
  uocs_style.css                    # All custom styles (wiki, roadmap, sections)
Json/
  DataInfo.json                     # App configuration data
  Wiki-Structure.json               # Wiki category/page navigation tree
  Roadmap.json                      # Roadmap milestones
Documents/
  UOCS_Wiki_md/                     # Markdown files for wiki content
    Home.md                         # Wiki home page
    Skills/                         # Skill pages
    Classi/                         # Class pages (by subcategory)
    Razze/                          # Race pages
    Items/Resource/                 # Ore and Hide pages
    Meccaniche/                     # Game mechanics pages
    Guild System/                   # Guild system pages
Images/                             # Assets (logo, backgrounds, GIFs)
```

## Getting Started

1. Clone the repo
2. Serve with any static HTTP server (e.g. `npx serve` or VS Code Live Server)
3. Open `index.html` in browser

> The server is in **pre-alpha** — contributions welcome!
