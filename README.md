# ⚖️ TARAZU. — OIML R 76-1 MVP | Automated Legal Metrology & Evaluation Engine

[![React](https://img.shields.io/badge/React-19-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC.svg?logo=tailwindcss)](https://tailwindcss.com/)
[![OIML R-76](https://img.shields.io/badge/Standard-OIML%20R--76-5842F6.svg)](https://www.oiml.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Smart India Hackathon (SIH) Problem Statement 26035 (PS35)**  
> **TARAZU.** is an end-to-end automated platform for Type Evaluation, Turning-Point Calculation, Stepped MPE Boundary Validation, and Tamper-Evident Certification of Non-Automatic Weighing Instruments (NAWI) under **OIML Recommendation R-76** and the **Legal Metrology Act, 2009**.

---

## 📌 Executive Summary

Type evaluation of Non-Automatic Weighing Instruments (NAWI) under **OIML R-76** requires evaluating dozens of precise mathematical observations per test load across Class I, II, III, and IV instruments. 

Traditionally, Regional Reference Standard Laboratories (RRSL) and state testing facilities rely on manual spreadsheets and custom Word templates. This leads to computational mistakes, inconsistent report formats across states, and vulnerabilities to unauthorized post-test modification.

**TARAZU.** replaces legacy manual workflows with a real-time mathematical calculation engine (`#5842F6` theme), automated Maximum Permissible Error (MPE) compliance verification, SHA-256 cryptographic hashing, interactive live test sandboxing, and standardized multi-format export capabilities.

---

## ✨ Key Features

- **🧮 Real-Time OIML R-76 Calculation Engine**
  - Automates turning-point evaluation using sub-division $\Delta L$ weights:
    $$P = I + 0.5e - \Delta L$$
    $$E = P - L$$
    $$E_c = E - E_0$$
  - Eliminates human transcription errors and spreadsheet cell corruption.

- **📊 Automated Stepped MPE Boundary Validation**
  - Dynamically evaluates applied test loads against non-linear MPE step thresholds ($\pm 0.5e$, $\pm 1.0e$, $\pm 1.5e$) for Classes I, II, III, and IV.
  - Supports both **Initial Verification** and **In-Service Inspection** rules with instant visual Pass/Fail indicators.

- **🔒 Cryptographic SHA-256 Tamper Protection**
  - Generates immutable cryptographic hashes of raw test observations and metadata.
  - Embeds tamper-evident QR verification codes to guarantee report authenticity during statutory audits under the Legal Metrology Rules.

- **🎮 Interactive Live Sandbox Simulator**
  - Test custom load inputs, adjust environmental conditions (temperature, humidity, pressure), and observe dynamic turning-point corrections in real time.

- **📑 Standardized Multi-Format Export**
  - Exports standardized OIML R-76-2 type evaluation certificates into **Printable A4**, high-resolution **PDF**, editable **Microsoft Word (.doc)**, and **JSON** data interchange formats.

- **💼 Built-in SIH Pitch Deck & Interactive Modals**
  - Integrated presentation deck and sample test report viewer for rapid stakeholder demonstrations.

---

## 🛠️ Technology Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 + Vite 8 | Ultra-fast build toolchain & modern component hierarchy |
| **Styling & UI** | Tailwind CSS v4 + Tarazu Palette (`#5842F6`) | Responsive layout system & custom legal metrology theme |
| **Icons & Micro-UI** | Lucide React | Modern vector icons & UI symbols |
| **Document Export** | `jspdf` & `html2canvas` | High-fidelity PDF generation & DOM image capture |
| **Visual Effects** | `canvas-confetti` | Milestone celebrate triggers upon report generation |
| **Code Quality** | Oxlint | High-speed JavaScript/JSX linter |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/CodebyAbhishek123/PS35-SHOWCASE.git
   cd PS35-SHOWCASE
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal).

---

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev` — Launches the Vite development server with HMR.
- `npm run build` — Builds the application for production deployment into the `dist/` folder.
- `npm run preview` — Locally previews the production build.
- `npm run lint` — Runs Oxlint code verification.

---

## 🏛️ System Architecture Workflow

```
[ Test Bench Observations ] 
          │
          ▼
[ Metadata Capture (Class, Max, Min, e, d, Ambient Env) ]
          │
          ▼
[ Real-time Math Engine: P = I + 0.5e - ΔL | Ec = E - E0 ]
          │
          ▼
[ Stepped MPE Validation Engine (Class I - IV Thresholds) ]
          │
          ▼
[ SHA-256 Hash Seal & Tamper-Evident QR Generation ]
          │
          ▼
[ Multi-Format Export: A4 / PDF / Word / JSON Data ]
```

---

## 👥 The Innovators (SIH Team)

| Name | Role | Responsibilities |
| :--- | :--- | :--- |
| **Kunal Patil** | Team Leader | App & Web Developer, Research |
| **MD Ismile** | Team Member | AI & Web Developer |
| **Maitri Patel** | Team Member | UI/UX & Web Developer |
| **Abhishek Kumar** | Team Member | Web Developer & Data Analyst |
| **Purnima Upadhyay** | Team Member | Research & Web Developer |
| **Tushar Mahapatra** | Team Member | Web & Cloud Developer |

---

## ⚖️ Standards & Regulatory Compliance

- **OIML R-76-1 & R-76-2**: Non-automatic weighing instruments - Metrological and technical requirements.
- **Legal Metrology Act, 2009** (Department of Consumer Affairs, Govt. of India).
- **ISO/IEC 17025**: General requirements for the competence of testing and calibration laboratories.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.