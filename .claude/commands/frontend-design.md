# Frontend Design Skill — Complete Framework

You are now in **frontend design mode**. Follow every step below before writing a single line of HTML or CSS.

---

## Step 0 — Gather Design Inspiration & Theme Direction

Before designing, collect inspiration to inform all downstream decisions.

### **0a. Inspiration Sources**

Bookmark and review these references:
- [ ] **Inspiration Sites:** 
  - e.g., https://www.behance.net/gallery/237515395/SKYLINE-TOWER-Website-Design?utm_source=Pinterest&utm_medium=organic
  - Review for: layout patterns, color schemes, typography pairing, spacing approaches
  
- [ ] **Inspiration Photos:** (User provides 3–5 image files or links)
  - e.g., brand mood boards, competitor sites, design references
  - Save to `brand_assets/inspiration/` for reference during design

### **0b. Theme Direction Checklist**

Based on inspiration, answer:
- [ ] **Overall vibe:** Modern/minimal? Playful? Corporate? Warm? Cool?
- [ ] **Color mood:** Bold & saturated? Muted & soft? High contrast?
- [ ] **Typography mood:** Geometric sans? Serif + sans? Grotesque? Humanist?
- [ ] **Spacing approach:** Tight & dense? Generous & airy? Mixed?
- [ ] **Component style:** Flat? Neumorphic? Glassmorphism? Shadow-based depth?

### **0c. Inspiration Summary for User**

Output to user:
```
## Inspiration Analysis

**Vibe:** [From sites/photos]
**Color mood:** [From sites/photos]
**Typography approach:** [From sites/photos]
**Spacing preference:** [From sites/photos]
**Component depth:** [From sites/photos]

**Primary brand color:** Blue (user-specified)
**Secondary/Accent:** [TBD from inspiration]
**Neutrals:** [TBD from inspiration]
**Dark mode palette:** [TBD from inspiration]
```

Wait for user confirmation before proceeding to Step 1.

---

## Step 1 — Audit Brand Assets & Folder Structure

Run this check immediately.

### **1a. Brand Asset Location**

Confirm this folder exists at **project root**:
```
your-project/
├── brand_assets/
│   ├── logo.svg (or .png)
│   ├── logo-dark.svg (dark mode variant)
│   ├── color-palette.json (or .md with hex values)
│   ├── inspiration/
│   │   ├── site-1-screenshot.png
│   │   ├── site-2-screenshot.png
│   │   ├── mood-board.png
│   │   └── color-mood.png
│   ├── fonts/
│   │   ├── heading-font.woff2
│   │   └── body-font.woff2
│   ├── patterns/
│   │   ├── texture-light.png
│   │   └── texture-dark.png
│   └── style-guide.md
├── serve.mjs
├── screenshot.mjs
├── tailwind.config.js
├── src/
└── package.json
```

**NOT in `.claude/`** — that's for Claude workspace config only.

### **1b. Asset Inventory**

Check for each item:
- [ ] Logo (light variant)
- [ ] Logo dark (dark mode variant)
- [ ] Color palette file (`color-palette.json` or documented in `style-guide.md`)
- [ ] Font files (woff2 format) or Google Font names
- [ ] Inspiration screenshots saved to `brand_assets/inspiration/`
- [ ] Patterns/textures (optional)
- [ ] Brand guidelines doc (optional but recommended)



If not, create one based on user's input + inspiration:
- **Primary:** Blue (user-specified) + extracted hex from inspiration
- **Secondary:** Complementary or accent color from inspiration
- **Neutrals:** Gray scale (light → dark, 50–900)
- **Dark mode:** Extracted from inspiration or designed for contrast

**Output the palette to user for approval before proceeding.**

---

## Step 2 — Lock In Design Tokens & Responsive Strategy

Before writing code, declare all token decisions.

### **2a. Core Design Tokens**

| Token | Decision | Source |
|---|---|---|
| Primary color | `<hex>` | From brand assets or inspiration |
| Secondary color | `<hex>` | Complementary to primary |
| Accent color | `<hex>` | For CTAs, highlights |
| Neutral 50 (lightest) | `<hex>` | Light backgrounds |
| Neutral 900 (darkest) | `<hex>` | Dark text |
| Dark mode BG | `<hex>` | From dark_mode.bg |
| Dark mode text | `<hex>` | From dark_mode.text |
| Dark mode secondary | `<hex>` | For cards, sections |

