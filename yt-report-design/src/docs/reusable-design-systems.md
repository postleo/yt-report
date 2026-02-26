# 20 Reusable Design Systems

Portable design system references for any project. Each is self-contained with color palettes, typography, component patterns, Tailwind config, and CSS custom properties.

---

## 1. Warm Retro

**Philosophy:** Vintage warmth meets modern UI. Inspired by 1970s graphic design — limited palette, bold shapes, tactile surfaces.

**Color Palette:**

Light mode:
```
--background: 30 47% 90%       /* #F5E6D3 Beige */
--foreground: 164 50% 20%      /* #1A4D3E Dark Teal */
--primary: 16 100% 60%         /* #FF6B35 Orange */
--primary-foreground: 0 0% 100%
--secondary: 164 50% 20%
--secondary-foreground: 30 47% 95%
--muted: 30 30% 85%
--muted-foreground: 164 30% 35%
--card: 30 47% 92%
--card-foreground: 164 50% 20%
--border: 30 25% 80%
--accent: 16 100% 60%
--accent-foreground: 0 0% 100%
--ring: 16 100% 60%
--radius: 1.5rem
```

Dark mode:
```
--background: 0 0% 14%         /* #242424 */
--foreground: 30 47% 90%
--primary: 16 100% 60%         /* unchanged */
--secondary: 164 40% 35%
--muted: 0 0% 22%
--card: 0 0% 18%
--border: 0 0% 24%
```

**Typography:**
- Font: Nunito (Google Fonts) — `@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap')`
- Heading: 800 weight, uppercase, letter-spacing -0.02em
- Body: 400 weight
- Bold: 700 weight
- Scale: 14 / 16 / 18 / 24 / 30 / 36 / 48 / 60 / 72 / 96 / 120px
- Line-height: 1.5 body, 1.1 headings

**Spacing Scale:** 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96px

**Border Radius Scale:**
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 30px (cards)
- pill: 50px (buttons, badges, headers)

**Border/Shadow:**
- Card border: 3px solid secondary
- Hover shadow: `0 12px 24px -8px hsl(var(--secondary) / 0.2)`
- Focus ring: 2px ring in primary

**Component Patterns:**
- **Card:** `bg-card border-[3px] border-secondary rounded-[30px] p-6`
- **Button (primary):** `bg-primary text-primary-foreground rounded-full px-6 py-2 hover:opacity-90`
- **Button (secondary):** `bg-secondary text-secondary-foreground rounded-full px-6 py-2`
- **Badge:** `bg-primary text-primary-foreground rounded-full px-4 py-1 text-sm uppercase tracking-wide`
- **Section header:** `rounded-[50px] border-[3px] border-secondary px-8 py-4 inline-block uppercase`
- **Input:** `bg-input border border-border rounded-lg px-4 py-2`
- **Nav link:** `rounded-full px-6 py-3 hover:bg-primary hover:text-primary-foreground`

**Background Treatment:**
```css
background-image:
  linear-gradient(hsl(var(--grid-color)) 1px, transparent 1px),
  linear-gradient(90deg, hsl(var(--grid-color)) 1px, transparent 1px);
background-size: 30px 30px;
```

**Animations:**
```css
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms ease-out;
```
- Fade-in: opacity 0→1, 0.5s
- Slide-up: translateY(20px)→0 + opacity, 0.6s
- Hover lift: translateY(-4px) + shadow, 0.3s
- Pulse glow: box-shadow pulse on primary, 2s infinite

**Tailwind Config:**
```js
theme: {
  extend: {
    fontFamily: { heading: ["Nunito"], body: ["Nunito"] },
    borderRadius: { pill: "50px" },
    keyframes: {
      "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
      "slide-up": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
    },
    animation: {
      "fade-in": "fade-in 0.5s ease-out",
      "slide-up": "slide-up 0.6s ease-out",
    },
  },
}
```

**Ideal Use Cases:** Data dashboards, annual reports, editorial sites, portfolio showcases, landing pages with a warm, distinctive personality.

---

## 2. Midnight Glass

**Philosophy:** Depth through translucency. Frosted glass panels on dark gradients create layered, immersive interfaces.

**Color Palette:**

Light mode:
```
--background: 220 20% 97%
--foreground: 220 40% 15%
--primary: 220 90% 56%      /* #3B82F6 */
--primary-foreground: 0 0% 100%
--secondary: 250 60% 60%    /* #8B5CF6 */
--secondary-foreground: 0 0% 100%
--muted: 220 15% 92%
--card: 0 0% 100% / 0.7     /* semi-transparent */
--border: 220 15% 88%
--accent: 190 90% 45%       /* #06B6D4 */
--accent-foreground: 0 0% 100%
```

