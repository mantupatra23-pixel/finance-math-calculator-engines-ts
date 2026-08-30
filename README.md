# 🧮 Finance & Business Calculator Engines (TypeScript)

[![npm version](https://img.shields.io/badge/TypeScript-Strict%20Types-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Calculators](https://img.shields.io/badge/Live%20Demos-MyCalculators.xyz-brightgreen)](https://www.mycalculator.xyz)

A zero-dependency, deterministic TypeScript library containing audited mathematical calculation formulas for business metrics, statutory tax withholding, freelance take-home, and personal finance.

---

## 🔗 Official Interactive Documentation & Tools

All mathematical formulas in this library are audited and running in production on **[MyCalculators.xyz](https://www.mycalculator.xyz)**:

| Engine | Production Tool & Documentation |
| :--- | :--- |
| **Payment Gateway Processing & FX** | [Live Gateway Fee Calculator](https://www.mycalculator.xyz/calculators/payment-gateway-fee-calculator) |
| **Upwork Freelance & Sec 194-O TDS** | [Live Upwork Net Earnings Calculator](https://www.mycalculator.xyz/calculators/upwork-net-earnings-calculator) |
| **Fiverr 20% Commission & Reverse Pricing** | [Live Fiverr Net Earnings Calculator](https://www.mycalculator.xyz/calculators/fiverr-net-earnings-calculator) |
| **E-Commerce Break-Even ROAS & Max CAC** | [Live ROAS & Margin Calculator](https://www.mycalculator.xyz/calculators/ecommerce-roas-break-even-calculator) |
| **Reducing Balance Loan Amortization** | [Live Loan EMI Calculator](https://www.mycalculator.xyz/calculators/emi-calculator) |
| **Indian GST Split (CGST/SGST/IGST)** | [Live GST Calculator](https://www.mycalculator.xyz/calculators/gst-calculator) |
| **Compound Annual Growth Rate (CAGR)** | [Live CAGR Calculator](https://www.mycalculator.xyz/calculators/cagr-calculator) |

---

## 📦 Features

- **🛡️ 100% Zero Dependencies:** Lightweight mathematical functions without external bloat.
- **⚡ Client & Server Compatible:** Usable in Node.js backends, React/Next.js frontends, or edge functions.
- **📐 Mathematical Edge-Case Handled:** Guarded against division-by-zero, negative numbers, and `NaN`.
- **💼 Statutory Tax Support:** Includes Indian Section 194-O TDS logic and AY 2026-27 regime models.

---

## 💻 Quick Usage Examples

### 1. Loan EMI Formula (Monthly Reducing Balance)
```typescript
import { calculateLoanEMI } from "./index";

const emiResult = calculateLoanEMI({
  principal: 2500000,
  annualRate: 8.5,
  tenureYears: 20
});

console.log(emiResult);
// Output: { emi: 21696, totalInterest: 2706939, totalPayment: 5206939 }
