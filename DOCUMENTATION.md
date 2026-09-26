# PS 26035 — Master Documentation & System Specification
## Automated OIML R-76 Type Evaluation & Verification SaaS Platform for Legal Metrology

---

## Part 1 — Project Overview

### 1. Executive Summary
TARAZU is a multi-tenant cloud-native SaaS platform designed for the Department of Consumer Affairs (DoCA), Regional Reference Standard Laboratories (RRSL), and State Legal Metrology departments. It automates non-automatic weighing instrument (NAWI) model evaluation under international OIML R-76 standards, eliminating manual calculation errors, preventing data tampering, and speeding up model approval turnaround times from weeks to minutes.

### 2. Problem Statement & Background
Under SIH Problem Statement 26035, model evaluation of Non-Automatic Weighing Instruments (NAWI) requires rigid metrological verification against OIML R-76-1 and R-76-2 specifications. Currently, testing laboratories across India rely on fragmented Word documents, legacy Excel spreadsheets, and physical registers. This introduces significant turning-point calculation errors, risk of post-test manipulation, lack of auditability, and delayed model approvals for manufacturers.

### 3. Problem Understanding
Legal metrology testing involves complex multi-point calculations:
- Turning point determination ($\Delta L$) to calculate corrected indication ($P$).
- Non-linear Maximum Permissible Error (MPE) step evaluations across Class I, II, III, and IV instruments.
- Multi-range / multi-interval scale error adjustments ($E_c = E - E_0$).
- Eccentricity (corner load), discrimination, repeatability (standard deviation), and environmental influence factor tests.

Manual execution leads to human oversight, inconsistent test report formats, and non-compliance with international mutual recognition agreements (OIML-CS).

### 4. Objectives
- **100% Automated Compliance Engine**: Calculate turning points, MPEs, and Pass/Fail statuses instantly.
- **Cryptographic Security**: Seal every report with SHA-256 hashes and dynamic QR verification codes.
- **Standardized OIML R-76-2 Reports**: Generate bilingual (English/Hindi) export-ready PDF, Word, and JSON reports.
- **Role-Based Access Control & Multi-Tenancy**: Secure isolation between DoCA Admins, Laboratory Testers, Approving Authorities, and Manufacturers.

### 5. Existing System & Its Limitations
| Feature | Existing Manual System | TARAZU SaaS Platform |
| :--- | :--- | :--- |
| **Data Recording** | Physical registers & Excel sheets | Cloud & Offline PWA Sync |
| **Error Verification** | Manual lookup of MPE tables | Automated Real-Time Calculation Engine |
| **Tamper Protection** | None (Editable PDFs & Word files) | Immutable SHA-256 Cryptographic Hash |
| **Report Standard** | Non-uniform regional formats | Standardized OIML R-76-2 Format |
| **Approval Cycle** | 3 to 6 weeks | Instantaneous verification & approval |

### 6. Proposed Solution
TARAZU provides an end-to-end digital pipeline:
1. **Instrument Registry**: Register NAWI models with accuracy classes (Class I to IV), max capacity ($Max$), verification scale interval ($e$), and scale divisions ($n$).
2. **Environmental & Benchmark Logging**: Record ambient temperature, relative humidity, pressure, and standard mass traceability certificates.
3. **Smart Observation Engine**: Enter raw indications ($I$) and sub-division turning weights ($\Delta L$) with auto-calculated turning point $P = I + 0.5e - \Delta L$.
4. **Automated MPE Compliance**: Real-time evaluation against OIML R-76 Table 3 MPE thresholds ($E_c \le \text{MPE}$).
5. **Digital Approval & QR Verification**: Multi-tier sign-off with tamper-evident digital certificates.

### 7. Key Benefits
- **Zero Calculation Error**: Mathematical verification guaranteed by automated algorithms.
- **70% Reduction in Approval Delays**: Direct digital workflow from lab bench to DoCA central registry.
- **Auditability & Traceability**: Complete history of test runs, raw observations, and standard mass calibrations.
- **OIML-CS Mutual Recognition Ready**: Aligned with global metrology standards for international trade.

