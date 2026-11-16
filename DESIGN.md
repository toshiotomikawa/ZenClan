---
version: alpha
name: ZenClan
description: Teal and calm community website for ZenClan in light and dark schemes, using Space Grotesk and JetBrains Mono.
colors:
  primary: "#66cccc"
  accent-ink: "#052020"
  accent-strong-light: "#1d7474"
  accent-strong-dark: "#7fdada"
  accent-soft-light: "#e0f3f3"
  accent-soft-dark: "#0e2525"
  bg-light: "#f6fafa"
  bg-dark: "#050909"
  surface-light: "#ffffff"
  surface-dark: "#0c1313"
  raise-light: "#edf5f5"
  raise-dark: "#121b1b"
  ink-light: "#0b1515"
  ink-dark: "#edf6f6"
  muted-light: "#566767"
  muted-dark: "#8ea3a3"
  line-light: "#d8e5e5"
  line-dark: "#1b2727"
  cta-bg: "#071414"
  cta-muted: "#a9bcbc"
  status-green: "#22c55e"
  status-yellow: "#f0b429"
  status-gray: "#9ca3af"
typography:
  hero:
    fontFamily: Space Grotesk
    fontWeight: 600
    fontSize: 96px
    lineHeight: 0.98
    letterSpacing: -0.055em
  title:
    fontFamily: Space Grotesk
    fontWeight: 600
    fontSize: 52px
    lineHeight: 1.05
    letterSpacing: -0.045em
  heading:
    fontFamily: Space Grotesk
    fontWeight: 600
    fontSize: 21px
    letterSpacing: -0.02em
  lead:
    fontFamily: Space Grotesk
    fontWeight: 400
    fontSize: 19px
    lineHeight: 1.6
  body:
    fontFamily: Space Grotesk
    fontWeight: 400
    fontSize: 16px
    lineHeight: 1.5
  kicker:
    fontFamily: JetBrains Mono
    fontWeight: 400
    fontSize: 12px
    letterSpacing: 0.08em
  badge:
    fontFamily: JetBrains Mono
    fontWeight: 400
    fontSize: 11px
rounded:
  focus: 6px
  indicator: 8px
  nav: 10px
  button: 12px
  avatar: 14px
  header: 16px
  base: 18px
  card: 22px
  rule-bar: 24px
  join-bar: 26px
  cta-banner: 32px
  pill: 999px
spacing:
  xs: 10px
  sm: 14px
  md: 26px
  lg: 40px
  xl: 96px
components:
  page-light:
    backgroundColor: "{colors.bg-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body}"
  page-dark:
    backgroundColor: "{colors.bg-dark}"
    textColor: "{colors.ink-dark}"
    typography: "{typography.body}"
  button-accent:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.button}"
    height: 54px
  button-accent-sm:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.button}"
    height: 38px
  nav-link-active-light:
    backgroundColor: "{colors.accent-soft-light}"
    textColor: "{colors.accent-strong-light}"
    rounded: "{rounded.nav}"
  nav-link-active-dark:
    backgroundColor: "{colors.accent-soft-dark}"
    textColor: "{colors.accent-strong-dark}"
    rounded: "{rounded.nav}"
  theme-toggle-light:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.nav}"
    height: 38px
  theme-toggle-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.nav}"
    height: 38px
  card-light:
    backgroundColor: "{colors.surface-light}"
    textColor: "{colors.muted-light}"
    rounded: "{rounded.card}"
    padding: 26px
  card-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.muted-dark}"
    rounded: "{rounded.card}"
    padding: 26px
  divider-light:
    backgroundColor: "{colors.line-light}"
    height: 1px
  divider-dark:
    backgroundColor: "{colors.line-dark}"
    height: 1px
  avatar-muted-light:
    backgroundColor: "{colors.raise-light}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.avatar}"
    height: 44px
  avatar-muted-dark:
    backgroundColor: "{colors.raise-dark}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.avatar}"
    height: 44px
  cta-banner:
    backgroundColor: "{colors.cta-bg}"
    textColor: "{colors.cta-muted}"
    rounded: "{rounded.cta-banner}"
  status-green:
    backgroundColor: "{colors.status-green}"
    rounded: "{rounded.pill}"
    height: 8px
  status-yellow:
    backgroundColor: "{colors.status-yellow}"
    rounded: "{rounded.pill}"
    height: 8px
  status-gray:
    backgroundColor: "{colors.status-gray}"
    rounded: "{rounded.pill}"
    height: 8px
---

## Overview

A Portuguese-language community website for a gaming clan and Discord server built around a no-toxicity rule. The interface pairs light and dark teal-tinted surfaces with soft ambient motion and generous spacing.

## Colors

Light and dark schemes are driven by CSS `light-dark()` tokens under `:root`, with a persistent user override stored in `localStorage` and reflected on `<meta name="color-scheme">`.

- **Teal accent (`#66cccc`)**: Primary action buttons, founder avatars, the flower mark, active focus highlights and text selection. Paired with dark teal ink (`#052020`) on solid fills and scheme-adjusted `#1d7474` (light) or `#7fdada` (dark) for text links and uppercase labels.
- **Surfaces**: Cool off-white (`#f6fafa`) and pure white cards (`#ffffff`) in light mode; deep charcoal-teal (`#050909`) and `#0c1313` cards in dark mode, with `#edf5f5` / `#121b1b` for raised elements and `#d8e5e5` / `#1b2727` for 1px borders.
- **Status and dark banner**: Activity dots use `#22c55e`, `#f0b429` and `#9ca3af`. The closing Discord banner stays dark (`#071414` with `#edf6f6` headings and `#a9bcbc` body copy) in both schemes.
- **Sponsored banner exception**: The embedded partner banner keeps its own white, navy and crimson brand palette rather than inheriting ZenClan tokens.

## Typography

Self-hosted variable fonts from `public/fonts/`:

- **Space Grotesk** (`300` to `700`): Primary family across body copy (`16px`, line-height `1.5`), headings (`21px` to `52px`, tight negative tracking) and the hero headline (`clamp(48px, 7.4vw, 96px)`, weight `600`, tracking `-0.055em`).
- **JetBrains Mono** (`100` to `800`): Uppercase kickers (`12px` to `12.5px`, tracking `0.06em` to `0.08em`), numeric counts, genre tags and role pills.
- **Manrope and DM Sans**: Loaded only for the embedded partner banner.

## Layout

Centered container up to `1180px` with `clamp(16px, 4vw, 40px)` horizontal gutters. Home page order: sticky header, two-column hero (copy left, 2x2 game grid over the flower emblem right), infinite marquee strip, rule and stats bar, 3-column community cards, 4-column co-founder strip, partner banner, dark Discord call-to-action banner with lazy-loaded widget iframe, and footer. Grids collapse to 2 columns at `960px` and 1 column at `620px`.

## Shapes

Rounded corners scale with element size: `10px` on nav links and the theme toggle, `12px` on buttons, `14px` to `18px` on avatars and small cards, `22px` to `26px` on feature cards and bars, `32px` on the Discord banner, and `999px` on pills and status dots.

## Motion and Depth

Flat bordered surfaces at rest; cards and game tiles add a long shadow and gentle pointer-driven 3D tilt on hover. Ambient glow blobs, petal bloom, scroll reveals, count-ups and marquee scroll all collapse when `prefers-reduced-motion: reduce` is set.

## Do's and Don'ts

- Do keep teal (`#66cccc`) as the only primary accent and pair activity dot colors with `aria-label` text.
- Do respect `prefers-reduced-motion: reduce` for every transition and animation.
- Don't mix the partner banner's crimson and navy palette into core ZenClan components.