Dark mode:
```
--background: 222 47% 11%   /* #0F172A */
--foreground: 210 40% 90%
--primary: 217 91% 60%
--secondary: 258 90% 66%
--muted: 217 33% 17%
--card: 0 0% 100% / 0.05    /* frosted */
--border: 0 0% 100% / 0.1
--accent: 190 90% 50%
```

**Typography:**
- Font: Inter (Google Fonts), weights 400, 500, 600, 700
- Heading: 700, normal case, -0.025em tracking
- Body: 400, line-height 1.6
- Scale: 12 / 14 / 16 / 20 / 24 / 30 / 36 / 48 / 60px

**Spacing Scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px

**Border Radius Scale:**
- sm: 8px
- md: 12px
- lg: 16px
- xl: 24px
- full: 9999px

**Border/Shadow:**
- Card: `border: 1px solid rgba(255,255,255,0.1)`, `backdrop-filter: blur(16px)`
- Elevated: `box-shadow: 0 8px 32px rgba(0,0,0,0.3)`
- Glow: `box-shadow: 0 0 20px hsl(var(--primary) / 0.3)`

**Component Patterns:**
- **Card:** `bg-card backdrop-blur-xl border border-border rounded-2xl p-6`
- **Button:** `bg-primary text-primary-foreground rounded-xl px-5 py-2.5 hover:brightness-110`
- **Badge:** `bg-primary/20 text-primary rounded-full px-3 py-1 text-xs`
- **Input:** `bg-white/5 border border-white/10 rounded-xl px-4 py-2 backdrop-blur`
- **Nav:** `backdrop-blur-md bg-background/80 border-b border-border`

**Background Treatment:**
```css
background: linear-gradient(135deg, hsl(222 47% 11%), hsl(224 47% 15%));
/* Floating orbs */
.orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; }
```

**Animations:**
- Enter: scale(0.95)→scale(1) + opacity, 0.4s ease-out
- Hover: scale(1.02) + brighter border
- Glow pulse: box-shadow oscillation, 3s infinite

**Tailwind Config:**
```js
theme: {
  extend: {
    backdropBlur: { xl: "16px" },
    animation: { "glow-pulse": "glow 3s ease-in-out infinite" },
  },
}
```

**Ideal Use Cases:** SaaS dashboards, developer tools, music/media apps, crypto/fintech, premium landing pages.

---

## 3. Raw Brutalist

**Philosophy:** Anti-design as design. Honesty of materials, thick borders, raw typography, intentional roughness.

**Color Palette:**

Light mode:
```
--background: 0 0% 98%      /* #FAFAF9 */
--foreground: 0 0% 0%       /* #000000 */
--primary: 350 80% 60%      /* Hot Pink #FF6384 */
--primary-foreground: 0 0% 0%
--secondary: 45 95% 55%     /* Yellow #FBBF24 */
--secondary-foreground: 0 0% 0%
--muted: 0 0% 92%
--card: 0 0% 100%
--border: 0 0% 0%
--accent: 145 65% 55%       /* Green #4ADE80 */
```

Dark mode:
```
--background: 0 0% 7%
--foreground: 0 0% 100%
--primary: 350 80% 65%
--card: 0 0% 12%
--border: 0 0% 100%
```

**Typography:**
- Heading: Space Grotesk (Google Fonts), 700, uppercase
- Body: Space Grotesk, 400
- Scale: Aggressive jumps — 14 / 16 / 24 / 36 / 48 / 72 / 96 / 140px

**Spacing:** 4 / 8 / 16 / 24 / 32 / 48 / 64px — tight and intentional

**Border Radius:** 0px everywhere. Sharp corners only.

**Border/Shadow:**
- Card: `border: 4px solid black`, `box-shadow: 8px 8px 0 black`
- Button: `border: 4px solid black`, `box-shadow: 4px 4px 0 black`
- Pressed state: `box-shadow: 2px 2px 0 black`, `transform: translate(2px, 2px)`

**Component Patterns:**
- **Card:** `bg-card border-4 border-foreground shadow-[8px_8px_0_black] p-6`
- **Button:** `bg-primary border-4 border-foreground shadow-[4px_4px_0_black] px-6 py-2 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_black]`
- **Badge:** `bg-secondary border-2 border-foreground px-3 py-1 text-xs uppercase`
- **Input:** `border-4 border-foreground bg-background px-4 py-2`
- **Nav:** `border-b-4 border-foreground bg-background`

**Background:** Flat solid color. No patterns, gradients, or textures.

**Animations:**
- None for entrance — elements are simply there
- Hover: immediate shadow shift (0.1s or `steps(1)`)
- Active: pressed state

**Tailwind Config:**
```js
theme: {
  extend: {
    fontFamily: { heading: ["Space Grotesk"], body: ["Space Grotesk"] },
    borderWidth: { 4: "4px" },
    boxShadow: { brutal: "8px 8px 0 black", "brutal-sm": "4px 4px 0 black" },
  },
}
```