### **2b. Typography Scale (Modular 1.125x ratio)**

Determined by inspiration (Google Fonts or woff2 files):

| Element | Size | Weight | Font Family | Usage |
|---|---|---|---|---|
| h1 (Page Title) | 2.5rem (40px) | 700 | [Heading Font] | Hero, main page title |
| h2 (Section) | 1.75rem (28px) | 600 | [Heading Font] | Section headers |
| h3 (Subsection) | 1.25rem (20px) | 600 | [Heading Font] | Card titles |
| Body | 1rem (16px) | 400 | [Body Font] | Paragraphs, default text |
| Small (Caption) | 0.875rem (14px) | 400 | [Body Font] | Labels, metadata |

**Rule:** Heading font ≠ Body font. Must be visually distinct (from inspiration research).

### **2c. Spacing Scale (8px base unit)**

| Name | Value | Use Case |
|---|---|---|
| xs | 4px | Micro-spacing (icon padding) |
| sm | 8px | Tight spacing (input padding) |
| md | 16px | Default padding/margin (cards, sections) |
| lg | 24px | Section spacing (vertical rhythm) |
| xl | 32px | Large gaps (between major sections) |
| 2xl | 48px | Hero spacing (banner, CTAs) |

### **2d. Responsive Breakpoints**

| Device | Width | Tailwind | Strategy |
|---|---|---|---|
| Mobile | 320–640px | Base / `sm:` | Single column, stacked, touch-friendly |
| Tablet | 641–1024px | `md:` | 2–3 columns, adjusted spacing, smaller headers |
| Desktop | 1025–1440px | `lg:` | Full multi-column, hover states active |
| Large | 1440px+ | `xl:` | 4+ columns, max-width container (1280px) |

**Implementation rule:** Design mobile-first. Add `md:`, `lg:`, `xl:` progressively.

### **2e. Border Radius Scale**

| Name | Value | Use Case |
|---|---|---|
| None | 0px | Cards, images (sharp) |
| sm | 4px | Form inputs, small buttons |
| md | 8px | Standard buttons, small cards |
| lg | 12px | Large cards, containers |
| xl | 16px | Modals, hero sections |
| full | 9999px | Badges, circular avatars |

### **2f. Shadow Scale (Layered, Color-Tinted)**

| Depth | CSS | Use Case |
|---|---|---|
| None | `box-shadow: none` | Flat backgrounds |
| sm | `0 1px 2px rgba(0,102,204,0.1)` | Subtle lift (inputs, hover) |
| md | `0 4px 8px rgba(0,102,204,0.15)` | Elevated cards, small modals |
| lg | `0 12px 24px rgba(0,102,204,0.2)` | High-priority modals, popovers |
| xl | `0 20px 40px rgba(0,102,204,0.25)` | Full-screen overlays |

**Rule:** Shadows are tinted with primary color at low opacity (0.1–0.25), never pure black.

### **2g. Dark Mode Color Mapping**

| Light Mode | Dark Mode | Notes |
|---|---|---|
| `bg-white` | `dark:bg-dark-bg` | Page background |
| `text-gray-900` | `dark:text-dark-text` | Primary text |
| `bg-gray-50` | `dark:bg-dark-bg-secondary` | Section backgrounds, cards |
| `border-gray-200` | `dark:border-gray-700` | Dividers |
| `shadow-md` | `dark:shadow-lg` | Increase shadow depth in dark mode |
| `primary-color` | `primary-color` (same) | Brand colors usually don't change |

### **Output this entire section to user for approval.**

---

## Step 2.5 — UI/UX Principles & Accessibility Checklist

Before designing, lock in these UX patterns.

### **Visual Hierarchy**
- [ ] **Size:** Largest text = most important (h1 > h2 > h3 > body)
- [ ] **Color weight:** Primary color for CTAs only, not background noise
- [ ] **White space:** Generous margins isolate important content
- [ ] **Emphasis:** Use bold, color, or scale—not all three
- [ ] **Contrast:** Text always 4.5:1 or higher (WCAG AA minimum)

### **Feedback & Interactive States**
- [ ] **Hover:** Change `opacity` or `scale(1.05)` on buttons/cards (not `transition-all`)
- [ ] **Active/Focus:** Highlight with primary color + underline or border
- [ ] **Disabled:** `opacity-50` + `cursor-not-allowed`
- [ ] **Loading:** Spinner or skeleton state, never silent
- [ ] **Error:** Red highlight + clear error message (never color-only)
- [ ] **Success:** Green highlight + confirmation message

