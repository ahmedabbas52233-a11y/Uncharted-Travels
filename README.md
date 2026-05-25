# Uncharted Travels — Pakistan Heritage & Land Travel

> Pakistan's definitive heritage travel guide. Explore 5,000 years of history across five regions — Punjab, Sindh, KPK, Balochistan, and Gilgit-Baltistan.

---

## 📋 Overview

**Uncharted Travels** is a static multi-page website built with pure HTML, CSS, and vanilla JavaScript. It serves as a heritage travel guide and booking portal for curated cultural and historical tours across Pakistan. The site covers UNESCO World Heritage Sites, ancient civilisations, Mughal architecture, Buddhist monasteries, Sufi shrines, and curated land routes.

---

## 🗂️ Project Structure

```
heritage-pakistan/
│
├── index.html                  # Home — hero, regions, featured sites, timeline
├── about.html                  # About the company, team, and mission
├── destinations.html           # Full destination listing by province
├── historical-sites.html       # Deep-dive into major archaeological sites
├── cultural-insights.html      # Culture, festivals, Gandhara art, Sufism
├── travel-guide.html           # Practical travel information and safety
├── contact.html                # Contact form, FAQ, emergency support
│
├── css/
│   ├── shared.css              # Hamburger nav, scroll-to-top, utility classes
│   ├── index.css               # Home page background images
│   ├── about.css               # About page backgrounds
│   ├── contact.css             # Contact page backgrounds
│   ├── destinations.css        # All destination card background images
│   ├── historical-sites.css    # Historical site image panels
│   ├── cultural-insights.css   # Cultural section visuals
│   └── travel-guide.css        # Travel guide hero background
│
└── js/
    └── main.js                 # Shared JS: nav, active links, reveal, scroll-to-top
```

---

## 🎨 Design System

### Colour Tokens
| Token | Hex | Usage |
|-------|-----|-------|
| `--void` | `#07070D` | Page background |
| `--stone` | `#12121A` | Card backgrounds |
| `--deep` | `#1C1C28` | Section backgrounds |
| `--slate` | `#252535` | Elevated surfaces |
| `--copper` | `#BF7A35` | Primary accent, CTAs |
| `--gold` | `#D4A843` | Highlight, numbers |
| `--rust` | `#A03820` | Emergency/alert sections |
| `--parchment` | `#EBD9B8` | Body text |
| `--cream` | `#F7F0E0` | Headings |
| `--sand` | `#C8B08A` | Secondary text |
| `--mist` | `#9696AF` | Subdued text (WCAG AA compliant) |
| `--white` | `#FAFAF5` | High-contrast text |

### External Dependencies
- [Google Fonts](https://fonts.google.com) — Cormorant Garamond, Outfit
- [Font Awesome 6](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css) — Icons

No build tools, no frameworks, no npm. Drop the folder on any static host and it works.

---

## ♿ Accessibility (WCAG 2.1 AA)

This project is built to meet **WCAG 2.1 Level AA** across all pages. The following was audited and fixed using the WAVE accessibility tool:

### Contrast ratios (key pairs)
| Element | Background | Ratio | Status |
|---------|-----------|-------|--------|
| `--mist` text | `--void` | 6.96:1 | ✅ AA |
| `--mist` text | `--stone` | 6.46:1 | ✅ AA |
| `--mist` text | `--deep` | 5.84:1 | ✅ AA |
| `--sand` text | `--void` | 9.60:1 | ✅ AA |
| `--copper` | `--void` | 5.79:1 | ✅ AA |
| `--cream` headings | `--void` | 17.69:1 | ✅ AA |
| Newsletter placeholder | Input background | 7.19:1 | ✅ AA |
| Emergency subtext | Dark red bg | 8.50:1 | ✅ AA |

---

## ⚙️ JavaScript Features (`js/main.js`)

| Feature | Description |
|---------|-------------|
| Hamburger menu | Toggles `.open` on `.nav-links`, swaps bars ↔ times icon, closes on outside click |
| Active nav link | Auto-detects current page from `window.location.pathname` and adds `.active` class |
| Sticky nav | Adds `.scrolled` class after 60px scroll (dark background + blur) |
| Smooth image loading | Fades images in on `load` event; prevents invisible broken images |
| Scroll reveal | `IntersectionObserver` adds `.visible` to `.reveal` elements as they enter viewport |
| Scroll-to-top button | Shows `#scrollTop` after 600px scroll; smooth scrolls to top on click |

---

## 🚀 Getting Started

### Local development
No build step required. Open any `.html` file directly in a browser, or serve with any static server:

2. Run Locally on Your Computer
Option A — Direct Download (Easiest)
Click the green <> Code button above
Select Download ZIP
Extract the ZIP file
Open index.html in your browser (double-click it)
Navigate between pages using the top navigation bar

Option B — Clone with Git
bash
git clone https://github.com/ahmedabbas52233-a11y/Uncharted-Travels.git
cd Uncharted-Travels
Then open index.html in your browser, or use a live server extension in VS Code.

3. Image Assets
The site references images from the htmlpictures/ folder. To see all images load correctly:
Ensure the htmlpictures/ folder exists alongside the HTML files
All paths use relative references (htmlpictures/filename.jpg)
If images are missing, the layout will still render perfectly — only image slots will appear empty

# VS Code
# Install "Live Server" extension → right-click index.html → Open with Live Server
```

## 🗺️ Pages at a Glance

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with hero, five-region overview, featured sites, historical timeline, testimonials, newsletter signup |
| `about.html` | Company story, team, milestones, and philosophy |
| `destinations.html` | Full destination grid sorted by province — 30+ locations |
| `historical-sites.html` | In-depth coverage of Taxila, Lahore Fort, Takht-i-Bahi, Mohenjo-daro, Rohtas Fort, Makli Necropolis |
| `cultural-insights.html` | Gandhara art, Mughal architecture, Sufism, regional festivals, cuisine |
| `travel-guide.html` | Visa info, best seasons, safety, packing, transport, budgeting |
| `contact.html` | Multi-step booking inquiry form, FAQ accordion, emergency contact, office hours |

---