**Ideal Use Cases:** Creative agencies, personal sites, experimental projects, art portfolios, zines, activist sites.

---

## 4. Swiss Precision

**Philosophy:** Maximum clarity, minimum decoration. Information hierarchy through typography and whitespace alone.

**Color Palette:**

Light mode:
```
--background: 0 0% 100%
--foreground: 0 0% 7%
--primary: 0 100% 50%       /* Pure Red #FF0000 */
--primary-foreground: 0 0% 100%
--secondary: 0 0% 40%
--muted: 0 0% 96%
--card: 0 0% 100%
--border: 0 0% 88%
```

Dark mode:
```
--background: 0 0% 7%
--foreground: 0 0% 93%
--primary: 0 100% 50%
--card: 0 0% 11%
--border: 0 0% 20%
```

**Typography:**
- Heading: Inter (Google Fonts), 700, no transform, tracking 0
- Body: Inter, 400, line-height 1.6
- Scale (modular, ratio 1.25): 16 / 20 / 25 / 31 / 39 / 49 / 61px

**Spacing:** Mathematical — 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128px

**Border Radius:** 0px. Everything sharp.

**Border/Shadow:**
- Dividers: 1px solid border color
- No box shadows anywhere
- Focus: 2px red outline

**Component Patterns:**
- **Card:** No visible card. Content separated by 1px rules and whitespace.
- **Button:** `text-primary hover:underline` — text only, no backgrounds
- **Badge:** `text-xs uppercase tracking-widest text-muted-foreground`
- **Input:** `border-b border-border bg-transparent py-2` — bottom border only
- **Table:** Thin horizontal rules, no vertical rules, no backgrounds

**Background:** Pure white. Nothing.

**Animations:** Almost none. `opacity 0→1, 0.3s` on page load if anything.

**Tailwind Config:**
```js
theme: {
  extend: {
    fontFamily: { sans: ["Inter"] },
    fontSize: { "display": ["61px", { lineHeight: "1.1" }] },
  },
}
```

**Ideal Use Cases:** Content-heavy sites, documentation, research reports, academic work, typography showcases, text-first applications.

---

## 5. Neon Terminal

**Philosophy:** The command line as aesthetic. Monospace discipline, neon on dark, information density.

**Color Palette:**

```
/* Single mode — dark only */
--background: 240 10% 4%    /* #0A0A0F */
--foreground: 120 100% 63%  /* #00FF41 Terminal Green */
--primary: 120 100% 63%
--primary-foreground: 0 0% 0%
--secondary: 38 100% 50%    /* #FFB000 Amber */
--muted: 240 5% 15%
--card: 120 100% 63% / 0.02
--border: 120 100% 63% / 0.3
--accent: 195 100% 50%      /* #00D4FF Cyan */
```

**Typography:**
- Font: JetBrains Mono (Google Fonts), weights 400, 700
- Heading: 700, uppercase
- Body: 400, line-height 1.6
- Everything monospace — no serif or sans-serif anywhere

**Spacing:** 8 / 16 / 24 / 32 / 48px — grid-aligned

**Border Radius:** 0px or 2px maximum.

**Border/Shadow:**
- Borders: 1px solid green at 30% opacity
- Glow: `0 0 10px hsl(120 100% 63% / 0.2)` on focus/hover
- Text shadow: `0 0 5px` green glow on headings

**Component Patterns:**
- **Card:** `border border-primary/30 bg-primary/[0.02] p-4`
- **Button:** `border border-primary text-primary px-4 py-1 hover:bg-primary hover:text-background`
- **Input:** `bg-transparent border border-primary/30 text-primary font-mono px-3 py-1.5`
- **Table:** Monospace with `|` column separators and `-` row separators
- **Prompt prefix:** `>_ ` before interactive elements

**Background:**
```css
/* CRT scanlines */
background-image: repeating-linear-gradient(
  0deg, transparent, transparent 2px,
  rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px
);
```

**Animations:**
- Typewriter text reveal
- Cursor blink: `opacity steps(1) 0.5s infinite`
- No smooth transitions — instant state changes

**Ideal Use Cases:** Developer tools, CLI documentation, hacker-themed games, system monitors, tech blogs.

---

## 6. Art Deco Luxe

**Philosophy:** 1920s geometric elegance. Symmetry, gold accents, ornamental precision, commanding presence.

**Color Palette:**

Light mode:
```
--background: 40 33% 95%    /* #FDF8F0 Cream */
--foreground: 0 0% 17%      /* #2C2C2C Charcoal */
--primary: 43 56% 54%       /* #C9A84C Gold */
--primary-foreground: 0 0% 10%
--secondary: 158 73% 21%    /* #0D5C3F Emerald */
--secondary-foreground: 0 0% 100%
--muted: 40 20% 90%
--card: 40 33% 97%
--border: 43 40% 75%        /* Light gold */
--accent: 345 100% 25%      /* #800020 Burgundy */
```