### **Consistency & Patterns**
- [ ] **Buttons:** All follow same style (size, padding, border-radius)
- [ ] **Cards:** Same shadow depth, spacing, border-radius
- [ ] **Forms:** Consistent input heights (44–48px), labels, helper text placement
- [ ] **Spacing:** Always use the spacing scale (4, 8, 16, 24, 32, 48px)
- [ ] **No magic numbers:** Every pixel must align to the scale

### **Accessibility (WCAG AA Baseline)**
- [ ] **Text contrast:** ≥ 4.5:1 for body text, ≥ 3:1 for large text (18pt+)
- [ ] **Focus rings:** Visible on all interactive elements (2px solid primary color)
- [ ] **Semantic HTML:** `<button>` not `<div>`, `<nav>`, `<main>`, `<article>`
- [ ] **Color + icon/text:** Never communicate with color only
- [ ] **Keyboard navigation:** Tab through all elements, no traps, logical order
- [ ] **Alt text:** All images have descriptive, concise alt attributes
- [ ] **Touch targets:** ≥ 44x44px on mobile, ≥ 36x36px minimum
- [ ] **Form labels:** Every input has associated `<label>`
- [ ] **Skip links:** For long pages, include "Skip to content" link (visible on focus)
- [ ] **ARIA landmarks:** Use `role="main"`, `role="navigation"`, `aria-label` where needed

### **Mobile-First Responsive Design**
- [ ] **Base:** Design for 320px mobile viewport first
- [ ] **Enhance:** Add `md:`, `lg:`, `xl:` progressively
- [ ] **Typography:** Scale up font sizes (body 14px mobile → 16px desktop)
- [ ] **Spacing:** Compress vertically on mobile, expand on desktop
- [ ] **Layout:** Single column → 2 columns (tablet) → 3+ columns (desktop)
- [ ] **Images:** Responsive sizes (`srcset`) or next/image component
- [ ] **Touch:** Tap targets 44x44px minimum, adequate spacing between

### **Performance & Optimization**
- [ ] **Images:** Optimized (< 50KB for hero, < 20KB for thumbnails), responsive
- [ ] **Fonts:** woff2 format, max 2 font files, lazy-loaded if possible
- [ ] **CSS:** No `transition-all`, only `transform` + `opacity` for 60fps
- [ ] **JS:** Critical code inline, defer non-critical scripts
- [ ] **Lazy loading:** Images below the fold use `loading="lazy"`
- [ ] **Bundle:** CSS minified, unused Tailwind classes purged

### **Audit Before Shipping**
- [ ] Run **Lighthouse** (target 90+ Accessibility, 85+ Performance)
- [ ] Check **Axe DevTools** (0 violations, pass all tests)
- [ ] Test in **Chrome, Firefox, Safari** (desktop)
- [ ] Test on **mobile Safari (iPhone) + Chrome (Android)**
- [ ] Verify all interactive elements have focus rings
- [ ] Test keyboard navigation (Tab, Shift+Tab, Enter, Escape)

---

## Step 3 — Confirm All Hard Rules Active

Acknowledge these constraints are locked in:

- [ ] **No Tailwind defaults** — only custom brand colors (e.g., `text-brand-primary`, `bg-brand-blue`)
- [ ] **No `transition-all`** — only `transition-transform` or `transition-opacity`
- [ ] **No flat shadows** — layered, color-tinted (e.g., `shadow-lg` with brand color tint)
- [ ] **Typography distinction** — Heading font ≠ Body font (must be visually different)
- [ ] **Spacing scale enforced** — only 4, 8, 16, 24, 32, 48px values
- [ ] **Dark mode ready** — all colors have light AND dark variants
- [ ] **Responsive first** — mobile (base) → tablet (`md:`) → desktop (`lg:`)
- [ ] **Focus rings** — all interactive elements have `:focus-visible` state (2px primary)
- [ ] **No `file:///`** — always test at `http://localhost:3000`
- [ ] **2+ screenshot rounds** — compare pixel-by-pixel, minimum 2 refinement passes
- [ ] **Color-contrast tested** — use Axe DevTools before shipping

---

## Step 4 — Server Readiness & Tailwind Config

Ensure infrastructure is ready.