---

## Part 2 — Product & SaaS Concept

### 8. SaaS Product Overview
TARAZU is delivered as a multi-tenant Software-as-a-Service (SaaS) cloud application with offline PWA capability for laboratory benches without internet connectivity.

### 9. Target Users & Customer Segments
- **Department of Consumer Affairs (DoCA)**: Central regulatory oversight, policy management, and final model certificate issuance.
- **Regional Reference Standard Laboratories (RRSL)**: Primary testing facilities (Bangalore, Faridabad, Ahmedabad, Bhubaneswar, Guwahati).
- **State Legal Metrology Laboratories**: State-level verification and inspection units.
- **Scale Manufacturers & Importers**: Self-service portal for model approval application submission and tracking.

### 10. User Roles & Personas
- **Central Admin (DoCA)**: Manages global configurations, OIML version releases, and user permissions.
- **Lab Director / Approving Officer**: Reviews test logs, signs report certificates digitally.
- **Metrological Testing Engineer**: Performs bench tests, logs observation data, conducts repeatability and eccentricity runs.
- **Manufacturer Representative**: Submits instrument specifications, views test progress, downloads verified certificates.

### 11. Core Product Modules
1. **Instrument & Model Approval Module**
2. **OIML R-76 Calculation & Compliance Engine**
3. **Test Management & Laboratory Workflow**
4. **Digital Signature & Tamper-Proof QR Generator**
5. **Analytics & Regulatory Dashboard**
6. **Multi-Tenant Administration Portal**

### 12. End-to-End Product Workflow
```
[Manufacturer Application] ➔ [Sample Intake & Lab Assignment] ➔ [Bench Test Data Entry] 
       ➔ [Automated Math & MPE Validation] ➔ [Report Generation (OIML R-76-2)] 
       ➔ [Digital Signature Sign-off] ➔ [National Registry Publication]
```

### 13. Key User Journeys
- **Lab Engineer Journey**: Login ➔ Select Assigned Model ➔ Input Load $L$, Indication $I$, Sub-division $\Delta L$ ➔ Real-time Pass/Fail green indicator ➔ Submit for Review.
- **Approving Authority Journey**: Receive Notification ➔ Inspect Calculated Curves & Deviation Graphs ➔ Verify SHA-256 Hash ➔ Apply Digital Signature.

---

## Part 3 — OIML R-76 Compliance

### 14. OIML R-76 Overview
OIML R-76 specifies metrological and technical requirements for Non-Automatic Weighing Instruments (NAWI). It covers four accuracy classes:
- **Class I (Special)**: High-precision analytical balances ($e \le 1\text{ mg}, n > 50,000$).
- **Class II (High)**: Laboratory and precious metal scales ($1\text{ mg} \le e \le 50\text{ mg}, n \le 100,000$).
- **Class III (Medium)**: Commercial retail scales, mandi scales, industrial platform scales ($0.1\text{ g} \le e \le 2\text{ g}, n \le 10,000$).
- **Class IV (Ordinary)**: Heavy weighbridges and bulk cargo scales ($e \ge 5\text{ g}, n \le 1,000$).

### 15. OIML R-76 Test Management
TARAZU automates all mandatory test procedures specified in OIML R-76-2:
1. **Weighing Performance Test (Clause A.4.4)**: Evaluation at minimum 10 load points from Min to Max.
2. **Tare Balancing & Pre-set Tare Test (Clause A.4.6)**
3. **Eccentricity (Corner Load) Test (Clause A.4.7)**: Testing at $1/3 Max$ or $1/4 Max$ across 5 load positions.
4. **Discrimination Test (Clause A.4.8)**: Verification of extra load $1.4e$ effect.
5. **Repeatability Test (Clause A.4.10)**: 10 successive weighings at $50\%$ and $100\% Max$.
6. **Warm-up & Temperature Influence Test (Clause A.5.2 & A.5.3)**