Dark mode:
```
--background: 0 0% 4%
--foreground: 40 33% 92%
--primary: 45 70% 58%       /* Brighter gold */
--secondary: 158 60% 30%
--card: 0 0% 8%
--border: 43 40% 30%
```

**Typography:**
- Heading: Playfair Display (Google Fonts), 700, uppercase, tracking 0.15em
- Body: Lato (Google Fonts), 400, line-height 1.6
- Scale: 14 / 16 / 20 / 28 / 36 / 48 / 64 / 80 / 100px

**Spacing:** 8 / 16 / 24 / 32 / 48 / 64 / 80 / 120px

**Border Radius:** 0px. All sharp corners. Elegance through geometry.

**Border/Shadow:**
- Cards: 1px gold border, optional double-border (2px gap between two 1px borders via padding + inner border)
- Decorative rules: 2px lines with diamond/dot CSS ornaments
- Shadow: `0 4px 20px rgba(0,0,0,0.1)` — subtle

**Component Patterns:**
- **Card:** `border border-primary/50 bg-card p-8`
- **Button:** `border-2 border-primary text-primary uppercase tracking-widest px-8 py-3 hover:bg-primary hover:text-primary-foreground`
- **Badge:** `border border-primary text-primary px-4 py-1 text-xs uppercase tracking-[0.2em]`
- **Divider:** `border-t-2 border-primary relative` with centered diamond ornament
- **Nav:** centered, uppercase, widely-tracked links

**Background:** Cream flat, optional geometric fan/sunburst CSS pattern at 3% opacity.

**Animations:**
- Slow, elegant: opacity + scale(0.98→1), 0.8s ease
- Gold shimmer: subtle gradient position animation
- No bouncy or playful motion

**Ideal Use Cases:** Luxury brands, event sites, wedding invitations, premium products, hotel/restaurant sites, formal reports.

---

## 7. Soft Pastel

**Philosophy:** Gentle, approachable, friendly. Soft colors that soothe rather than demand attention.

**Color Palette:**

Light mode:
```
--background: 20 60% 98%    /* #FFF9F5 */
--foreground: 270 20% 30%   /* #4A4453 */
--primary: 10 100% 83%      /* #FFB5A7 Coral */
--primary-foreground: 270 20% 20%
--secondary: 262 100% 85%   /* #C9B1FF Lavender */
--secondary-foreground: 262 30% 25%
--muted: 20 30% 94%
--card: 0 0% 100%
--border: 20 20% 90%
--accent: 150 55% 75%       /* #B5EAD7 Mint */
```

Dark mode:
```
--background: 270 20% 14%   /* #2A2535 */
--foreground: 20 30% 90%
--primary: 10 80% 75%
--secondary: 262 60% 65%
--card: 270 15% 18%
--border: 270 10% 25%
```

**Typography:**
- Heading: Nunito (Google Fonts), 700, normal case
- Body: Nunito, 400, line-height 1.7
- Scale: 12 / 14 / 16 / 20 / 24 / 32 / 40 / 56 / 72px

**Spacing:** 4 / 8 / 12 / 16 / 24 / 32 / 40 / 56 / 72 / 96px

**Border Radius:** sm: 12px, md: 16px, lg: 24px, full: 9999px

**Border/Shadow:**
- Cards: no border, `box-shadow: 0 4px 20px rgba(0,0,0,0.04)`
- Hover: `box-shadow: 0 8px 30px rgba(0,0,0,0.08)`
- Focus: 2px ring in primary at 50% opacity

**Component Patterns:**
- **Card:** `bg-card rounded-3xl shadow-sm p-6 hover:shadow-md transition-shadow`
- **Button:** `bg-primary text-primary-foreground rounded-full px-6 py-2.5 hover:brightness-95`
- **Badge:** `bg-accent/30 text-accent-foreground rounded-full px-3 py-1 text-xs`
- **Input:** `bg-muted rounded-xl px-4 py-2.5 border-none`
- **Nav:** `rounded-full bg-card shadow-sm px-6 py-2` — floating pill nav

**Background:** Warm white with optional floating gradient blobs (radial-gradient, pastel colors, 5% opacity).

**Animations:**
- Gentle: opacity + translateY(10px), 0.5s ease
- Hover: shadow increase, slight scale(1.01)
- No jarring motion

**Ideal Use Cases:** Health/wellness apps, children's products, social platforms, personal blogs, onboarding flows.

---

## 8. Corporate Clarity

**Philosophy:** Professional trust. Clean, structured, data-forward. Designed for credibility.

**Color Palette:**