### **4a. Project Structure Check**
- [ ] `serve.mjs` exists at project root
- [ ] `screenshot.mjs` exists at project root
- [ ] `tailwind.config.js` exists at project root
- [ ] `src/` folder contains your React components

### **4b. Tailwind Configuration**

Update `tailwind.config.js` with custom brand colors:

```javascript
export default {
  darkMode: 'class', // Use class-based dark mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        'brand-primary': '#0066CC',     // Blue (user-specified)
        'brand-primary-light': '#3385D6',
        'brand-primary-dark': '#0052A3',
        'brand-secondary': '#FF6B35',   // From inspiration (adjust)
           // From inspiration (adjust)
        
        // Neutral grayscale
        'neutral-50': '#F9F9F9',
        'neutral-100': '#F0F0F0',
        'neutral-200': '#E5E5E5',
        'neutral-300': '#D0D0D0',
        'neutral-400': '#A0A0A0',
        'neutral-500': '#808080',
        'neutral-600': '#666666',
        'neutral-700': '#4D4D4D',
        'neutral-800': '#333333',
        'neutral-900': '#1A1A1A',
        
        // Dark mode palette
        'dark-bg': '#0A0E27',
        'dark-bg-secondary': '#14213D',
        'dark-text': '#E8E8E8',
        'dark-text-secondary': '#B0B0B0',
      },
      fontFamily: {
        'heading': '[Heading Font Name]', 
        'body': '[Body Font Name]',       
      },
      fontSize: {
        'xs': ['0.75rem', '1rem'],
        'sm': ['0.875rem', '1.25rem'],
        'base': ['1rem', '1.5rem'],
        'lg': ['1.125rem', '1.75rem'],
        'xl': ['1.25rem', '1.875rem'],
        '2xl': ['1.5rem', '2.25rem'],
        '3xl': ['1.875rem', '2.625rem'],
        '4xl': ['2.25rem', '3rem'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 102, 204, 0.1)',
        'md': '0 4px 8px rgba(0, 102, 204, 0.15)',
        'lg': '0 12px 24px rgba(0, 102, 204, 0.2)',
        'xl': '0 20px 40px rgba(0, 102, 204, 0.25)',
      },
    },
  },
  plugins: [],
}
```

### **4c. Server Startup**

Before any screenshot:
1. Open terminal at project root
2. Run: `node serve.mjs` (keep running in background)
3. Confirm: `http://localhost:3000` loads successfully
4. Do NOT proceed until server is live

---

## Step 5 — Dark Mode Implementation

Implement the toggle hook and wiring.

### **5a. Create Dark Mode Hook (src/hooks/useDarkMode.js)**

```javascript
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = saved ? saved === 'dark' : prefersDark;
    
    setIsDark(isDarkMode);
    applyTheme(isDarkMode);
  }, []);

  const applyTheme = (isDarkMode) => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
  };

  return { isDark, toggleDarkMode };
};
```

### **5b. Header Component with Toggle**

```jsx
import { useDarkMode } from '@/hooks/useDarkMode';

export const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <header className="
      bg-white dark:bg-dark-bg
      text-neutral-900 dark:text-dark-text
      border-b border-neutral-200 dark:border-neutral-700
      py-4 px-6
      shadow-sm dark:shadow-md
    ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-brand-primary">Logo</h1>
        
        <button
          onClick={toggleDarkMode}
          className="
            px-4 py-2
            bg-brand-primary text-white
            hover:bg-brand-primary-dark
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary
            rounded-md
            transition-colors
          "
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
};
```

### **5c. Styling with Dark Mode**

All components use Tailwind's `dark:` prefix:

```jsx
<div className="
  bg-white dark:bg-dark-bg
  text-neutral-900 dark:text-dark-text
  border border-neutral-200 dark:border-neutral-700
  rounded-lg
  shadow-md dark:shadow-lg
  p-6
">
  <h2 className="text-xl font-heading font-bold text-brand-primary mb-4">
    Section Title
  </h2>
  <p className="text-base font-body text-neutral-700 dark:text-dark-text-secondary">
    Content here.
  </p>
</div>
```

---

## Step 6 — Screenshot Workflow & Comparison

Establish systematic visual benchmarking.

### **6a. Screenshot Setup**
- [ ] `screenshot.mjs` exists at project root
- [ ] Screenshots auto-save to `./temporary screenshots/screenshot-N.png`
- [ ] File counter increments automatically