### 16. OIML R-76 Compliance Engine
The compliance engine runs embedded algorithms that evaluate error thresholds in real time based on Table 3 Maximum Permissible Errors:
- **Initial Verification MPE**:
  - $0 \le m \le 500e \implies \pm 0.5e$
  - $500e < m \le 2000e \implies \pm 1.0e$
  - $2000e < m \le 10000e \implies \pm 1.5e$
- **In-Service Inspection MPE**: $2 \times \text{Initial MPE}$.

### 17. Automated Calculation & Validation
Equations implemented:
$$\text{Turning Point Indication: } P = I + 0.5e - \Delta L$$
$$\text{True Error: } E = P - L$$
$$\text{Zero Error Adjustment: } E_0 = I_0 + 0.5e - \Delta L_0$$
$$\text{Zero-Corrected Error: } E_c = E - E_0 = (P - L) - E_0$$

### 18. Pass/Fail Determination
For every observation $i$:
$$\text{Condition: } |E_c,i| \le \text{MPE}(L_i)$$
If all observations satisfy the condition, the overall test status is set to **PASSED**; otherwise **FAILED** with flagged violation points.

### 19. OIML Version & Rule Management
Supports dynamic version selection (e.g., OIML R-76:2006, OIML R-76:1992, and Indian Legal Metrology Rules 2011 revisions), allowing backward compatibility for historical audit reports.

---

## Part 4 — Functional Modules

### 20. Instrument & Manufacturer Management
- Detailed specification registry (Manufacturer Name, Trade Name, Model No., Serial No., Class, Max, Min, e, d, Tare Type).

### 21. Test Management Module
- Work order creation, bench assignment, status tracking (Draft, In Progress, Submitted, Approved, Certificate Issued).

### 22. Laboratory & Environmental Conditions
- Logging temperature ($^\circ\text{C}$), relative humidity ($\%$), atmospheric pressure ($\text{hPa}$), and standard weight set calibration details.

### 23. Observation Data Entry
- Dynamic grid input supporting hardware integration via RS-232 / USB / Modbus serial interface or manual entry with instant calculation.

### 24. Document & Evidence Management
- Upload interface for instrument photos, load cell datasheets, indicator circuit diagrams, and calibration certificates.

### 25. Report Generation
- Instant rendering of OIML R-76-2 type evaluation test reports in PDF, DOCX, and JSON format with embedded charts.

### 26. Dashboard & Analytics
- Metrics on total tests conducted, pass/fail percentages, average evaluation turnaround time, and laboratory throughput.

### 27. Test History & Report Repository
- Searchable archive of all historical model evaluation certificates with instant verification link.

### 28. Search & Retrieval
- Full-text search across certificate numbers, model names, manufacturer IDs, accuracy classes, and test dates.

### 29. Approval & Digital Signature Workflow
- Multi-tier workflow: Tester ➔ Senior Metrologist ➔ Lab Director ➔ DoCA Final Seal.

---

## Part 5 — Technical Architecture

### 30. System Architecture
Modern decoupled architecture consisting of a React + Vite PWA frontend, Node.js microservices backend, PostgreSQL relational store, and Redis caching layer.

### 31. Multi-Tenant SaaS Architecture
Row-level tenant isolation (RLS) ensuring strict data separation between different states, laboratory branches, and commercial entities.

### 32. Frontend Architecture
- React 18, TailwindCSS, Lucide Icons, Recharts for metrological curve rendering, and Service Workers for PWA offline caching.

### 33. Backend Architecture
- RESTful microservices, Express.js / Fastify backend, background worker queue (BullMQ) for PDF generation and hash computing.

### 34. Database Design
Relational PostgreSQL schema with structured tables: `tenants`, `users`, `manufacturers`, `instruments`, `test_sessions`, `observations`, `reports`, `audit_logs`.