Light mode:
```
--background: 0 0% 100%
--foreground: 215 35% 15%   /* #172B4D */
--primary: 215 85% 40%      /* #0052CC */
--primary-foreground: 0 0% 100%
--secondary: 215 15% 45%    /* #5E6C84 */
--muted: 220 12% 96%        /* #F4F5F7 */
--card: 0 0% 100%
--border: 220 10% 88%       /* #DFE1E6 */
--accent-positive: 152 80% 28%  /* #00875A */
--accent-negative: 14 85% 46%   /* #DE350B */
```

Dark mode:
```
--background: 215 30% 12%   /* #1B2638 */
--foreground: 210 20% 90%
--primary: 215 85% 55%      /* #4C9AFF */
--card: 215 25% 16%
--border: 215 20% 25%
```

**Typography:**
- Font: Inter (Google Fonts), weights 400, 500, 600
- Heading: 600, normal case, -0.01em tracking
- Body: 400, line-height 1.5
- Scale: 12 / 14 / 16 / 20 / 24 / 32 / 40px — conservative

**Spacing:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64px

**Border Radius:** sm: 4px, md: 6px, lg: 8px — subtle rounding only

**Border/Shadow:**
- Card: 1px solid border, `box-shadow: 0 1px 3px rgba(0,0,0,0.04)`
- Elevated: `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`
- Focus: 2px blue outline, 2px offset

**Component Patterns:**
- **Card:** `bg-card border rounded-lg shadow-sm p-5`
- **Button (primary):** `bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium`
- **Button (secondary):** `border border-border text-foreground rounded-md px-4 py-2 text-sm`
- **Badge:** `bg-primary/10 text-primary rounded px-2 py-0.5 text-xs font-medium`
- **Table:** `border border-border divide-y` — clean ruled tables
- **Input:** `border border-border rounded-md px-3 py-2 text-sm`

**Background:** White or muted gray. Absolutely no decoration.

**Animations:**
- Functional only: 0.2s transitions on hover/focus
- Skeleton loading screens for async content
- No decorative animation

**Ideal Use Cases:** Enterprise software, admin dashboards, B2B platforms, analytics tools, documentation sites.

---

## 9. Botanical Earth

**Philosophy:** Nature-inspired groundedness. Organic shapes, earthy warmth, serene and thoughtful.

**Color Palette:**

Light mode:
```
--background: 36 33% 93%    /* #F5EFE6 Parchment */
--foreground: 25 30% 18%    /* #3D2E1E Earth Brown */
--primary: 115 20% 40%      /* #5B7553 Moss */
--primary-foreground: 0 0% 100%
--secondary: 25 40% 60%     /* #C4956A Clay */
--secondary-foreground: 25 30% 15%
--muted: 36 20% 88%
--card: 36 33% 96%
--border: 25 20% 80%
--accent: 15 60% 52%        /* #CB6843 Terracotta */
```

Dark mode:
```
--background: 110 20% 10%   /* #1A2318 */
--foreground: 36 25% 88%
--primary: 115 20% 45%
--secondary: 25 35% 55%
--card: 110 15% 14%
--border: 110 10% 22%
```

**Typography:**
- Heading: Fraunces (Google Fonts), 700, title case
- Body: Outfit (Google Fonts), 400, line-height 1.7
- Scale: 14 / 16 / 20 / 24 / 32 / 40 / 56 / 72px

**Spacing:** 8 / 16 / 24 / 32 / 48 / 64 / 80 / 120px

**Border Radius:** Organic asymmetric: `24px 24px 40px 24px` for cards, 9999px for buttons

**Border/Shadow:**
- Card: 1px solid clay/border-color, no shadow
- Hover: `box-shadow: 0 8px 24px rgba(61,46,30,0.08)`

**Component Patterns:**
- **Card:** `bg-card border border-border rounded-[24px_24px_40px_24px] p-8`
- **Button:** `bg-primary text-primary-foreground rounded-full px-6 py-2.5`
- **Badge:** `bg-accent/15 text-accent rounded-full px-3 py-1 text-xs`
- **Divider:** thin line with small leaf/circle ornament (CSS pseudo-element)

**Background:** Warm parchment, optional botanical line pattern at 3% opacity.

**Animations:**
- Organic: scale(0.95→1) + opacity, 0.7s ease
- Hover: gentle rotate(0.5deg)
- Slow, breathing motion

**Ideal Use Cases:** Wellness brands, organic products, sustainability sites, personal blogs, recipe apps, nature photography.

---

## 10. Noir Cinema

**Philosophy:** Dramatic contrast, cinematic mood. Dark backgrounds with selective illumination.

**Color Palette:**

```
/* Dark only — primary mode */
--background: 0 0% 3%       /* #080808 */
--foreground: 30 5% 88%     /* #E0DDD8 */
--primary: 16 100% 60%      /* #FF6B35 */
--primary-foreground: 0 0% 100%
--secondary: 0 0% 60%       /* #999999 */
--muted: 0 0% 12%
--card: 0 0% 6%
--border: 0 0% 15%
--accent: 210 90% 55%       /* #00A3FF */
```