### **6b. Before First Screenshot**

1. Ensure `serve.mjs` is running (`http://localhost:3000` accessible)
2. Ensure all changes are saved
3. Take screenshot: `node screenshot.mjs`
4. Wait for file to save to `./temporary screenshots/screenshot-1.png`

### **6c. Comparison Workflow (Minimum 2 Rounds)**

**Round 1: Initial Build**
1. Code component
2. Take screenshot: `node screenshot.mjs` → `screenshot-1.png`
3. **Read screenshot with View tool**
4. Analyze:
   - Spacing: Does it match your spacing scale (4, 8, 16, 24, 32, 48px)?
   - Typography: Do headings/body look distinct? Font sizes match scale?
   - Colors: Are hex values exact? Dark mode colors visible?
   - Responsive: Test at mobile (320px), tablet (768px), desktop (1440px)
   - Accessibility: Focus rings visible? Button targets ≥ 44x44px?

**Round 2: Refinement**
1. Fix identified issues in code
2. Take screenshot: `node screenshot.mjs` → `screenshot-2.png`
3. **Read screenshot with View tool**
4. Compare `screenshot-1.png` to `screenshot-2.png`
   - Side-by-side alignment
   - Color accuracy (use eye dropper to verify hex)
   - Shadow depth consistent
   - Spacing measured (use DevTools inspector)
5. If issues remain → Round 3
6. If clean → move to next section

### **6d. Pixel-Level Comparison Checklist**

When reviewing screenshots:
- [ ] **Spacing:** Margins/padding match scale (use DevTools ruler)
- [ ] **Typography:** Font sizes, weights, line-heights as specified
- [ ] **Colors:** Hex values exact (use color picker)
- [ ] **Alignment:** Elements left-aligned, centered, or right-aligned correctly
- [ ] **Border radius:** Corners match scale (0, 4, 8, 12, 16px)
- [ ] **Shadows:** Depth and color tint visible
- [ ] **Responsive:** Test at 3 viewport widths (320px, 768px, 1440px)
- [ ] **Dark mode:** Switch theme, verify all colors swap correctly

### **6e. When to Stop**

Stop refinement when:
- ✅ All spacing matches scale
- ✅ All colors match brand palette
- ✅ Typography visually distinct (heading vs body)
- ✅ Focus rings visible on all interactive elements
- ✅ Dark mode toggles cleanly
- ✅ Responsive breakpoints tested (mobile, tablet, desktop)
- ✅ Lighthouse score ≥ 85 (Accessibility, Performance)
- ✅ Axe DevTools reports 0 violations

---

## Step 7 — Component Consistency Audit

Before closing the design phase, verify all components follow the same rules.

### **Visual Component Checklist**

- [ ] **Buttons:** All have same padding, border-radius, font size
  - Hover: opacity or scale change
  - Focus: 2px outline with brand color
  - Disabled: opacity-50, cursor-not-allowed
  
- [ ] **Cards:** All have same shadow, border-radius, padding
  - Light mode: white bg, subtle shadow
  - Dark mode: dark-bg-secondary, darker shadow
  
- [ ] **Inputs:** All have same height (44–48px), padding, border-radius
  - Focus: border color = brand-primary
  - Error: border color = red, error message visible
  
- [ ] **Spacing:** All use spacing scale (4, 8, 16, 24, 32, 48px)
  - No magic numbers (e.g., `p-7`, `m-13`)
  - Vertical rhythm consistent
  
- [ ] **Typography:** All headings use heading font, body uses body font
  - Size scale 1.125x ratio respected
  - Weight values consistent (400, 600, 700)
  
- [ ] **Colors:** All use custom brand colors, never Tailwind defaults
  - Primary blue used for CTAs only
  - Neutrals for text/backgrounds
  - Dark mode variants applied everywhere
  
- [ ] **Shadows:** All color-tinted (not pure black)
  - sm for subtle lift
  - md for cards
  - lg for modals
  
- [ ] **Border radius:** All use radius scale (0, 4, 8, 12, 16px)
  - No arbitrary values (e.g., `rounded-3`, `rounded-7`)

---

## Step 8 — Accessibility Final Check

Before shipping, run these tests.

### **Automated Tools**
- [ ] **Axe DevTools** (browser extension)
  - Run scan on each page
  - Target: 0 violations, 0 warnings
  