### 35. API Architecture
OpenAPI 3.0 specification with rate-limiting, JWT authentication, and CORS enforcement.

### 36. File & Document Storage Architecture
S3-compatible object storage (MinIO / AWS S3) for raw attachments, images, and generated PDF reports.

### 37. Report Generation Architecture
Headless Chrome / Puppeteer engine rendering pixel-perfect HTML/CSS templates into PDF and DOCX documents.

### 38. Technology Stack
- **Frontend**: React, JavaScript (ESNext), Tailwind CSS, Vite.
- **Backend**: Node.js, Express, PostgreSQL, Prisma ORM, Redis.
- **Security**: Cryptography SHA-256, Dynamic QR, JWT, RBAC.

---

## Part 6 — Security & Reliability

### 39. Authentication & Authorization
Multi-factor authentication (MFA) with OTP / TOTP integration and OAuth2 / SAML support for enterprise single sign-on.

### 40. Role-Based Access Control (RBAC)
Granular privileges mapped to roles: `SYSTEM_ADMIN`, `LAB_DIRECTOR`, `TEST_ENGINEER`, `MANUFACTURER_USER`, `AUDITOR`.

### 41. Tenant Data Isolation
Logical separation via schema-per-tenant or tenant-id scoped query filters enforced at database layer.

### 42. Data Security & Encryption
- Encryption in transit (TLS 1.3).
- Encryption at rest (AES-256 for database and S3 objects).
- SHA-256 payload integrity hashing for test records.

### 43. Audit Trail
Immutable log table tracking user ID, IP address, timestamp, action type, old payload, and new payload for all database modifications.

### 44. Backup & Recovery
Automated daily snapshot backups with point-in-time recovery (PITR) up to 30 days.

### 45. Data Privacy & Security Considerations
Compliance with Digital Personal Data Protection (DPDP) Act 2023 and Indian National Cyber Security Guidelines.

---

## Part 7 — Deployment & Scalability

### 46. Deployment Architecture
Containerized Docker microservices orchestrated via Kubernetes (EKS / GKE / National Informatics Centre Cloud).

### 47. Cloud Infrastructure
High-availability multi-AZ deployment with load balancing, auto-scaling groups, and CDN edge caching.

### 48. CI/CD & DevOps
Automated GitHub Actions pipeline performing static analysis, unit test suites, container building, and zero-downtime deployment.

### 49. Scalability & Performance
Horizontal auto-scaling based on CPU/Memory usage, caching frequently queried MPE tables in Redis.

### 50. Monitoring & Logging
Centralized log aggregation with Prometheus, Grafana, and ELK stack for real-time alerting.

### 51. Availability & Disaster Recovery
99.9% uptime SLA guarantee with active-passive disaster recovery across separate geographic cloud zones.

---

## Part 8 — Business & Commercialization

### 52. Business Model
B2G (Business-to-Government) and B2B SaaS subscription model catering to national and private testing labs.

### 53. Target Market
- Primary: Department of Consumer Affairs & State Metrology departments in India.
- Secondary: International metrology institutes in BIMSTEC, ASEAN, and SAARC regions.

### 54. Revenue Model
Tiered pricing based on volume of model evaluations conducted, active lab seats, and API integrations.

### 55. SaaS Subscription Plans
- **Standard Lab Plan**: Up to 100 evaluation reports/month.
- **Enterprise National Plan**: Unlimited reports, custom domain, white-labeling, full API access.

### 56. Customer Value Proposition
ROI achieved through 70% lower administrative overhead, zero legal dispute costs, and accelerated time-to-market for manufacturers.

### 57. Go-to-Market Strategy
Direct government procurement (GeM Portal), strategic partnership with DoCA, and pilot demos at RRSL labs.

### 58. Commercialization & Scalability
Modular design allowing rapid expansion to other measuring instruments (e.g., fuel dispensers, water meters, taximeters under OIML recommendations).

---

## Part 9 — Innovation & Impact