Light variant (optional):
```
--background: 0 0% 10%      /* Dark gray instead of black */
--card: 0 0% 14%
```

**Typography:**
- Heading: Syne (Google Fonts), 700, uppercase, tracking 0.02em
- Body: Work Sans (Google Fonts), 400, line-height 1.6
- Scale: 14 / 16 / 20 / 28 / 36 / 48 / 72 / 96px

**Spacing:** 8 / 16 / 24 / 32 / 48 / 64 / 96px

**Border Radius:** sm: 4px, md: 8px, lg: 12px — restrained

**Border/Shadow:**
- Card: `border: 1px solid rgba(255,107,53,0.15)`, hover: opacity 1.0
- Glow: `0 0 30px hsl(var(--primary) / 0.15)` on featured elements
- Vignette: `box-shadow: inset 0 0 150px rgba(0,0,0,0.5)` on page wrapper

**Component Patterns:**
- **Card:** `bg-card border border-primary/15 rounded-xl p-6 hover:border-primary/40 transition-colors`
- **Button:** `border border-primary text-primary rounded-lg px-6 py-2.5 hover:bg-primary hover:text-white`
- **Badge:** `text-primary text-xs uppercase tracking-wider`
- **Input:** `bg-muted border border-border rounded-lg px-4 py-2`

**Background:** Near-black with subtle radial gradient (slightly lighter center). Optional film grain at 1%.

**Animations:**
- Dramatic: slow opacity, 0.8s, elements emerge from darkness
- Glow pulse on primary elements
- Hover: illumination (border/shadow brighten)

**Ideal Use Cases:** Film/media sites, music platforms, photography portfolios, luxury products, night-mode-first apps.

---

## 11. Memphis Pop

**Philosophy:** Joyful postmodernism. Bold colors, geometric patterns, intentional clash, maximum fun.

**Color Palette:**

Light mode:
```
--background: 340 60% 95%   /* #FFE8E8 Soft Pink */
--foreground: 215 40% 20%   /* #2C3E50 */
--primary: 0 80% 70%        /* #FF6B6B Coral */
--primary-foreground: 0 0% 100%
--secondary: 174 60% 55%    /* #4ECDC4 Teal */
--muted: 340 30% 90%
--card: 0 0% 100%
--border: 0 0% 0%           /* Black outlines */
--accent: 50 95% 65%        /* #FFE66D Yellow */
```

Dark mode:
```
--background: 270 50% 10%   /* #1A0A2E */
--foreground: 0 0% 95%
--card: 270 30% 16%
--border: 0 0% 100%
```

**Typography:**
- Heading: Bungee (Google Fonts), 400, uppercase
- Body: Quicksand (Google Fonts), 400
- Scale: wild — 16 / 24 / 36 / 48 / 72 / 96 / 140px

**Border Radius:** Per-corner chaos: `30px 0 30px 0` or `0 20px 0 20px`

**Border/Shadow:**
- Everything: 4px black border
- Shadow: `6px 6px 0` in a contrasting color (not black — use teal, yellow, coral)

**Component Patterns:**
- **Card:** `border-4 border-foreground rounded-[30px_0_30px_0] shadow-[6px_6px_0_theme(colors.secondary)] p-6 bg-card`
- **Button:** `bg-primary border-4 border-foreground shadow-[4px_4px_0_theme(colors.accent)] px-6 py-2 hover:rotate-1`
- **Badge:** `bg-accent border-2 border-foreground px-3 py-1 text-xs uppercase`

**Background:** Terrazzo pattern — scattered small shapes (CSS repeated radial/conic gradients).

**Animations:** Bouncy: `cubic-bezier(0.68, -0.55, 0.27, 1.55)`. Wiggle on hover. Rotation on load.

**Ideal Use Cases:** Children's brands, creative agencies, party/event sites, playful portfolios, game-related projects.

---

## 12. Newspaper Classic

**Philosophy:** The authority of print journalism. Serif typography, column layouts, thin rules.

**Color Palette:**

Light mode:
```
--background: 38 30% 93%    /* #F5F0E8 Newsprint */
--foreground: 0 0% 20%      /* #333333 */
--primary: 0 0% 10%         /* #1A1A1A Near-Black */
--primary-foreground: 0 0% 100%
--secondary: 213 45% 35%    /* #1E3A5F Ink Blue */
--muted: 38 15% 88%
--card: 38 30% 93%
--border: 38 10% 78%
--accent: 0 85% 45%         /* #CC0000 Red */
```

Dark mode:
```
--background: 0 0% 10%
--foreground: 38 20% 90%
--border: 0 0% 22%
```