- [ ] **Lighthouse** (DevTools → Lighthouse)
  - Accessibility score ≥ 95
  - Performance score ≥ 85
  - Best Practices ≥ 85

- [ ] **WAVE** (browser extension) — optional secondary check

### **Manual Testing**

**Keyboard Navigation:**
- [ ] Tab through entire page, logical order
- [ ] Shift+Tab backwards works
- [ ] No keyboard traps (stuck elements)
- [ ] Focus ring visible on all interactive elements
- [ ] Focus ring has sufficient contrast (3:1 minimum)

**Color Contrast:**
- [ ] All body text ≥ 4.5:1 contrast
- [ ] All large text (18pt+) ≥ 3:1 contrast
- [ ] Icons + labels ≥ 3:1 if communicating information
- [ ] Use Axe's contrast checker or WebAIM tool

**Screen Reader (NVDA, JAWS, or VoiceOver on macOS):**
- [ ] Page title announced first
- [ ] Headings announced with correct hierarchy (h1 → h2 → h3)
- [ ] Images have alt text (skipped if decorative)
- [ ] Buttons announce correctly (not just "click here")
- [ ] Form labels associated with inputs
- [ ] Links have descriptive text (not just "click here")
- [ ] ARIA labels used for icon buttons

**Mobile Testing:**
- [ ] Touch targets ≥ 44x44px (iOS) or ≥ 48dp (Android)
- [ ] Adequate spacing between targets (8px minimum)
- [ ] Font size ≥ 16px (prevents iOS zoom on focus)
- [ ] Pinch-to-zoom not disabled (no `user-scalable=no`)
- [ ] Landscape orientation works

### **Issues Found?**
- [ ] Document issue with screenshot + description
- [ ] Fix in code
- [ ] Re-test with automated tool
- [ ] Confirm fix with manual test

---

## Step 9 — Dark Mode & Responsive Testing at Scale

Test the design across all conditions before final handoff.

### **9a. Dark Mode Testing**

For each page/component:
- [ ] Toggle dark mode on and off (should be smooth, no flash)
- [ ] All colors visible in both modes
- [ ] Text contrast maintained in dark mode (≥ 4.5:1)
- [ ] Images readable in dark mode
- [ ] Shadows visible and appropriate depth
- [ ] Icons/badges maintain visibility
- [ ] Links underlined or styled (color-only not sufficient)

**Screenshot in dark mode:**
1. Toggle to dark mode
2. `node screenshot.mjs` → `screenshot-dark-1.png`
3. Compare light and dark versions for consistency

### **9b. Responsive Testing at 3 Breakpoints**

Use Chrome DevTools to test at actual viewport widths:

**Mobile (320px):**
- [ ] Single column layout
- [ ] Font sizes readable without zoom
- [ ] Touch targets ≥ 44x44px
- [ ] Navigation accessible (hamburger menu or stacked)
- [ ] Images scaled appropriately
- [ ] No horizontal scroll
- Screenshot: `node screenshot.mjs` → `screenshot-mobile.png`

**Tablet (768px):**
- [ ] 2–3 column layout (if applicable)
- [ ] Spacing adjusted upward (but not max)
- [ ] Navigation visible or collapsible
- [ ] Images larger than mobile
- Screenshot: `node screenshot.mjs` → `screenshot-tablet.png`

**Desktop (1440px):**
- [ ] Full layout with 3+ columns
- [ ] Max-width container applied (1280px typical)
- [ ] Hover states visible on interactive elements
- [ ] Generous white space
- Screenshot: `node screenshot.mjs` → `screenshot-desktop.png`

### **Comparison:**
Review all 3 screenshots together:
- [ ] Consistent branding across all sizes
- [ ] Font hierarchy maintained (h1 largest, scales down)
- [ ] Spacing scales proportionally (tighter on mobile, more generous on desktop)
- [ ] Colors identical across sizes
- [ ] No awkward layouts at intermediate sizes

---

## Step 10 — Handoff & Documentation

Prepare final deliverables.

### **10a. Design System Documentation**

Create or update `brand_assets/style-guide.md`:

