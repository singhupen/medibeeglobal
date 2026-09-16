# Medibeeglobal

> **Our Vision, Your Care.**  
> A trusted cross-border medical care coordination platform connecting Cambodian patients and families with India's leading JCI-accredited hospitals.

---

## 🌟 Overview

**Medibeeglobal** is dedicated to bringing clarity, safety, and seamless cross-border coordination to Cambodian patients seeking world-class medical treatment in India. From the first consultation in Phnom Penh to hospital admission in India and ongoing recovery back home, Medibeeglobal eliminates medical travel fragmentation through transparent pricing, dedicated Khmer language support, and doctor matching.

---

## ✨ Key Features

- **Strategic Vision & Core Pillars**:
  - **The Vision (🎯)**: Making cross-border medical care easier, safer, and fully coordinated for Cambodian families.
  - **The Problem (⚠️)**: Removing fragmented hospital research, messy paperwork, travel stress, and lack of follow-up.
  - **The Opportunity (🌐)**: A trusted platform connecting patients, hospitals, and specialists built on transparency, not just transaction.
- **Interactive Patient Journey (`/how-it-works`)**:
  - A structured 6-step medical journey from initial discussion to doctor matching, medical visa processing, in-hospital care, and post-discharge recovery.
- **Accredited Hospital Network (`/hospitals`)**:
  - Directory of top JCI-accredited institutions across India (Apollo Hospitals, Fortis Healthcare, Manipal Hospitals, Narayana Health, AIIMS, and MIOT).
- **Specialties & Transparent Cost Benchmarks (`/specialties`)**:
  - Cardiac Surgery, Oncology, Orthopedics, Neurosurgery, Organ Transplants, and Fertility (IVF) with 60–80% cost savings compared to regional alternatives.
- **Case Intake & Coordination Modal**:
  - Step-by-step patient intake system with contact preferences (Telegram, Phone, WhatsApp) and instant Case ID tracking.
- **Multi-Channel Contact (`/contact`)**:
  - Direct inquiry form, Phnom Penh office location, instant Telegram/WhatsApp chat, and direct hotline access.
- **Direct Hospital Billing**:
  - 100% direct payment to partner hospitals with zero middleman markups or hidden fees.

---

## 🎨 Design System & Branding

- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- **Brand Palette**:
  - **Primary (Deep Blue)**: `#1B5FAE` — Used for brand headings, globe icon, and primary buttons.
  - **Accent (Lime/Leaf Green)**: `#7AC143` — Used for highlights ("Your Care"), status badges, and CTAs.
  - **Medical Cross Gradient**: Smooth diagonal transition from **Teal/Cyan** (`#2FB6A6`, top-left) to **Sky Blue** (`#3A8FCE`, bottom-right).
- **Branded Logo**: Clean transparent vector asset (`/logo-transparent.png`, 4.52:1 aspect ratio).
- **Tailwind CSS v4**: Centrally configured `@theme` tokens in `src/app/globals.css` and `src/lib/theme.ts`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Runtime**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Bundler**: Turbopack

---

## 📁 Project Structure

```text
medibeeg/
├── public/
│   ├── logo-transparent.png    # Primary brand transparent logo
│   └── logo.png                # Optimized brand asset
├── src/
│   ├── app/
│   │   ├── (landing)/          # Route group for public marketing pages
│   │   │   ├── about/          # /about — Mission, values & challenge
│   │   │   ├── contact/        # /contact — Office address & inquiry form
│   │   │   ├── hospitals/      # /hospitals — Partner hospital network
│   │   │   ├── how-it-works/   # /how-it-works — 6-step medical journey
│   │   │   ├── pricing/        # /pricing — Transparent pricing & packages
│   │   │   ├── services/       # /services — Core coordination services
│   │   │   ├── specialties/    # /specialties — Medical treatments & cost comparisons
│   │   │   ├── testimonials/   # /testimonials — Verified patient stories
│   │   │   └── page.tsx        # / — Home page with hero & 3-card vision layout
│   │   ├── globals.css         # Centralized Tailwind v4 theme & CSS tokens
│   │   └── layout.tsx          # Root layout & global metadata
│   ├── components/
│   │   ├── CaseFormModal.tsx   # Multi-step patient case intake modal
│   │   ├── CrossIcon.tsx       # SVG gradient medical cross icon
│   │   ├── Footer.tsx          # Global footer with links & contact info
│   │   ├── Hero.tsx            # Home page hero header & metrics
│   │   ├── Journey.tsx         # 6-step interactive journey component
│   │   ├── Logo.tsx            # Responsive brand logo component
│   │   ├── Navbar.tsx          # Sticky glassmorphic navbar with mobile menu
│   │   ├── PartnerHospitals.tsx# Hospital network directory
│   │   ├── ProblemSection.tsx  # The 3 core healthcare challenges
│   │   ├── Services.tsx        # Comprehensive service breakdown
│   │   ├── Testimonials.tsx    # Patient stories & testimonials
│   │   ├── VisionCards.tsx     # 3-card Vision, Problem & Opportunity layout
│   │   └── WhyIndia.tsx        # Specialties & medical cost comparison table
│   ├── context/
│   │   └── case-modal-context.tsx # Global modal state management
│   └── lib/
│       ├── data.ts             # Static content, hospitals, specialties & FAQs
│       └── theme.ts            # Centralized brand theme, colors & contact config
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18+ or 20+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

```bash
# Clone the repository (or navigate to project directory)
cd medibeeg

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the website.

### Building for Production

```bash
# Generate an optimized production build
npm run build

# Start the production server
npm run start
```

---

## 📞 Official Contact Information

- **Phone**: `+855-010707404`
- **Email**: [care@medibeeglobal.com](mailto:care@medibeeglobal.com)
- **Office Address**: `#111, St. 09B, Thmorda Village, Sangkat Kontouk, Khan Kombol, Phnom Penh, Cambodia`
- **Operating Hours**: Monday – Saturday: 8:00 AM – 6:00 PM (24/7 Emergency Line for Travel Patients)

---

## 📄 License & Disclaimer

- **Disclaimer**: Medibeeglobal is an independent medical coordination platform and does not provide medical diagnosis or direct treatment. All medical assessments and treatments are delivered by licensed healthcare practitioners and partner hospitals.
- **Copyright**: © 2026 Medibeeglobal. All rights reserved.
