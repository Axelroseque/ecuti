# Design System Document

## 1. Overview & Creative North Star: "The Judicial Monolith"
The objective of this design system is to transcend the generic "government portal" aesthetic. Instead, we aim for **The Judicial Monolith**— a creative direction that balances the heavy, unshakeable authority of the law with the fluid transparency required of modern digital governance. 

We break the "template" look by avoiding rigid, boxed-in grids. Instead, we use **intentional asymmetry**, deep tonal layering, and high-contrast typography scales. The layout should feel like a high-end editorial spread: generous white space, bold serif-like presence from the Inter display faces, and precise, monospaced technical data.

---

## 2. Color & Surface Architecture
Our palette uses a "State-Premium" foundation. Maroon represents the weight of the institution, while Gold provides the accent of excellence.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section sitting on a `surface` background creates a clear but sophisticated boundary without the "trapped" feeling of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine paper or frosted glass.
- **Base:** `surface` (#f8f9fd)
- **Secondary Areas:** `surface-container-low` (#f2f3f7)
- **Primary Content Cards:** `surface-container-lowest` (#ffffff)
- **Elevated Interactive Elements:** `surface-container-high` (#e7e8ec)

### The Glass & Gradient Rule
To move beyond a "standard" feel, use **Glassmorphism** for the Login experience and floating navigation elements. Use a semi-transparent `surface` color with a `backdrop-blur` of 20px. 
*   **Signature Texture:** Use a subtle linear gradient (Top-Left to Bottom-Right) transitioning from `primary` (#690008) to `primary-container` (#8b1a1a) for Hero buttons to give them a "three-dimensional" soul.

---

## 3. Typography: Editorial Authority
We use **Inter** for its neutral yet commanding presence and **JetBrains Mono** for all data-driven strings (dates, IDs, request numbers) to signal technical precision.

| Token | Size | Weight | Application |
| :--- | :--- | :--- | :--- |
| **display-lg** | 3.5rem | 700 (Bold) | Hero welcome headers |
| **headline-md** | 1.75rem | 600 (Semi-Bold) | Section titles |
| **title-sm** | 1rem | 600 (Semi-Bold) | Card titles |
| **body-md** | 0.875rem | 400 (Regular) | Default interface text |
| **label-md** | 0.75rem | 500 (Medium) | Navigation labels / Metadata |
| **data-mono** | 0.875rem | 500 (Mono) | Date of Leave, NIP, Reference IDs |

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often too "dirty" for a government institution. We use **Ambient Depth**.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.
*   **Ambient Shadows:** For floating modals, use a diffuse shadow: `box-shadow: 0 10px 40px -10px rgba(25, 28, 31, 0.08)`. The shadow color is a tint of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` (#e0bfbc) at **15% opacity**. 100% opaque borders are strictly forbidden.
*   **Rounding Scale:** 
    *   `DEFAULT`: 0.5rem (8px) for standard inputs.
    *   `md`: 0.75rem (12px) for main content cards and containers.

---

## 5. Components: Precision & Clarity

### Buttons
*   **Primary:** Fill with Maroon gradient (`primary` to `primary-container`). `DEFAULT` (8px) corners. No border.
*   **Secondary:** Ghost style. No background, `outline` text color, subtle `surface-container-high` hover state.
*   **Tertiary (Text-only):** Underlined on hover only. Used for "Cancel" or "Go Back".

### Cards & Lists
**Forbid the use of divider lines.** Separate list items using vertical white space (use `Spacing 4` / 1rem) or subtle background shifts between even/odd items using `surface-container-low`.

### Status Badges (Authority Indicators)
Badges should not be "bubbles" but rather "Labels".
*   **Success:** `tertiary-container` background with `on-tertiary-container` text.
*   **Warning:** `secondary-container` background with `on-secondary-container` text.
*   **Danger:** `error-container` background with `on-error-container` text.

### Input Fields
Soft-wash backgrounds (`surface-container-highest`) rather than white boxes. This makes the input feel "etched" into the interface. Use `JetBrains Mono` for the input text to emphasize the formal nature of the data being entered.

### Custom Component: The "Leave Timeline"
Instead of a table, use a vertical "Step" component that utilizes the `secondary` (Gold) color for the active track, symbolizing the prestigious journey of the civil servant's career and tenure.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts (e.g., a wide left column for content, a narrow right column for metadata).
*   **Do** use JetBrains Mono for all numeric values (Dates, ID numbers, phone numbers).
*   **Do** allow the Maroon (`primary`) to breathe; use it sparingly for "Hero" moments so it maintains its authoritative impact.

### Don't
*   **Don't** use 1px solid black or grey borders.
*   **Don't** use generic system fonts.
*   **Don't** use high-saturation reds for "Danger"—always use the `error` (#ba1a1a) or `error-container` tokens for a more sophisticated palette.
*   **Don't** cram content. If a page feels full, increase the spacing scale to `Spacing 12` (3rem) between sections.