**Typography:**
- Heading: Libre Baskerville (Google Fonts), 700, title case
- Body: Source Serif 4 (Google Fonts), 400, line-height 1.7
- Bylines: small caps (font-variant: small-caps), 0.8rem

**Border Radius:** 0px everywhere.

**Component Patterns:**
- **No cards** — content separated by 1px horizontal rules
- **Column dividers:** 1px vertical rules between grid columns
- **Links:** underlined, ink blue
- **Pull quotes:** large italic serif, bordered top/bottom with 2px rules

**Background:** Flat newsprint color with very subtle noise texture.

**Animations:** Near-zero. 0.3s opacity on page transitions.

**Ideal Use Cases:** News sites, long-form articles, research publications, academic papers, literary magazines.

---

## 13. Cyberpunk Grid

**Philosophy:** High-tech dystopian future. Neon on dark, glitch effects, digital noise.

**Color Palette:**

```
--background: 260 20% 5%    /* #0A0A0F */
--foreground: 0 0% 88%
--primary: 300 100% 50%     /* #FF00FF Magenta */
--secondary: 180 100% 50%   /* #00FFFF Cyan */
--muted: 260 10% 15%
--card: 300 100% 50% / 0.03
--border: 180 100% 50% / 0.3
--accent: 120 100% 50%      /* #00FF00 Green */
```

**Typography:**
- Heading: Orbitron (Google Fonts), 700, uppercase, tracking 0.1em
- Body: JetBrains Mono, 400
- Neon text-shadow on headings

**Component Patterns:**
- **Card:** thin cyan border, near-transparent bg, corner bracket decorations (pseudo-elements)
- **Button:** bordered, no fill, neon glow hover
- **Glitch effect:** `transform: translate(2px, -2px)` flicker keyframe

**No light mode.** This aesthetic requires darkness.

**Ideal Use Cases:** Gaming, sci-fi, music/DJ sites, developer portfolios, cybersecurity tools.

---

## 14. Vaporwave Dream

**Philosophy:** Retro-futuristic nostalgia. Pink/purple gradients, perspective grids, dreamy atmosphere.

**Color Palette:**

```
--background: 270 70% 12%   /* Deep Purple */
--foreground: 340 50% 92%   /* Pink-White */
--primary: 330 100% 72%     /* #FF71CE Hot Pink */
--secondary: 270 100% 72%   /* #B967FF Purple */
--accent: 190 100% 50%      /* #01CDFE Teal */
--muted: 270 30% 18%
--card: 0 0% 100% / 0.05
--border: 330 80% 60% / 0.3
```

**Typography:**
- Heading: Russo One (Google Fonts), uppercase
- Body: Outfit, 300

**Background:** Dark gradient with CSS perspective grid floor at bottom third.

**Animations:** Dreamy: slow float (translateY oscillation, 4s), gentle pulse, parallax.

**Ideal Use Cases:** Music platforms, retro-themed projects, art galleries, creative portfolios, experimental sites.

---

## 15. Material Warm

**Philosophy:** Google's Material Design 3, seeded from a warm orange tone. Tonal surfaces, adaptive color.

**Color Palette:**

Light mode:
```
--background: 30 30% 99%    /* #FFFBFF */
--foreground: 30 30% 10%
--primary: 30 80% 30%       /* #8B5000 */
--primary-foreground: 0 0% 100%
--secondary: 30 30% 35%     /* #715A41 */
--muted: 30 15% 94%
--card: 30 30% 99%
--border: 30 10% 78%
```

Dark mode:
```
--background: 30 15% 8%     /* #1F1B16 */
--primary: 30 80% 68%       /* #FFB95B */
--card: 30 10% 12%
```

**Typography:** Roboto Flex or Inter, 400/500/700. M3 type scale.

**Border Radius:** 28px (extra-large), 16px (large), 12px (medium), 8px (small)

**Animations:** M3 emphasized easing: `cubic-bezier(0.2, 0, 0, 1)`, 500ms.

**Ideal Use Cases:** Android-companion web apps, Google ecosystem tools, productivity apps, consumer products.

---

## 16. Scandi Clean

**Philosophy:** Nordic restraint. Functionality over decoration, natural warmth, breathing space.

**Color Palette:**

Light mode:
```
--background: 0 0% 98%
--foreground: 0 0% 17%
--primary: 20 15% 50%       /* #8B8178 Warm Gray */
--secondary: 110 15% 62%    /* #A5B89C Sage */
--muted: 20 10% 94%
--card: 0 0% 100%
--border: 20 10% 88%
--accent: 20 50% 55%        /* #C67D4B Burnt Sienna */
```

Dark mode:
```
--background: 0 0% 10%
--foreground: 20 10% 88%
--card: 0 0% 14%
```

**Typography:** Manrope, 400/600. Heading 600 (not bold), normal case.

**Border Radius:** 16px uniform.

