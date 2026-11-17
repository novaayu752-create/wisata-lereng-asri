---
name: Lereng Asri Experience
colors:
  surface: '#fef9f0'
  surface-dim: '#ded9d1'
  surface-bright: '#fef9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ea'
  surface-container: '#f2ede4'
  surface-container-high: '#ece8df'
  surface-container-highest: '#e7e2d9'
  on-surface: '#1d1c16'
  on-surface-variant: '#424843'
  inverse-surface: '#32302a'
  inverse-on-surface: '#f5f0e7'
  outline: '#727973'
  outline-variant: '#c2c8c2'
  surface-tint: '#486554'
  primary: '#072417'
  on-primary: '#ffffff'
  primary-container: '#1e3a2b'
  on-primary-container: '#85a490'
  inverse-primary: '#aeceb9'
  secondary: '#106d20'
  on-secondary: '#ffffff'
  secondary-container: '#9df898'
  on-secondary-container: '#1a7425'
  tertiary: '#341800'
  on-tertiary: '#ffffff'
  tertiary-container: '#532a00'
  on-tertiary-container: '#e9831a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#caead4'
  primary-fixed-dim: '#aeceb9'
  on-primary-fixed: '#042013'
  on-primary-fixed-variant: '#304d3d'
  secondary-fixed: '#9df898'
  secondary-fixed-dim: '#82db7e'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005312'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#fef9f0'
  on-background: '#1d1c16'
  surface-variant: '#e7e2d9'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies the serene, revitalizing essence of Indonesian mountain ecotourism. Crafted with a mobile-first philosophy, it serves travelers, families, and outdoor enthusiasts navigating trails, farm stays, and cultural workshops directly from their mobile devices outdoors.

### Core Attributes
- **Verdant & Grounded:** Reflects lush tropical pine forests, terraced tea hills, and rich volcanic loam.
- **Warm & Welcoming (Ramah):** Evokes authentic village hospitality (*gotong royong*) through comforting earth tones and human-scaled typography.
- **Effortless Clarity:** Built for outdoor usability under changing natural light, prioritizing high legibility, generous interactive hit areas, and rapid orientation.

### Visual Style
A warm modern-organic aesthetic merging **Minimalist structural rigor** with **Tactile, nature-inspired surface tiers**. The UI minimizes visual clutter, relying on deep organic greens, warm ochre sunlight accents, soft cream canvases, and rounded organic surfaces that mirror natural terracing.

## Colors

The palette draws directly from the highland landscape of rural Indonesia: deep forest canopy, fresh hillside foliage, radiant morning sun over mountain peaks, and sun-baked earthen pathways.

### Palette Architecture
- **Primary (`#1E3A2B` - Deep Forest Green):** The foundational anchor color. Used for dominant headings, top navigation bars, key brand moments, and primary interactive states. Delivers exceptional contrast and authority.
- **Secondary (`#388E3C` - Fresh Leaf Green):** Vitality and action. Applied to primary call-to-actions, active filters, booking affirmations, and badges indicating active eco-tours or open attractions.
- **Tertiary (`#D97706` - Warm Ochre Gold):** Radiance and warmth. Reserved for ratings, highlight tags (e.g., "Sunrise Spot", "Local Favorite"), price highlights, and festive village events.
- **Neutral Surface (`#F4EFE6` - Terraced Sand):** Secondary canvas background and card fills that soften stark screen brightness when used in sunny outdoor environments.
- **Base Canvas (`#FDFBF7` - Soft Cream Mist):** The ambient root canvas, replacing harsh sterile white with a gentle, organic paper tone.
- **On-Surface (`#19231D` - Volcanic Earth Charcoal):** Maximum contrast reading tone for running body text and captions, softer on the eyes than jet black.

## Typography

The design system standardizes on **Plus Jakarta Sans** across all typographic tiers. Its contemporary humanist proportions, open apertures, and geometric clarity provide warm friendliness without compromising high-speed legibility when traveling.

### Scaling and Responsive Rules
- Heading levels leverage negative tracking (`-0.01em` to `-0.02em`) to bind titles tightly and create robust editorial presence on small screens.
- Body sizes are locked to a minimum of 14px on mobile viewports to prevent eye strain during outdoor walking conditions.
- Labels and buttons utilize medium-to-bold weights with slight positive letter spacing to improve rapid scannability on compact chips and floating touch targets.

## Layout & Spacing

A mobile-first fluid layout framework engineered for one-handed thumb reach and high spatial comfort.

### Layout Mechanics
- **Mobile (<640px):** 4-column fluid layout with `1rem` outer canvas margin and `0.75rem` gutters. Touch controls aggregate within the lower half of the screen ("thumb zone").
- **Tablet (640px–1024px):** 8-column layout with `1.5rem` margins and `1rem` gutters. Content containers transition into balanced two-column staggered grids for tour packages and local vendor profiles.
- **Desktop (>1024px):** 12-column layout capped at a maximum width of `1200px` centered with variable margins and `1.5rem` gutters.

