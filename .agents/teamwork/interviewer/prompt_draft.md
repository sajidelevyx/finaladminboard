Execute the complete brand integration and design system implementation for the A SQUARED Executive Dashboard across all 20 views and deploy to production, adhering strictly to the master blueprint.

Working directory: C:\Users\moham\.gemini\antigravity\scratch\Admin_dashboard_cloned
Integrity mode: [OPEN: Which of these should the team NOT be allowed to do?]

Reference: C:\Users\moham\.gemini\antigravity\brain\f1d23590-5808-4443-9981-330d435f8c49\asquared_master_design_system_blueprint.md
Production Domain: https://dashboard.asquared.ae

## Requirements

### R1. Brand Palette Implementation (Zero Rose Gold)
Completely eliminate discontinued Rose Gold (#b76e79, #c58b88, and related tints) across all styles, components, and compiled assets. Implement the strict brand palette: Deep Navy Blue (#040810 to #0c1829), White (#ffffff), Bone (#e2e0cc), Khaki (#b7a990), Soft Grey (#d2d4c9), and Rich Black (#070700).

### R2. Typography System & CSS Hygiene
Pair Cormorant Garamond / Denton for editorial headlines and Inter Display for dense UI, tables, and interactive controls. Eliminate the destructive wildcard override `* { font-family: 'Inter' !important; }` in `client/src/index.css`.

### R3. Database & Logic Integrity
Make ZERO schema modifications or table alterations to Supabase (owners_data, canonical_owners, asq_dashboard_state). Retain 100% of existing state handlers, downloads, filtering logic, and telemetries without regression.

### R4. Vector Logo & Favicon Replacement
Replace the low-resolution raster logo (`asquared-logo.png`) and generic text SVG favicon with official vector SVG monogram/logo assets adhering to brandbook proportions and clear-space rules.

### R5. 12-Phase Blueprint Roadmap Execution
Execute the 12-phase implementation roadmap detailed in the master blueprint document across all 20 application views (Foundations, Navigation & Shell, Core Components, Data Tables, Overview, Owners & Buildings, Listing Studio, Telephony & Workflows, Roles & Settings, Responsive/A11y QA, Production Build & Live Deployment).

### R6. Production Deployment & Live Verification
Deploy exclusively to `https://dashboard.asquared.ae` using the Hostinger TUS deployment script (`scripts/deploy_live_bundle_v2.js`). Verify the live deployment via `scripts/verify_live.js`.

## Acceptance Criteria

### Code Integrity & Build
- [ ] Vite production build completes cleanly with zero errors or unhandled imports.
- [ ] Zero instances of discontinued Rose Gold hex codes or legacy `admin.asquared.ae` URLs remain in source or bundle assets.
- [ ] Destructive wildcard `* { font-family: 'Inter' !important; }` is eliminated from `client/src/index.css`.
- [ ] Zero SQL alter or drop operations executed against Supabase schemas.

### Brand & Design System
- [ ] Official vector SVG logo and monogram render crisply on all screen densities adhering to clear-space rules.
- [ ] Favicon renders the official vector SVG mark.
- [ ] Headlines render in Cormorant Garamond / Denton; tabular UI renders in Inter Display / Inter.
- [ ] All 20 application views adhere to the disciplined Deep Navy, Khaki, Bone, and White palette with three-tier elevation and no rainbow pills.

### Verification & Deployment
- [ ] `scripts/deploy_live_bundle_v2.js` deploys the production bundle to `https://dashboard.asquared.ae`.
- [ ] `scripts/verify_live.js` completes with all live endpoint checks passing (HTTP 200).
- [ ] [OPEN: Additional verification criteria or test suites?]
