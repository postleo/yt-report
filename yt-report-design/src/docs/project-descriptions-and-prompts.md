# Project Descriptions & Prompts

## YouTube 2025 Year in Data — Web Report

---

## Part 1: App Description Options

---

### Description 1 — Elevator Pitch

YouTube 2025: Year in Data is a single-page web report built with React, TypeScript, and Tailwind CSS that presents comprehensive YouTube platform statistics for 2025 through a retro-modern design system. The aesthetic centers on a warm palette of Orange (#FF6B35), Dark Teal (#1A4D3E), and Beige (#F5E6D3), rendered entirely in the Nunito typeface at weights 400, 700, and 800. Every surface sits atop a CSS grid-line background pattern. Cards use 30px border-radius with 3px solid borders, buttons and badges adopt pill shapes (50px border-radius), and section headers live inside bordered pill containers with uppercase, tightly-tracked (-0.02em) headings. The report spans 10 navigable pages — Index (landing), Most Viewed Videos, Milestones, Top Creators, Genre Breakdown, Cultural Phenomena, Music Trends, Platform Trends, Sources, and About — each featuring interactive Recharts data visualizations (pie, bar, line, and area charts) styled to match the retro palette. A floating dark/light mode toggle smoothly transitions all colors while preserving the grid background. Animated counters count up on scroll, cards lift on hover with shadow transitions, and content fades/slides in on load. The entire project is fully responsive, citation-backed, and designed as both a reference document and a visual showcase.

---

### Description 2 — Portfolio Description

**YouTube 2025: Year in Data** is a multi-page interactive data report exploring YouTube's 2025 landscape — from the most-viewed videos of all time to emerging cultural phenomena like K-Pop Demon Hunters.

**Design System:** A retro-inspired aesthetic built on three core colors — Orange (#FF6B35, HSL 16 100% 60%), Dark Teal (#1A4D3E, HSL 164 50% 20%), and Beige (#F5E6D3, HSL 30 47% 90%). The Nunito Google Font is used exclusively: weight 800 for uppercase headings with -0.02em letter-spacing, weight 700 for emphasis, and weight 400 for body text. The background features a repeating CSS grid pattern (30px cells) using subtle border-colored lines. All cards have 30px rounded corners and 3px solid borders in Dark Teal. Buttons and navigation elements use pill shapes (50px border-radius). Section headers are enclosed in bordered pill containers.

**Technical Stack:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui. Data visualizations powered by Recharts with custom-styled pie charts, bar charts, line charts, and area charts. Dark mode implemented via CSS custom properties with a floating toggle button. Animations include fade-in, slide-up, count-up counters, and pulse-glow effects, all defined in Tailwind config.

**Pages:** Index (hero, stat counters, timeline, navigation hub), Most Viewed, Milestones, Creators, Genres, Phenomena, Music, Trends, Sources, About.

---

### Description 3 — Technical Specification Summary

A React/TypeScript SPA presenting YouTube 2025 analytics across 10 routes, built on Vite with Tailwind CSS and shadcn/ui primitives.

**Design Tokens (Light Mode):**
- `--background: 30 47% 90%` (Beige #F5E6D3)
- `--foreground: 164 50% 20%` (Dark Teal #1A4D3E)
- `--primary: 16 100% 60%` (Orange #FF6B35)
- `--primary-foreground: 0 0% 100%` (White)
- `--secondary: 164 50% 20%` (Dark Teal)
- `--secondary-foreground: 30 47% 95%`
- `--muted: 30 30% 85%`
- `--border: 30 25% 80%`
- `--radius: 1.5rem`
- Grid background: 30px repeating lines using `--grid-color: 30 25% 80%`

**Design Tokens (Dark Mode):**
- `--background: 0 0% 14%` (#242424)
- `--foreground: 30 47% 90%`
- `--card: 0 0% 18%`
- `--muted: 0 0% 22%`
- `--border: 0 0% 24%`
- `--grid-color: 0 0% 20%`
- Primary orange and accent remain unchanged

**Typography:** Nunito (Google Fonts) — 400 body, 700 bold body, 800 headings. Headings are uppercase with `letter-spacing: -0.02em`. Hero title scales from `text-6xl` to `text-[120px]`.

**Layout Patterns:**
- Cards: `rounded-[30px] border-[3px] border-secondary`
- Buttons: `rounded-full px-6 py-2` (pill class)
- Section headers: `rounded-[50px] border-[3px] border-secondary px-8 py-4 inline-block`
- Container: centered, `max-width: 1400px`, `padding: 2rem`

**Components:** Header, Footer, Logo, NavigationHub, StatCard, QuickStatCard, AnimatedCounter, TimelineItem, ThemeToggle, NavLink, plus shadcn/ui primitives.

**Animations (Tailwind keyframes):**
- `fade-in`: opacity 0→1 over 0.5s
- `slide-up`: translateY(20px)→0 + opacity over 0.6s
- `count-up`: translateY(10px)→0 + opacity over 0.6s
- `pulse-glow`: box-shadow pulse on primary color, 2s infinite

**Data Visualizations:** Recharts library — PieChart, BarChart, LineChart, AreaChart — with colors mapped to the retro palette. Used across Genres, Music, Trends, and Creators pages.

**Routing:** React Router v6 with routes for `/`, `/most-viewed`, `/milestones`, `/creators`, `/genres`, `/phenomena`, `/music`, `/trends`, `/sources`, `/about`, and a catch-all 404.

---

### Description 4 — Narrative Description

Imagine opening a web page that feels like a beautifully designed print report from a parallel universe where data journalism meets 1970s graphic design. That's YouTube 2025: Year in Data.

The moment the page loads, you're greeted by a warm beige background (#F5E6D3) overlaid with a subtle grid of fine lines — like graph paper waiting to be filled with insights. The typography is bold and confident: Nunito at its heaviest weight (800), set in uppercase with tight tracking, commands attention for every section header. These headers don't just sit on the page — they're enclosed in pill-shaped containers with 3px solid borders in dark teal (#1A4D3E), giving them the look of rubber-stamped labels.

The color palette is deliberately restrained: a punchy orange (#FF6B35) serves as the primary action color — for buttons, badges, accent borders, and chart highlights. Dark teal provides gravitas for text, secondary elements, and card borders. Every card floats in a slightly lighter shade of beige with generously rounded corners (30px radius) and those distinctive 3px borders.

Navigation is handled through a central hub of pill-shaped links that lead to 10 distinct pages — each a deep dive into a facet of YouTube's 2025 story. Most Viewed tracks the all-time leaderboard. Milestones chronicles record-breaking moments. Creators profiles the platform's biggest channels. Genres breaks down content categories with interactive pie and bar charts. Music analyzes streaming trends. Phenomena explores viral cultural moments. Trends maps platform-wide patterns through line and area charts. Sources provides full citations. About explains methodology.

A floating button in the corner toggles between light and dark modes. In dark mode, the beige yields to a deep charcoal (#242424), the grid lines dim, and the teal lightens — but the orange stays punchy throughout. Every transition is smooth: 300ms ease on colors, cards that lift with shadow on hover, counters that animate upward as they count to their final values, and content that fades and slides into view on scroll.

The entire application is built in React with TypeScript, styled via Tailwind CSS with a comprehensive set of CSS custom properties, and uses Recharts for all data visualizations. It's fully responsive, properly cited, and designed to be both a reference document and a portfolio piece.

---

### Description 5 — Comprehensive Reference

**YouTube 2025: Year in Data — Complete Application Description**

**Purpose:** A comprehensive, interactive web report analyzing YouTube platform data for 2025, covering viewership records, creator achievements, genre trends, cultural phenomena, music analytics, and platform milestones. All statistics are citation-backed.

**Technology:**
- Framework: React 18.3 with TypeScript
- Build tool: Vite
- Styling: Tailwind CSS with tailwindcss-animate plugin
- UI primitives: shadcn/ui (button, card, badge, tabs, table, separator, tooltip, etc.)
- Charts: Recharts 2.x (PieChart, BarChart, LineChart, AreaChart, RadialBarChart)
- Routing: React Router DOM v6
- State: React hooks (useState, useEffect, useRef, useCallback)
- Font loading: Google Fonts CDN (Nunito)

**Design System — Retro Report Aesthetic:**

*Color Palette (Light Mode):*
| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| background | 30 47% 90% | #F5E6D3 | Page background (beige) |
| foreground | 164 50% 20% | #1A4D3E | Primary text (dark teal) |
| primary | 16 100% 60% | #FF6B35 | Accent, buttons, badges (orange) |
| primary-foreground | 0 0% 100% | #FFFFFF | Text on primary |
| secondary | 164 50% 20% | #1A4D3E | Card borders, secondary elements |
| secondary-foreground | 30 47% 95% | — | Text on secondary |
| muted | 30 30% 85% | — | Subdued backgrounds |
| muted-foreground | 164 30% 35% | — | Subdued text |
| card | 30 47% 92% | — | Card backgrounds |
| border | 30 25% 80% | — | Borders and grid lines |
| accent | 16 100% 60% | #FF6B35 | Same as primary |

*Color Palette (Dark Mode):*
| Token | HSL | Hex | Usage |
|-------|-----|-----|-------|
| background | 0 0% 14% | #242424 | Page background |
| foreground | 30 47% 90% | — | Primary text |
| primary | 16 100% 60% | #FF6B35 | Unchanged |
| secondary | 164 40% 35% | — | Lighter teal |
| muted | 0 0% 22% | — | Subdued backgrounds |
| card | 0 0% 18% | — | Card backgrounds |
| border | 0 0% 24% | — | Borders and grid lines |
| grid-color | 0 0% 20% | — | Background grid |

*Typography:*
- Font family: Nunito (Google Fonts) — `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap')`
- Heading: weight 800, uppercase, letter-spacing -0.02em
- Bold body: weight 700
- Body: weight 400
- Hero title: responsive sizing from text-6xl → text-8xl → text-[120px]
- All text uses `antialiased` rendering

*Layout System:*
- Container: centered, max-width 1400px, padding 2rem
- Grid background: repeating CSS linear-gradient lines, 30px × 30px cells
- Card radius: 30px (`rounded-[30px]`)
- Card border: 3px solid secondary (`border-[3px] border-secondary`)
- Pill radius: 50px (`rounded-pill` or `rounded-full`)
- Section headers: `rounded-[50px] border-[3px] border-secondary px-8 py-4 inline-block`
- Spacing: Tailwind default scale (4, 6, 8, 10, 12, 16, 20, 32)

*Component Inventory:*
1. **Header** — Site-wide header with Logo and navigation
2. **Footer** — Site-wide footer with links and credits
3. **Logo** — Play icon in scalloped circle + "YT REPORT 2025" text
4. **ThemeToggle** — Floating button toggling `.dark` class on `<html>`
5. **NavigationHub** — Grid of pill-shaped links to all report sections
6. **NavLink** — Individual navigation pill with icon
7. **StatCard** — Large stat display with icon, AnimatedCounter, description, 3px border card
8. **QuickStatCard** — Compact stat card with thumbnail, rank badge, category label
9. **AnimatedCounter** — Counts from 0 to target value on scroll intersection
10. **TimelineItem** — Horizontal-scroll timeline card with month, title, type badge

*Animations:*
- `fade-in`: opacity 0→1, 0.5s ease-out
- `slide-up`: translateY(20px)→0 + opacity, 0.6s ease-out
- `count-up`: translateY(10px)→0 + opacity, 0.6s ease-out
- `pulse-glow`: box-shadow pulse using primary color at 40% opacity, 2s infinite
- `card-hover`: translateY(-4px) + shadow on hover, 300ms transition
- Theme transition: `transition-colors duration-300`

*Pages & Content:*

1. **Index (`/`)** — Landing page with hero section (badge, title "YOUTUBE 2025", subtitle, CTA buttons), 4× StatCard counters (22.6B views, 50+ videos, 40+ sources, 195+ countries), Featured Statistics grid (4× QuickStatCard), horizontal-scroll 2025 Timeline (7 events), Key Insights section (3 insight cards), NavigationHub
2. **Most Viewed (`/most-viewed`)** — Table of most-viewed YouTube videos of all time with view counts, upload dates, and categories
3. **Milestones (`/milestones`)** — Timeline of record-breaking YouTube moments in 2025
4. **Creators (`/creators`)** — Top creator profiles with subscriber counts, video counts, and analytics charts
5. **Genres (`/genres`)** — Genre breakdown with Recharts PieChart and BarChart showing category distribution
6. **Phenomena (`/phenomena`)** — Viral cultural moments and trending phenomena of 2025
7. **Music (`/music`)** — Music streaming analytics with LineChart and AreaChart visualizations
8. **Trends (`/trends`)** — Platform-wide trend analysis with multi-series charts
9. **Sources (`/sources`)** — Complete citation list for all statistics referenced
10. **About (`/about`)** — Project methodology, credits, and technical details

*Data Visualization Styling:*
- Recharts charts use palette colors: primary orange (#FF6B35), secondary teal (#1A4D3E), and muted variants
- Chart backgrounds transparent to show grid pattern
- Tooltips styled with card background and border
- Responsive containers with aspect-ratio preservation

---

## Part 2: Fully Detailed Prompts

---

### Prompt 1 — Narrative Spec

Build me a multi-page interactive web report called "YouTube 2025: Year in Data" using React, TypeScript, Vite, and Tailwind CSS. This is a comprehensive data report analyzing YouTube platform statistics for 2025.

**Design System — Retro Report Aesthetic:**

Use a warm retro color palette: Orange #FF6B35 (HSL 16 100% 60%) as the primary accent, Dark Teal #1A4D3E (HSL 164 50% 20%) for text and secondary elements, and Beige #F5E6D3 (HSL 30 47% 90%) as the background. All colors must be defined as HSL CSS custom properties in `:root` and `.dark` selectors.

Typography is exclusively Nunito from Google Fonts at three weights: 400 for body text, 700 for bold/emphasis, and 800 for headings. All headings must be uppercase with letter-spacing of -0.02em. The hero title on the landing page should scale from text-6xl on mobile to 120px on desktop.

The background must display a subtle grid pattern — repeating CSS linear-gradient lines forming 30px × 30px cells using the border color. This grid should be visible in both light and dark modes.

Cards throughout the app use 30px border-radius and 3px solid borders in dark teal. Buttons and badges use pill shapes with 50px border-radius. Section headers are enclosed in pill-shaped containers with 3px borders: `rounded-[50px] border-[3px] border-secondary px-8 py-4 inline-block`.

Dark mode swaps background to #242424 (HSL 0 0% 14%), lightens the teal for secondary elements, dims grid lines, but keeps the orange primary unchanged. A floating toggle button switches modes by adding/removing `.dark` on `<html>`.

**Animations:** Define these as Tailwind keyframes — `fade-in` (opacity 0→1, 0.5s), `slide-up` (translateY 20px→0 + opacity, 0.6s), `count-up` (translateY 10px→0 + opacity, 0.6s), `pulse-glow` (box-shadow pulse on primary, 2s infinite). Cards should lift 4px on hover with a shadow transition.

**Components to build:**
- Header with Logo (play icon in circle + "YT REPORT 2025")
- Footer with navigation links
- ThemeToggle (floating dark/light switch)
- NavigationHub (grid of pill-shaped links to all pages)
- StatCard (icon, AnimatedCounter, description in bordered card)
- QuickStatCard (thumbnail, rank, stat, category badge)
- AnimatedCounter (counts from 0 to value using Intersection Observer)
- TimelineItem (horizontal-scroll card with month, event, type badge)

**Pages (10 total):**

1. **Index (/)** — Hero section with "YOUTUBE 2025" title, retro badge "2025 Edition", subtitle "The Year in Data", two CTA pill buttons ("Explore Data" and "Download Report"). Below: 4 StatCards (22.6B+ views, 50+ videos, 40+ sources, 195+ countries). Featured Statistics: 4 QuickStatCards (Baby Shark 16B views, APT. 105 days to 1B, MrBeast 56M likes, MrBeast 6th year #1). Horizontal-scroll timeline with 7 events (Jan–June 2025). Key Insights section (3 cards: K-Pop dominance, MrBeast 3.94B views, Children's content 60%). NavigationHub at bottom.

2. **Most Viewed (/most-viewed)** — Ranked table of most-viewed YouTube videos with titles, channels, view counts, upload dates.

3. **Milestones (/milestones)** — Record-breaking YouTube moments in 2025, displayed as timeline cards.

4. **Creators (/creators)** — Top creator profiles with subscriber counts and Recharts bar charts.

5. **Genres (/genres)** — Genre/category breakdown with Recharts PieChart and BarChart.

6. **Phenomena (/phenomena)** — Viral cultural moments of 2025 with descriptions and engagement data.

7. **Music (/music)** — Music streaming analytics with Recharts LineChart and AreaChart.

8. **Trends (/trends)** — Platform-wide trend analysis with multi-series line charts.

9. **Sources (/sources)** — Full citation list for all statistics.

10. **About (/about)** — Methodology, credits, and technical information.

Use Recharts for all data visualizations, styled to match the retro palette. Use shadcn/ui for base UI primitives. React Router v6 for navigation.

---

### Prompt 2 — Bullet-Point Spec

**Project:** YouTube 2025: Year in Data — Interactive Web Report

**Stack:**
- React 18 + TypeScript
- Vite
- Tailwind CSS + tailwindcss-animate
- shadcn/ui components
- Recharts for data visualization
- React Router v6

**Color Palette (CSS custom properties, HSL format):**
- Primary: Orange #FF6B35 — `--primary: 16 100% 60%`
- Secondary: Dark Teal #1A4D3E — `--secondary: 164 50% 20%`
- Background (light): Beige #F5E6D3 — `--background: 30 47% 90%`
- Background (dark): Charcoal #242424 — `--background: 0 0% 14%`
- Card (light): `--card: 30 47% 92%`
- Card (dark): `--card: 0 0% 18%`
- Border (light): `--border: 30 25% 80%`
- Border (dark): `--border: 0 0% 24%`
- Muted (light): `--muted: 30 30% 85%`
- Primary stays #FF6B35 in both modes

**Typography:**
- Font: Nunito (Google Fonts) — weights 400, 700, 800
- Headings: weight 800, uppercase, letter-spacing -0.02em
- Body: weight 400
- Bold body: weight 700
- Hero: 6xl → 8xl → 120px responsive

**Layout:**
- Background: CSS grid pattern, 30px cells, using border-color lines
- Cards: `rounded-[30px] border-[3px] border-secondary`
- Buttons/badges: pill shape `rounded-full` / 50px radius
- Section headers: `rounded-[50px] border-[3px] border-secondary px-8 py-4 inline-block`
- Container: centered, 1400px max, 2rem padding
- `--radius: 1.5rem` base

**Animations (Tailwind keyframes):**
- `fade-in`: opacity 0→1, 0.5s ease-out
- `slide-up`: translateY(20px)→0, 0.6s ease-out
- `count-up`: translateY(10px)→0, 0.6s ease-out
- `pulse-glow`: box-shadow primary pulse, 2s infinite
- Card hover: translateY(-4px) + shadow, 300ms

**Theme:**
- `.dark` class on `<html>`
- Floating toggle button
- All transitions: `transition-colors duration-300`

**Components:**
- Header (Logo + nav)
- Footer (links + credits)
- Logo (Play icon circle + "YT REPORT 2025")
- ThemeToggle (floating sun/moon button)
- NavigationHub (pill link grid)
- NavLink (individual pill nav item)
- StatCard (icon + AnimatedCounter + description, bordered)
- QuickStatCard (thumbnail + rank + stat + category)
- AnimatedCounter (Intersection Observer count-up)
- TimelineItem (horizontal-scroll event card)

**Pages:**
1. Index `/` — Hero, 4 stat counters, 4 featured stats, 7-event timeline, 3 insights, nav hub
2. Most Viewed `/most-viewed` — Video rankings table
3. Milestones `/milestones` — 2025 records timeline
4. Creators `/creators` — Creator profiles + bar charts
5. Genres `/genres` — PieChart + BarChart breakdown
6. Phenomena `/phenomena` — Viral moments
7. Music `/music` — LineChart + AreaChart analytics
8. Trends `/trends` — Multi-series trend charts
9. Sources `/sources` — Citations
10. About `/about` — Methodology

**Data highlights to include:**
- Baby Shark: 16B+ all-time views
- APT. (ROSÉ & Bruno Mars): 105 days to 1B (K-Pop record)
- MrBeast Paris Baguette: 56M+ likes (most liked)
- MrBeast: 6th consecutive year as #1 creator
- MrBeast 2025: 3.94B views across 6 videos
- Children's content: 60% of all-time top 10
- K-Pop: highest per-video engagement rate

---

### Prompt 3 — Design-First Spec

I need you to build a web application with a very specific retro design system. Here are the exact design specifications — please follow them precisely:

**COLOR SYSTEM (HSL values for CSS custom properties):**

Light mode:
```
--background: 30 47% 90%     /* Beige #F5E6D3 */
--foreground: 164 50% 20%    /* Dark Teal #1A4D3E */
--primary: 16 100% 60%       /* Orange #FF6B35 */
--primary-foreground: 0 0% 100%
--secondary: 164 50% 20%     /* Dark Teal */
--secondary-foreground: 30 47% 95%
--muted: 30 30% 85%
--muted-foreground: 164 30% 35%
--card: 30 47% 92%
--border: 30 25% 80%
--ring: 16 100% 60%
--radius: 1.5rem
--grid-color: 30 25% 80%
--grid-size: 30px
```

Dark mode:
```
--background: 0 0% 14%       /* #242424 */
--foreground: 30 47% 90%
--primary: 16 100% 60%       /* Orange stays */
--secondary: 164 40% 35%
--muted: 0 0% 22%
--card: 0 0% 18%
--border: 0 0% 24%
--grid-color: 0 0% 20%
```

**TYPOGRAPHY:**
- Single font family: Nunito from Google Fonts
- Import: `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap')`
- `.font-heading`: weight 800, uppercase, letter-spacing -0.02em
- `.font-body`: weight 400
- `.font-bold-body`: weight 700
- Hero title class: `text-6xl md:text-8xl lg:text-[120px] leading-none`

**BACKGROUND:**
- Body background: repeating grid lines
```css
background-image:
  linear-gradient(hsl(var(--grid-color)) 1px, transparent 1px),
  linear-gradient(90deg, hsl(var(--grid-color)) 1px, transparent 1px);
background-size: var(--grid-size) var(--grid-size);
```

**SHAPE SYSTEM:**
- Cards: `rounded-[30px] border-[3px] border-secondary`
- Pill buttons: `rounded-full px-6 py-2` (50px effective radius)
- Section headers: `rounded-[50px] border-[3px] border-secondary px-8 py-4 inline-block`
- Badges: `bg-primary text-primary-foreground rounded-full px-4 py-1 text-sm font-bold-body uppercase tracking-wide`

**ANIMATIONS (Tailwind keyframes):**
```js
keyframes: {
  "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
  "slide-up": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
  "count-up": { from: { opacity: "0", transform: "translateY(10px)" }, to: { opacity: "1", transform: "translateY(0)" } },
  "pulse-glow": { "0%, 100%": { boxShadow: "0 0 0 0 hsl(var(--primary) / 0.4)" }, "50%": { boxShadow: "0 0 0 8px hsl(var(--primary) / 0)" } },
},
animation: {
  "fade-in": "fade-in 0.5s ease-out",
  "slide-up": "slide-up 0.6s ease-out",
  "count-up": "count-up 0.6s ease-out",
  "pulse-glow": "pulse-glow 2s infinite",
}
```

**HOVER EFFECT:**
```css
.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px hsl(var(--secondary) / 0.2);
}
```

**APPLICATION CONTENT:**
This design system should be applied to a YouTube 2025 annual data report with 10 pages:
1. Index — Hero with "YOUTUBE 2025" title, animated stat counters (22.6B views, 50+ videos, 40+ sources, 195+ countries), featured statistics grid, horizontal-scroll timeline (Jan–June 2025 events), key insights, navigation hub
2. Most Viewed — All-time most-viewed videos table
3. Milestones — 2025 YouTube records
4. Creators — Top creator profiles with Recharts bar charts
5. Genres — Content category breakdown (Recharts PieChart + BarChart)
6. Phenomena — Viral cultural moments
7. Music — Streaming analytics (Recharts LineChart + AreaChart)
8. Trends — Platform trend analysis (multi-series charts)
9. Sources — Full citations
10. About — Methodology and credits

Use React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Recharts, and React Router v6.

---

### Prompt 4 — Component-Centric Spec

Create a React + TypeScript + Tailwind CSS web application — a YouTube 2025 annual report. I'll describe every component and page.

**Global Design System:**

Colors (CSS custom properties, HSL): Background beige `30 47% 90%` (#F5E6D3), foreground dark teal `164 50% 20%` (#1A4D3E), primary orange `16 100% 60%` (#FF6B35), white foreground on primary. Dark mode: background `0 0% 14%` (#242424), primary unchanged, secondary lightened to `164 40% 35%`.

Font: Nunito (Google Fonts, weights 400/700/800). Headings: 800 weight, uppercase, -0.02em tracking. Body: 400. Bold: 700.

Background: grid pattern of 1px lines at 30px intervals using border color. Both orientations (horizontal + vertical).

Base radius: 1.5rem. Card radius: 30px. Card border: 3px solid secondary. Pill radius: 50px. Section header: pill-shaped container with 3px border.

**COMPONENT SPECIFICATIONS:**

**1. Logo**
- Left: 64px circle, primary orange background, Play icon (lucide-react) centered, white fill
- Right: stacked text — "YT REPORT" (font-heading, xl) over "2025" (font-bold-body, sm, muted)

**2. Header**
- Contains Logo + horizontal nav links
- Sticky top, card background with border-bottom

**3. Footer**
- Navigation links grid + credits text
- Secondary background, secondary-foreground text

**4. ThemeToggle**
- Fixed position, bottom-right corner
- Circular button (48px), primary background
- Sun icon (light mode) / Moon icon (dark mode)
- Toggles `.dark` class on document.documentElement

**5. AnimatedCounter**
- Props: `end: number`, `suffix: string`
- Uses Intersection Observer to trigger
- Counts from 0 to `end` over ~2 seconds using requestAnimationFrame
- Displays with `tabular-nums` for stable width
- Applies count-up animation class

**6. StatCard**
- Props: title, value (number), suffix, description, icon (LucideIcon), delay
- Card with `rounded-[30px] border-[3px] border-secondary`
- Top row: icon in primary/10 circle + title badge (badge-retro)
- Large AnimatedCounter display
- Description text in muted-foreground

**7. QuickStatCard**
- Props: rank, thumbnail (URL), title, subtitle, stat, statLabel, category
- Rounded card with image, overlay rank badge, stat display, category label

**8. TimelineItem**
- Props: month, title, description, type (music/creator/platform/cultural), isActive
- Fixed-width card (280px min) for horizontal scrolling
- Type-colored badge, month label, title, description
- Active state: primary border highlight

**9. NavigationHub**
- Grid of NavLink components (responsive: 2→3→5 columns)
- Links to all 10 report sections

**10. NavLink**
- Props: to (route), icon, label, description
- Pill-shaped card with icon, label, description
- Hover: primary background, white text

**PAGES:**

1. **Index `/`** — Sections: Hero (badge + title + subtitle + 2 CTA pills), Stats (4× StatCard grid), Featured Stats (4× QuickStatCard grid), Timeline (horizontal-scroll 7× TimelineItem), Key Insights (3× bordered insight cards), NavigationHub. Data: 22.6B views, 50+ videos, 40+ sources, 195+ countries; Baby Shark 16B, APT. 105 days, MrBeast 56M likes, MrBeast #1 6 years.

2. **Most Viewed `/most-viewed`** — Table of top YouTube videos (title, channel, views, date, category). Data: Baby Shark (16B), Despacito (8.7B), Johny Johny (7.6B), Bath Song (7.1B), Shape of You (6.6B), See You Again (6.3B), Wheels on the Bus (5.6B), Phonics Song (5.5B), Learning Colors (5.2B), Uptown Funk (5.1B).

3. **Milestones `/milestones`** — Timeline cards for 2025 records. Data: APT. fastest K-Pop to 1B (105 days), MrBeast most-liked video (56M), Baby Shark 15B milestone, YouTube turns 20, etc.

4. **Creators `/creators`** — Creator cards + Recharts BarChart. Data: MrBeast (374M subs, 3.94B 2025 views), T-Series (281M), Cocomelon (185M), SET India (182M), Kids Diana Show (131M).

5. **Genres `/genres`** — Recharts PieChart (genre share) + BarChart (top genres by views). Data: Children's (32%), Music (28%), Entertainment (15%), Gaming (10%), Education (8%), Other (7%).

6. **Phenomena `/phenomena`** — Cards describing viral moments. Data: K-Pop Demon Hunters, Skibidi Toilet, AI-generated content debates, YouTube Shorts growth.

7. **Music `/music`** — Recharts LineChart (monthly streaming) + AreaChart (genre streaming). Data: APT. trajectory, Die With A Smile, global K-Pop streaming trends.

8. **Trends `/trends`** — Multi-series Recharts LineChart. Data: Shorts vs long-form growth, mobile vs desktop, live streaming trends.

9. **Sources `/sources`** — Numbered citation list with URLs. Data: YouTube official stats, Social Blade, Wikipedia, press releases.

10. **About `/about`** — Methodology section, tech stack, credits. Data: How statistics were gathered, data freshness, disclaimer.

Use shadcn/ui for base primitives, Recharts for charts, React Router v6 for routing.

---

### Prompt 5 — Persona-Based Prompt

You are an expert frontend developer specializing in data visualization and editorial web design. I need you to build a premium, retro-styled interactive data report about YouTube in 2025.

**Your design mandate:**

Channel the spirit of vintage infographics and mid-century print design, but execute it with modern web technologies. The aesthetic should feel like a beautifully typeset report that happens to be interactive.

**Exact specifications:**

The palette is three colors: a warm orange (#FF6B35, HSL 16 100% 60%) for energy and action, a deep dark teal (#1A4D3E, HSL 164 50% 20%) for authority and text, and a soft beige (#F5E6D3, HSL 30 47% 90%) for the canvas. Define all as HSL CSS custom properties. In dark mode, the canvas becomes charcoal (#242424), teal lightens, orange stays constant.

Use Nunito as the sole typeface — weight 800 for all headings (uppercase, -0.02em tracking), 700 for emphasis, 400 for body. The hero should be massive: 120px on desktop.

The background must show a subtle graph-paper grid: 1px lines every 30px in both directions, using the border color. This is CSS-only, no images.

Every card: 30px radius, 3px solid teal border. Every button and badge: full pill shape (50px radius). Section headers: enclosed in pill borders with 3px teal stroke.

Animate with purpose: content fades in (0.5s), slides up (0.6s, 20px), counters count up (0.6s), and primary-colored elements pulse with a glow (2s infinite). Cards lift 4px on hover with a teal shadow.

**Build these 10 pages with real YouTube data:**

1. Landing page with hero, animated counters (22.6B views, 50+ videos, 40+ sources, 195+ countries), featured stats grid, horizontal-scrolling timeline, key insights, and navigation hub
2. Most Viewed — all-time ranking table (Baby Shark 16B, Despacito 8.7B, etc.)
3. Milestones — 2025 record-breaking moments
4. Creators — profiles with bar chart visualizations (MrBeast, T-Series, Cocomelon)
5. Genres — pie and bar charts showing content category distribution
6. Phenomena — viral cultural moments (K-Pop Demon Hunters, Skibidi Toilet)
7. Music — line and area charts for streaming trends
8. Trends — multi-series platform trend analysis
9. Sources — complete citations
10. About — methodology and credits

**Tech stack:** React 18, TypeScript, Vite, Tailwind CSS (with tailwindcss-animate), shadcn/ui, Recharts, React Router v6. All chart colors must use the retro palette. All styling via Tailwind utility classes referencing CSS custom properties — no hardcoded colors in components.

---

### Prompt 6 — Minimalist/Direct Prompt

Build a 10-page YouTube 2025 data report in React/TypeScript/Vite/Tailwind.

Design: Retro aesthetic. Colors — Orange #FF6B35 (primary), Dark Teal #1A4D3E (secondary/text), Beige #F5E6D3 (background). Dark mode: #242424 background, orange unchanged. All as HSL CSS vars.

Font: Nunito only (400/700/800). Headings uppercase, -0.02em tracking, 800 weight. Hero title 120px.

Layout: Grid-paper background (30px CSS lines). Cards: 30px radius, 3px teal borders. Buttons: pill shape. Section headers: pill borders.

Animations: fade-in 0.5s, slide-up 0.6s, count-up 0.6s, pulse-glow 2s infinite, hover lift 4px.

Components: Header, Footer, Logo, ThemeToggle, NavigationHub, NavLink, StatCard, QuickStatCard, AnimatedCounter, TimelineItem.

Pages: Index (hero + counters + stats + timeline + insights + nav), Most Viewed (table), Milestones (timeline), Creators (profiles + bar charts), Genres (pie + bar charts), Phenomena (viral moments), Music (line + area charts), Trends (trend charts), Sources (citations), About (methodology).

Data: Baby Shark 16B, APT. 105 days to 1B, MrBeast 56M likes + 3.94B views + #1 6 years, Children's 60% of top 10.

Use shadcn/ui + Recharts + React Router v6.

---

### Prompt 7 — Requirements Document Style

## Project Requirements Document
### YouTube 2025: Year in Data — Interactive Web Report

**REQ-001: Technology Stack**
- REQ-001.1: React 18.x with TypeScript
- REQ-001.2: Vite build system
- REQ-001.3: Tailwind CSS with tailwindcss-animate plugin
- REQ-001.4: shadcn/ui component library
- REQ-001.5: Recharts 2.x for data visualization
- REQ-001.6: React Router DOM v6 for client-side routing

**REQ-002: Color System**
- REQ-002.1: All colors defined as HSL CSS custom properties in `:root` and `.dark`
- REQ-002.2: Primary — Orange #FF6B35, HSL `16 100% 60%`
- REQ-002.3: Secondary/Foreground — Dark Teal #1A4D3E, HSL `164 50% 20%`
- REQ-002.4: Background (light) — Beige #F5E6D3, HSL `30 47% 90%`
- REQ-002.5: Background (dark) — Charcoal #242424, HSL `0 0% 14%`
- REQ-002.6: Card (light) — HSL `30 47% 92%`; Card (dark) — HSL `0 0% 18%`
- REQ-002.7: Border (light) — HSL `30 25% 80%`; Border (dark) — HSL `0 0% 24%`
- REQ-002.8: Primary color must remain identical in both light and dark modes
- REQ-002.9: Muted (light) — HSL `30 30% 85%`; Muted (dark) — HSL `0 0% 22%`

**REQ-003: Typography**
- REQ-003.1: Font family — Nunito (Google Fonts CDN)
- REQ-003.2: Weights loaded — 400, 700, 800
- REQ-003.3: Heading style — weight 800, text-transform uppercase, letter-spacing -0.02em
- REQ-003.4: Body style — weight 400
- REQ-003.5: Bold body style — weight 700
- REQ-003.6: Hero title — responsive: `text-6xl md:text-8xl lg:text-[120px] leading-none`
- REQ-003.7: All text rendered with `antialiased`

**REQ-004: Background**
- REQ-004.1: Body background — CSS grid pattern using linear-gradient
- REQ-004.2: Grid cell size — 30px × 30px
- REQ-004.3: Grid line width — 1px
- REQ-004.4: Grid color — matches border color (changes with theme)

**REQ-005: Shape System**
- REQ-005.1: Base radius — `--radius: 1.5rem`
- REQ-005.2: Card border-radius — 30px (`rounded-[30px]`)
- REQ-005.3: Card border — 3px solid secondary color (`border-[3px] border-secondary`)
- REQ-005.4: Button/badge radius — pill shape, 50px (`rounded-full`)
- REQ-005.5: Section header — `rounded-[50px] border-[3px] border-secondary px-8 py-4 inline-block`
- REQ-005.6: Badge — `bg-primary text-primary-foreground rounded-full px-4 py-1 text-sm uppercase`

**REQ-006: Animations**
- REQ-006.1: `fade-in` — opacity 0→1, 0.5s ease-out
- REQ-006.2: `slide-up` — translateY(20px)→0 + opacity, 0.6s ease-out
- REQ-006.3: `count-up` — translateY(10px)→0 + opacity, 0.6s ease-out
- REQ-006.4: `pulse-glow` — box-shadow pulse using primary at 40% opacity, 2s infinite
- REQ-006.5: Card hover — translateY(-4px) + shadow `0 12px 24px -8px`, 300ms transition
- REQ-006.6: Theme transition — `transition-colors duration-300` on all themed elements

**REQ-007: Dark Mode**
- REQ-007.1: Activated by `.dark` class on `<html>` element
- REQ-007.2: Toggle via floating button (fixed position, bottom-right)
- REQ-007.3: Persists preference (localStorage)

**REQ-008: Components**
- REQ-008.1: Header — Logo + navigation links
- REQ-008.2: Footer — links grid + credits
- REQ-008.3: Logo — Play icon in 64px orange circle + "YT REPORT" / "2025" text
- REQ-008.4: ThemeToggle — floating circular button, sun/moon icon swap
- REQ-008.5: NavigationHub — responsive grid of NavLink pill cards
- REQ-008.6: NavLink — pill card with icon + label + description
- REQ-008.7: StatCard — bordered card with icon, AnimatedCounter, description
- REQ-008.8: QuickStatCard — image card with rank, stat, category
- REQ-008.9: AnimatedCounter — Intersection Observer triggered count-up
- REQ-008.10: TimelineItem — fixed-width horizontal-scroll card

**REQ-009: Pages**
- REQ-009.1: Index `/` — Hero, stats, featured, timeline, insights, navigation
- REQ-009.2: Most Viewed `/most-viewed` — Rankings table
- REQ-009.3: Milestones `/milestones` — 2025 records
- REQ-009.4: Creators `/creators` — Profiles + bar charts
- REQ-009.5: Genres `/genres` — Pie + bar charts
- REQ-009.6: Phenomena `/phenomena` — Viral moments
- REQ-009.7: Music `/music` — Line + area charts
- REQ-009.8: Trends `/trends` — Multi-series charts
- REQ-009.9: Sources `/sources` — Citations
- REQ-009.10: About `/about` — Methodology

**REQ-010: Data Content**
- REQ-010.1: Baby Shark — 16B+ all-time views (most viewed)
- REQ-010.2: APT. (ROSÉ & Bruno Mars) — 105 days to 1B views (fastest K-Pop)
- REQ-010.3: MrBeast Paris Baguette — 56M+ likes (most liked video)
- REQ-010.4: MrBeast — 374M subscribers, 3.94B views in 2025, #1 creator 6 years
- REQ-010.5: Children's content — 60% of all-time top 10
- REQ-010.6: K-Pop — highest per-video engagement rate in 2025
- REQ-010.7: YouTube — celebrates 20th anniversary in 2025

---

### Prompt 8 — Conversational/Guided Prompt

Hey, I want to build something really specific. It's a web-based data report about YouTube in 2025 — think of it like an interactive annual report, but with a really cool retro design.

Let me walk you through exactly what I want:

**The vibe:** Retro, warm, almost like a vintage infographic that came to life as a website. Think graph paper backgrounds, bold rounded shapes, and a limited but punchy color palette.

**The exact colors:** Orange #FF6B35 for buttons, badges, and accents. Dark teal #1A4D3E for text and card borders. Beige #F5E6D3 as the background. That's it — just three colors doing all the heavy lifting. In dark mode, the beige becomes charcoal #242424, the teal lightens a bit, but the orange stays exactly the same. All defined as HSL CSS custom properties.

**The font:** Nunito from Google Fonts. Three weights only — 400 for regular text, 700 for bold stuff, 800 for headings. Every heading is uppercase with tight letter spacing (-0.02em). The main hero title should be huge — like 120px on desktop.

**The grid:** The entire page background has this subtle graph-paper pattern — thin lines every 30px in both directions, done purely in CSS. It's visible in both themes.

**The shapes:** Everything is rounded. Cards have 30px radius with thick 3px teal borders. Buttons are pills (fully rounded, 50px radius). Section headers are wrapped in pill-shaped borders too.

**The animations:** Things should fade in (0.5s), slide up from below (0.6s, 20px travel), counters should animate counting up, and there's a subtle glow pulse on important elements. Cards lift up 4px on hover with a shadow.

**What the report covers:** 10 pages total, all connected by React Router:

1. A big landing page with "YOUTUBE 2025" as a hero, animated number counters (22.6 billion views analyzed, 50+ videos, 40+ sources, 195+ countries), a section of featured stats with images (Baby Shark at 16B views, APT. at 105 days to 1B, MrBeast at 56M likes), a horizontal-scrolling timeline of 2025 events, key insight cards, and a navigation hub linking to everything else.

2. Most Viewed page — a ranked table of the most-viewed YouTube videos ever.

3. Milestones — all the records broken in 2025.

4. Creators — profiles of top creators like MrBeast (374M subs, 3.94B views in 2025) with bar chart visualizations.

5. Genres — pie charts and bar charts showing content category breakdown (Children's at 32%, Music at 28%, etc.).

6. Phenomena — write-ups about viral cultural moments like K-Pop Demon Hunters and Skibidi Toilet.

7. Music — line charts and area charts tracking streaming trends, APT. trajectory, K-Pop growth.

8. Trends — platform-wide analysis with multi-series line charts (Shorts vs long-form, mobile vs desktop).

9. Sources — a clean list of all citations.

10. About — how the data was gathered, methodology, credits.

**Tech:** React 18 with TypeScript, Vite, Tailwind CSS with the animate plugin, shadcn/ui for base components, Recharts for all the charts, React Router v6.

Please build the whole thing with these exact specifications. Style all Recharts visualizations to match the retro palette.

---

### Prompt 9 — JSON-Config Style Prompt

Build a React web application from the following configuration:

```json
{
  "project": {
    "name": "YouTube 2025: Year in Data",
    "type": "Interactive Data Report",
    "stack": ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts", "React Router v6"]
  },
  "design": {
    "aesthetic": "Retro Report",
    "colors": {
      "light": {
        "background": { "hsl": "30 47% 90%", "hex": "#F5E6D3", "name": "Beige" },
        "foreground": { "hsl": "164 50% 20%", "hex": "#1A4D3E", "name": "Dark Teal" },
        "primary": { "hsl": "16 100% 60%", "hex": "#FF6B35", "name": "Orange" },
        "card": { "hsl": "30 47% 92%" },
        "muted": { "hsl": "30 30% 85%" },
        "border": { "hsl": "30 25% 80%" }
      },
      "dark": {
        "background": { "hsl": "0 0% 14%", "hex": "#242424", "name": "Charcoal" },
        "foreground": { "hsl": "30 47% 90%" },
        "primary": { "hsl": "16 100% 60%", "note": "unchanged" },
        "card": { "hsl": "0 0% 18%" },
        "muted": { "hsl": "0 0% 22%" },
        "border": { "hsl": "0 0% 24%" }
      }
    },
    "typography": {
      "family": "Nunito",
      "source": "Google Fonts",
      "weights": [400, 700, 800],
      "heading": { "weight": 800, "transform": "uppercase", "letterSpacing": "-0.02em" },
      "body": { "weight": 400 },
      "boldBody": { "weight": 700 },
      "hero": { "sizes": ["text-6xl", "md:text-8xl", "lg:text-[120px]"] }
    },
    "background": {
      "type": "grid-pattern",
      "method": "css-linear-gradient",
      "cellSize": "30px",
      "lineWidth": "1px",
      "colorVar": "--grid-color"
    },
    "shapes": {
      "cardRadius": "30px",
      "cardBorder": "3px solid secondary",
      "pillRadius": "50px",
      "sectionHeader": "rounded-[50px] border-[3px] border-secondary px-8 py-4 inline-block",
      "baseRadius": "1.5rem"
    },
    "animations": {
      "fadeIn": { "property": "opacity", "from": 0, "to": 1, "duration": "0.5s" },
      "slideUp": { "property": "transform+opacity", "from": "translateY(20px)", "to": "translateY(0)", "duration": "0.6s" },
      "countUp": { "property": "transform+opacity", "from": "translateY(10px)", "to": "translateY(0)", "duration": "0.6s" },
      "pulseGlow": { "property": "box-shadow", "color": "primary/0.4", "duration": "2s", "iteration": "infinite" },
      "cardHover": { "translateY": "-4px", "shadow": "0 12px 24px -8px secondary/0.2", "duration": "300ms" }
    },
    "darkMode": {
      "method": "class-on-html",
      "toggle": "floating-button-bottom-right",
      "persistence": "localStorage"
    }
  },
  "components": [
    "Header", "Footer", "Logo", "ThemeToggle", "NavigationHub", "NavLink",
    "StatCard", "QuickStatCard", "AnimatedCounter", "TimelineItem"
  ],
  "pages": [
    { "route": "/", "name": "Index", "sections": ["hero", "stat-counters", "featured-stats", "timeline", "key-insights", "navigation-hub"] },
    { "route": "/most-viewed", "name": "Most Viewed", "type": "data-table" },
    { "route": "/milestones", "name": "Milestones", "type": "timeline" },
    { "route": "/creators", "name": "Creators", "type": "profiles+charts", "charts": ["BarChart"] },
    { "route": "/genres", "name": "Genres", "type": "charts", "charts": ["PieChart", "BarChart"] },
    { "route": "/phenomena", "name": "Phenomena", "type": "editorial-cards" },
    { "route": "/music", "name": "Music", "type": "charts", "charts": ["LineChart", "AreaChart"] },
    { "route": "/trends", "name": "Trends", "type": "charts", "charts": ["LineChart"] },
    { "route": "/sources", "name": "Sources", "type": "citation-list" },
    { "route": "/about", "name": "About", "type": "editorial" }
  ],
  "data": {
    "highlights": {
      "totalViews": "22.6B+",
      "videosDocumented": "50+",
      "sources": "40+",
      "countriesRepresented": "195+",
      "mostViewed": { "title": "Baby Shark Dance", "views": "16B+" },
      "fastestKPop": { "title": "APT.", "artist": "ROSÉ & Bruno Mars", "daysTo1B": 105 },
      "mostLiked": { "title": "Paris Baguette", "creator": "MrBeast", "likes": "56M+" },
      "topCreator": { "name": "MrBeast", "subs": "374M", "2025views": "3.94B", "yearsAt1": 6 },
      "childrenShare": "60% of all-time top 10",
      "kpopEngagement": "highest per-video engagement rate"
    }
  }
}
```

Please implement this exact specification as a fully functional React application.

---

### Prompt 10 — Step-by-Step Build Prompt

I need a React + TypeScript + Vite + Tailwind CSS web application. Let me describe it step by step.

**STEP 1 — Set up the design system in index.css and tailwind.config.ts:**

Define CSS custom properties in `:root`:
- `--background: 30 47% 90%` (beige #F5E6D3)
- `--foreground: 164 50% 20%` (dark teal #1A4D3E)
- `--primary: 16 100% 60%` (orange #FF6B35)
- `--primary-foreground: 0 0% 100%`
- `--secondary: 164 50% 20%`
- `--secondary-foreground: 30 47% 95%`
- `--muted: 30 30% 85%`
- `--muted-foreground: 164 30% 35%`
- `--card: 30 47% 92%`
- `--card-foreground: 164 50% 20%`
- `--border: 30 25% 80%`
- `--input: 30 25% 85%`
- `--ring: 16 100% 60%`
- `--radius: 1.5rem`
- `--grid-color: 30 25% 80%`
- `--grid-size: 30px`

In `.dark`:
- `--background: 0 0% 14%`
- `--foreground: 30 47% 90%`
- `--primary: 16 100% 60%` (unchanged)
- `--secondary: 164 40% 35%`
- `--muted: 0 0% 22%`
- `--muted-foreground: 30 30% 70%`
- `--card: 0 0% 18%`
- `--border: 0 0% 24%`
- `--grid-color: 0 0% 20%`

Import Nunito from Google Fonts (400, 700, 800). Set body background to grid pattern:
```css
background-image:
  linear-gradient(hsl(var(--grid-color)) 1px, transparent 1px),
  linear-gradient(90deg, hsl(var(--grid-color)) 1px, transparent 1px);
background-size: var(--grid-size) var(--grid-size);
```

In tailwind.config.ts, add Nunito as `fontFamily.heading` and `fontFamily.body`. Add `borderRadius.pill: "50px"`. Add keyframes: `fade-in`, `slide-up`, `count-up`, `pulse-glow` as specified above.

Add utility classes: `.font-heading` (800, uppercase, -0.02em), `.font-body` (400), `.font-bold-body` (700), `.pill` (rounded-full px-6 py-2), `.section-header` (rounded-[50px] border-[3px] border-secondary px-8 py-4 inline-block), `.badge-retro` (bg-primary text-primary-foreground rounded-full px-4 py-1 text-sm font-bold-body uppercase tracking-wide), `.card-hover` (hover: translateY(-4px) + shadow), `.hero-title` (text-6xl md:text-8xl lg:text-[120px] leading-none).

**STEP 2 — Build shared components:**

Build Logo, Header, Footer, ThemeToggle, NavigationHub, NavLink, StatCard, QuickStatCard, AnimatedCounter, TimelineItem as described in the component specifications above (see Prompt 4 for detailed specs on each).

**STEP 3 — Build the Index page:**

Create `/` route with these sections in order:
1. ThemeToggle (floating)
2. Header
3. Hero: "2025 Edition" badge, "YOUTUBE" + "2025" (primary color) title, "The Year in Data" subtitle, two pill CTA buttons
4. Stats: 4-column grid of StatCards (22.6B views, 50+ videos, 40+ sources, 195+ countries)
5. Featured Statistics: section header "🏆 FEATURED STATISTICS", 4-column grid of QuickStatCards
6. Timeline: section header "📅 2025 TIMELINE", horizontal-scroll container with left/right chevron buttons, 7 TimelineItems
7. Key Insights: section header "💡 KEY INSIGHTS", 3-column grid of insight cards (K-Pop #1, MrBeast 3.94B, Children's 60%)
8. Navigation Hub: section header "🧭 EXPLORE THE REPORT", NavigationHub component
9. Footer

**STEP 4 — Build remaining 9 pages:**

Each page should have Header, ThemeToggle, a back link, a page-specific section header, content, and Footer. Use Recharts for data visualizations on Creators, Genres, Music, and Trends pages. Style all chart elements with the retro palette colors.

**STEP 5 — Set up routing:**

React Router v6 with routes for all 10 pages plus a catch-all NotFound page.

Build this complete application following these steps precisely.