### Spacing Principles
- Component padding strictly adheres to the 4px / 8px incremental scale (`space-xs` through `space-xl`).
- Generous inter-card spacing (`space-lg`) gives individual homestays, trekking routes, and cultural experiences distinct physical breathing room.

## Elevation & Depth

Visual hierarchy uses warm, organic tonal layering complemented by subtle ambient foliage shadows, avoiding cold, synthetic greyscale elevations.

### Surface Tiers
- **Tier 0 (Root Canvas):** `#FDFBF7` (Soft Cream Mist), flat un-elevated base canvas.
- **Tier 1 (Surface Cards & Lists):** Pure `#FFFFFF` or `#F4EFE6` with an ultra-fine border (`1px solid rgba(30, 58, 43, 0.08)`).
- **Tier 2 (Floating Touch Elements & Modals):** Filter pills, sticky bottom booking drawers, and floating quick-actions float above Tier 1 with an ambient shadow tinted with forest undertones:
  - `box-shadow: 0 8px 24px -4px rgba(30, 58, 43, 0.12), 0 2px 6px -1px rgba(30, 58, 43, 0.06);`

### Layering Discipline
Do not apply high-contrast pure black drop shadows. Depth must feel like sunlight passing through tree branches—soft, diffused, and naturally integrated with the cream and earth backgrounds.

## Shapes

The shape system adopts Level 2 (Rounded), introducing soft organic corners that echo river pebbles, tea leaves, and terraced slopes.

### Token Specifications
- **Base Components (Inputs, Small Badges, Chips):** `0.5rem` (8px).
- **Surface Cards & Action Panels:** `rounded-lg` (`1rem` / 16px).
- **Feature Sheets, Hero Cards, & Bottom Sheets:** `rounded-xl` (`1.5rem` / 24px) on top edge radii.
- **Touch Action Pills & Status Indicators:** Full pill (`9999px`) to emphasize tapability and directional guidance.

## Components

### Buttons & Interactive Controls
- **Touch Target Standard:** Minimum height of `48px` (ideally `52px` for primary booking actions) with an extended minimum tap area of `48x48px` to ensure effortless thumb interaction while walking or moving outdoors.
- **Primary Button:** Deep Forest Green (`#1E3A2B`) background, pure white text, bold label style, `0.75rem` border radius, subtle hover scale (`scale: 1.01`).
- **Secondary Button:** Fresh Leaf Green (`#388E3C`) background or Warm Sun Gold (`#D97706`) for key high-priority seasonal reservations.
- **Outline / Ghost Button:** Transparent background, `1.5px` border in `#1E3A2B`, body text in `#1E3A2B`.

### Destination & Homestay Cards
- **Structure:** Encapsulated within `rounded-lg` containers with clipping overflow.
- **Imagery:** 16:10 or 4:3 aspect ratio landscape imagery with rounded upper corners.
- **Metadata Badges:** Floated inside the upper card image area with pill-shaped badges (e.g., Ochre Gold for "4.9 ★ Rating", Forest Green for "Pemandu Lokal").
- **Content Block:** `space-md` padding containing title (`headline-sm`), price tiering in tertiary ochre, and clear primary CTA.

### Chips & Category Filters
- Horizontally scrollable row with smooth scroll snap on mobile devices.
- Unselected state uses neutral fill `#F4EFE6` with `#1E3A2B` typography.
- Selected state uses solid `#1E3A2B` or `#388E3C` fill with white text and an optional leading botanical icon.

### Form Inputs & Search Fields
- Generous container height (`52px`), large font (`16px` to prevent automatic browser zoom on iOS), padded with `space-md`.
- Background in white or `#FDFBF7`, framed by a soft `1px` border in `rgba(30, 58, 43, 0.2)`.
- Active focus state: `2px` ring in `#388E3C` with smooth transition.

### Checkboxes & Radio Buttons
- Sized at `22x22px` with a `44x44px` surrounding touch target.
- Checked state fills with `#388E3C` displaying a crisp white micro checkmark.
- Radio buttons employ a centered solid dot with an inner clearance ring.

### Domain-Specific Components
- **Sticky Booking Bottom Bar (Mobile):** Affixed to the bottom viewport with safe-area inset padding. Contains total price in prominent `headline-sm` alongside a full-width Primary CTA button.
- **Trail / Route Difficulty Gauge:** Horizontal segmented bar using gradient shifts from Fresh Leaf Green (Easy) to Warm Ochre (Moderate) and Deep Terracotta (Challenging).
- **Weather & Sunrise Advisory Banner:** High-altitude condition pill with subtle tertiary tint (`#FEF3C7`) and `#D97706` typography alerting visitors to optimal view times.