```markdown
# Design System — [Project Name]

## Color Palette

### Light Mode
- Primary (Blue): #0066CC
- Secondary: #FF6B35
- Accent: #FFD700
- Neutral 50: #F9F9F9
- Neutral 900: #1A1A1A

### Dark Mode
- Background: #0A0E27
- Background Secondary: #14213D
- Text: #E8E8E8
- Text Secondary: #B0B0B0

## Typography

### Heading Font: [Font Name]
- h1: 2.5rem (40px), weight 700
- h2: 1.75rem (28px), weight 600
- h3: 1.25rem (20px), weight 600

### Body Font: [Font Name]
- Body: 1rem (16px), weight 400
- Small: 0.875rem (14px), weight 400

## Spacing Scale (8px base)
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px

## Components

### Buttons
- Padding: 12px 24px (md) / 10px 20px (sm)
- Border radius: 8px
- Font: bold body font
- States: hover (scale 1.05), active (darker), disabled (opacity-50)

### Cards
- Padding: 24px
- Border radius: 12px
- Shadow: md (color-tinted blue)
- Dark mode: dark-bg-secondary with lg shadow

### Inputs
- Height: 44px (mobile) / 48px (desktop)
- Padding: 12px 16px
- Border: 1px solid neutral-300 / dark:neutral-700
- Focus: border-brand-primary, outline-none

## Accessibility

- Contrast ratio: 4.5:1 (WCAG AA)
- Focus rings: 2px solid brand-primary
- Touch targets: ≥ 44x44px

## Responsive Breakpoints

- Mobile: 320px–640px (base)
- Tablet: 641px–1024px (md:)
- Desktop: 1025px–1440px (lg:)
- Large: 1440px+ (xl:)
```

### **10b. Screenshots for Handoff**

Archive final screenshots:
- [ ] `screenshot-mobile-light.png`
- [ ] `screenshot-mobile-dark.png`
- [ ] `screenshot-tablet-light.png`
- [ ] `screenshot-tablet-dark.png`
- [ ] `screenshot-desktop-light.png`
- [ ] `screenshot-desktop-dark.png`

Save to: `brand_assets/final-screenshots/` or project root `/screenshots/`

### **10c. Code Handoff Checklist**

Before merging to main:
- [ ] `tailwind.config.js` updated with all custom colors/fonts
- [ ] `useDarkMode.js` hook created and imported in Header
- [ ] All `.jsx` files use custom color classes (not Tailwind defaults)
- [ ] No `transition-all` (only `transition-transform` or `transition-opacity`)
- [ ] Dark mode toggle visible and functional
- [ ] Responsive tested at 3 breakpoints
- [ ] Axe DevTools: 0 violations
- [ ] Lighthouse: ≥ 85 score (all categories)
- [ ] Git branch created: `design/[project-name]`
- [ ] PR submitted with design documentation link

### **10d. QA Sign-Off**

For team projects, confirm:
- [ ] Design approved by stakeholder/PM
- [ ] Accessibility approved by QA
- [ ] Performance approved by DevOps/performance lead
- [ ] Responsive approved on real devices (not just DevTools)

---

## You Are Now Ready

Respond to user with:

1. **Inspiration Analysis** (Step 0) — vibe, colors, typography approach
2. **Brand Assets** (Step 1) — what exists, palette extracted
3. **Design Tokens Table** (Step 2) — all colors, fonts, spacing, breakpoints
4. **Hard Rules Confirmation** (Step 3) — checklist of constraints
5. **Server Status** (Step 4) — localhost:3000 running, tailwind configured
6. **Next Steps** — await design instructions or component list

Then wait for user's design requirements and begin Step 5 (Dark Mode Implementation) and Step 6 (Screenshot Workflow).

---

## Quick Reference

### Color Classes in Tailwind
```
bg-brand-primary          → #0066CC
text-brand-primary        → #0066CC
border-brand-primary      → #0066CC
bg-dark-bg                → #0A0E27 (dark mode)
text-dark-text            → #E8E8E8 (dark mode)
```

### Responsive Tailwind Syntax
```
base (320px)    → p-4
sm: (640px)     → sm:p-6
md: (768px)     → md:p-8
lg: (1024px)    → lg:p-12
xl: (1280px)    → xl:p-16
```

### Dark Mode Syntax
```
bg-white dark:bg-dark-bg
text-gray-900 dark:text-dark-text
shadow-md dark:shadow-lg
```

### Focus States
```
focus-visible:outline-2
focus-visible:outline-offset-2
focus-visible:outline-brand-primary
```

### Spacing (No Transitions on All)
```
/* ✅ Good */
transition-transform duration-200 ease-out
transition-opacity duration-150

/* ❌ Bad */
transition-all duration-300
```