### 59. Innovation & USP
- **First AI-Assisted Turning Point Verification System**: Detects manual typing typos in sub-division weights.
- **Dynamic QR Code Verification**: Allows field inspectors to scan any printed report to verify authenticity against the central blockchain/hash registry.

### 60. Competitive Differentiation
Unlike static PDF form builders or legacy desktop software, TARAZU is cloud-native, collaborative, mathematically validated, and cryptographic by design.

### 61. Expected Impact
Nationwide standardization of weighing scale approvals, ensuring consumer protection in mandi trading, retail groceries, and industrial logistics.

### 62. Operational Benefits
Elimination of physical paper records, seamless search across decades of model approvals, and standardized digital certificates.

### 63. Social & Economic Benefits
Prevents commercial fraud caused by uncalibrated or improperly approved weighing scales, saving billions in consumer trade transactions.

### 64. Measurable Success Indicators
- Average processing time per model: reduced from 21 days to < 2 days.
- Data entry calculation error rate: 0.00%.
- Certificate verification latency: < 500ms.

---

## Part 10 — Implementation & Future

### 65. Implementation Roadmap
- **Phase 1 (Months 1-3)**: Core Engine & OIML R-76 Math Module.
- **Phase 2 (Months 4-6)**: Multi-Tenant Lab Workflow & QR Hashing.
- **Phase 3 (Months 7-9)**: DoCA Portal Integration & RRSL Pilot.
- **Phase 4 (Months 10-12)**: Nationwide Rollout & Mobile Inspector App.

### 66. Pilot Deployment Strategy
Initial deployment at RRSL Bangalore & RRSL Faridabad to benchmark real-world testing conditions and engineer feedback.

### 67. Future Scope
Expansion to cover Automatic Weighing Instruments (OIML R-51, R-106) and liquid measuring systems (OIML R-117).

### 68. Integration Possibilities
Direct integration with e-Metrology national portals, customs inspection systems, and manufacturer ERP systems.

### 69. Potential AI/Automation Enhancements
OCR camera scanning of physical scale displays directly into test logs to eradicate manual data entry completely.

### 70. Conclusion
TARAZU modernizes legal metrology evaluation in India, setting a global standard for automated, secure, and transparent OIML R-76 model approvals.

---

## Part 11 — Technical References

### 71. API Documentation
- `POST /api/v1/evaluations/calculate`: Submits observation arrays and returns $P, E, E_c$, and MPE compliance status.
- `GET /api/v1/certificates/{id}/verify`: Public endpoint for dynamic QR code validation.

### 72. Database Schema
Key entity relationship diagram (ERD) with primary keys, foreign keys, and JSONB observation storage fields.

### 73. Calculation Methodology
Detailed mathematical proofs for turning point calculations as outlined in OIML R-76-1 Annex A.

### 74. Sample Test Report
Benchmark OIML R-76-2 type evaluation test certificate template with complete tabular logs.

### 75. Sample Screens / UI
Interactive previews of the Laboratory Bench Tester UI, Approval Dashboard, and Verification Portal.

### 76. System Diagrams
Mermaid flowcharts representing data flow, security token validation, and multi-tenant isolation.

### 77. Glossary
- **NAWI**: Non-Automatic Weighing Instrument.
- **MPE**: Maximum Permissible Error.
- **OIML**: International Organization of Legal Metrology.
- **DoCA**: Department of Consumer Affairs.
- **RRSL**: Regional Reference Standard Laboratory.
- **$e$**: Verification scale interval.
- **$d$**: Actual scale interval.

### 78. References
- OIML R 76-1 (2006): Non-automatic weighing instruments - Part 1: Metrological and technical requirements.
- OIML R 76-2 (2007): Non-automatic weighing instruments - Part 2: Pattern evaluation report.
- The Legal Metrology Act, 2009 (No. 1 of 2010), Ministry of Consumer Affairs, Food and Public Distribution, Government of India.