**Animations:** Barely perceptible: opacity only, 0.6s.

**Ideal Use Cases:** Design studios, architecture sites, furniture/home, photography, journals.

---

## 17. Blueprint Tech

**Philosophy:** Engineering precision. Technical drawing aesthetic, diagrammatic clarity.

**Color Palette:**

```
--background: 210 60% 15%   /* #0B2545 Blueprint Dark */
--foreground: 0 0% 100%
--primary: 210 45% 35%      /* #1B4965 Blueprint Blue */
--secondary: 200 50% 65%    /* #5FA8D3 Blueprint Light */
--border: 190 40% 55%       /* #62B6CB Cyan */
--accent: 15 80% 55%        /* #EE6C4D Red Annotation */
```

**Typography:**
- Heading: Archivo, 700, uppercase, tracking 0.05em
- Body: IBM Plex Mono, 400

**Border Radius:** 0px. Sharp precision.

**Background:** Deep blue with visible cyan grid (40px cells, 15% opacity).

**Component Patterns:**
- Section numbers: `§1`, `§2` prefixes
- Corner registration marks on cards
- Dimension lines as decorative elements

**Ideal Use Cases:** Engineering firms, technical documentation, architecture, CAD tools, hardware companies.

---

## 18. Wabi-Sabi Ink

**Philosophy:** Japanese aesthetic of imperfection. Asymmetry, negative space, organic textures.

**Color Palette:**

Light mode:
```
--background: 38 30% 93%    /* #F5F0E8 Washi */
--foreground: 25 20% 20%    /* #3C3028 Brown */
--primary: 0 0% 17%         /* #2C2C2C Sumi Ink */
--secondary: 95 12% 50%     /* #7B8B6F Matcha */
--accent: 7 65% 52%         /* #D04A35 Vermillion */
--border: 38 15% 82%
```

Dark mode:
```
--background: 40 10% 10%    /* #1C1B19 */
--foreground: 38 20% 85%
```

**Typography:** Zen Kaku Gothic New + Source Serif 4, moderate sizes, generous line-height 1.8.

**Border Radius:** Asymmetric: one corner rounded (e.g., `0 24px 0 0`).

**Animations:** Slow, meditative — 1s+ transitions. Ink spreading metaphor.

**Ideal Use Cases:** Japanese restaurants, tea brands, art galleries, meditation apps, minimalist portfolios.

---

## 19. Pop Comic

**Philosophy:** Comic book energy. Bold outlines, primary colors, halftone patterns, maximum impact.

**Color Palette:**

Light mode:
```
--background: 55 100% 50%   /* #FFFF00 Yellow */
--foreground: 0 0% 0%
--primary: 0 100% 50%       /* #FF0000 Red */
--secondary: 240 100% 50%   /* #0000FF Blue */
--card: 0 0% 100%
--border: 0 0% 0%
```

Dark mode:
```
--background: 0 0% 5%
--foreground: 0 0% 100%
/* Colors maintain full saturation */
```

**Typography:** Bangers + Comic Neue. Massive headings (10xl+).

**Border Radius:** 0px everywhere.

**Border/Shadow:** 4px black outlines, 6px offset shadows.

**Background:** Ben-Day halftone dots (CSS radial-gradient repeating).

**Animations:** Fast pops (0.2s), stamp-in effects, scale on hover.

**Ideal Use Cases:** Entertainment, children's media, comic/manga sites, creative campaigns, game promotions.

---

## 20. Isometric Depth

**Philosophy:** Playful 3D dimensionality. Shadows as depth cues, clean geometry, cheerful precision.

**Color Palette:**

Light mode:
```
--background: 220 15% 96%   /* #F0F2F5 */
--foreground: 225 30% 14%   /* #1A2138 */
--primary: 0 75% 70%        /* #FF6B6B Coral */
--secondary: 210 75% 65%    /* #4DA6FF Sky */
--muted: 220 10% 90%
--card: 0 0% 100%
--border: 220 10% 88%
--accent: 162 65% 50%       /* #26D9A5 Mint */
```

Dark mode:
```
--background: 225 30% 14%
--foreground: 220 15% 92%
--card: 225 20% 19%
--border: 225 15% 25%
/* Shadows become colored glows */
```

**Typography:** Poppins, 400/700, normal case, -0.01em heading tracking.

**Border Radius:** 20px for cards, 12px for buttons.

**Border/Shadow:**
- Cards: no border, `box-shadow: 0 10px 30px rgba(0,0,0,0.08)`
- Hover: deeper shadow + translateY(-2px)
- 3D tilt: CSS perspective + rotateX/Y on hover

**Animations:**
- Rise from below: translateY(20px→0) + shadow deepening, 0.4s
- 3D card tilt on hover

**Ideal Use Cases:** SaaS landing pages, product showcases, startup sites, educational platforms, creative tools.
