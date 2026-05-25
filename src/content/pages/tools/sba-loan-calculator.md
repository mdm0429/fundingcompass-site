---
title: "SBA Loan Calculator — Monthly Payment, Total Cost & Amortization"
description: "Calculate your SBA 7(a) or SBA 504 loan payment, total interest cost, and full amortization schedule. Free SBA loan calculator for small business."
canonical: "https://fundingcompass.guide/tools/sba-loan-calculator/"
last_reviewed: "2026-05-24"
schema: ["WebApplication", "FAQPage", "BreadcrumbList"]
---

# SBA Loan Calculator

*Use this calculator to estimate your monthly payment, total cost, and amortization schedule for an SBA 7(a) or SBA 504 loan. Results are estimates — actual loan terms depend on your lender, creditworthiness, and loan purpose.*

<!-- DEVELOPER NOTE

TOOL: SBA Loan Calculator
URL: /tools/sba-loan-calculator/
Implement as inline JavaScript in the compiled Astro page. No external dependencies.

=== UI LAYOUT ===

Two tabs at top: "SBA 7(a) Loan" | "SBA 504 Loan"

--- SBA 7(a) TAB ---

INPUTS (with defaults):
- Loan amount: $250,000 (numeric, $10,000–$5,000,000)
- Loan purpose dropdown: Working Capital | Equipment | Real Estate | Business Acquisition | Other
- Annual interest rate (%): 10.5 (numeric, 0.1–30, step 0.1)
  → Show helper text: "Current SBA 7(a) rate: Prime + 2.75% = ~10.5% (May 2026). Check with your lender."
- Loan term (years): dropdown options: 7 years (working capital) | 10 years (equipment) | 25 years (real estate) | custom
  → If custom selected, show numeric input 1–25 years
- Guarantee fee toggle: Yes / No (default: Yes for loans >$150,000)
  → If Yes, show guarantee fee % field (default 3.5% for $500K–$700K; user can adjust)
  → Guarantee fee = Upfront SBA guarantee fee, typically 2–3.75% of guaranteed portion (75% of loan)

OUTPUTS (update live on input change):
Card row 1:
  - Monthly Payment (P+I)
  - Total Amount Paid (all payments)
  - Total Interest Paid
  - SBA Guarantee Fee (if toggled on)

Card row 2:
  - Effective cost (APR including guarantee fee) — shown to 2 decimal places
  - Payoff date (today's date + loan term)

AMORTIZATION TABLE:
Columns: Payment #, Date (month/year), Payment, Principal, Interest, Balance
Show first 12 months by default
"Show all [N] payments" toggle button below table

RATE REFERENCE BOX (shown below calculator):
Table: SBA 7(a) current rate tiers (May 2026)
| Loan Amount | Max Rate (Variable) |
|---|---|
| $0–$25,000 | Prime + 4.25% (~14%) |
| $25,001–$50,000 | Prime + 3.25% (~13%) |
| $50,001–$250,000 | Prime + 2.25% (~12%) |
| Over $250,000 | Prime + 2.0% (~11.75%) |
Note: "Rates above are maximums. Your actual rate depends on your lender and creditworthiness. Prime rate as of May 2026: approximately 7.5%. SBA periodically updates maximum rate tiers."

--- SBA 504 TAB ---

The SBA 504 loan has a 3-party structure: borrower down payment (10%) + bank first lien (50%) + SBA/CDC debenture (40%). Calculate all three pieces.

INPUTS (with defaults):
- Total project cost: $500,000 (numeric, $100,000–$20,000,000)
- Project type: Equipment (10-year debenture) | Real Estate (20-year debenture) | Mixed
- Borrower down payment: 10% (fixed, show as calculated dollar amount — user cannot change this; note "20% for start-ups or special-purpose property")
- Bank first lien rate (%): 8.0 (numeric, 4–15, step 0.1)
  → Helper: "Conventional commercial loan rate for first lien — varies by lender. Typically Prime + 0.5–2%."
- Bank first lien term (years): 10 (numeric, 5–20)
- SBA/CDC debenture rate (%): 6.0 (numeric, 4–10, step 0.1)
  → Helper: "CDC debenture rate is fixed for life of loan. Check with your CDC for current rate. Approximately 6.0% for equipment (May 2026)."
- SBA/CDC debenture term (years): 10 for equipment, 20 for real estate (auto-fill based on project type; user can override)

OUTPUTS:
Summary breakdown box showing the 504 structure:
  - Borrower down payment: [10% of project cost]
  - Bank first lien: [50% of project cost] at [rate]% for [term] years → monthly payment $X
  - SBA/CDC debenture: [40% of project cost] at [rate]% for [term] years → monthly payment $X
  - Total monthly payment: $X (sum of both)
  - Total amount paid (both loans combined): $X
  - Total interest paid (both loans combined): $X

Side-by-side comparison with conventional loan:
"If you financed [project cost] with a conventional loan at [bank first lien rate]% for [bank first lien term] years with 10% down:"
  - Monthly payment: $X (conventional)
  - Monthly payment: $X (SBA 504)
  - Monthly savings: $X or additional cost $X

Separate amortization tables for bank loan and SBA debenture, shown in tabs.

=== CALCULATIONS ===

MONTHLY PAYMENT (standard amortization):
P = loan_amount
r = annual_rate / 12 / 100
n = term_years * 12
if r === 0: monthly_payment = P / n
else: monthly_payment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)

SBA GUARANTEE FEE (7(a)):
Guaranteed portion = loan_amount * 0.75
Fee percentage by loan amount:
  $150,001–$700,000: 3.0%
  $700,001–$1,000,000: 3.5%
  Over $1,000,000: 3.75%
  Under $150,000: 0%
guarantee_fee = guaranteed_portion * fee_pct

EFFECTIVE APR INCLUDING GUARANTEE FEE (7(a)):
Add guarantee fee to total cost paid, then calculate APR using Newton's method or IRR approximation.
Simple approximation: ((total_paid + guarantee_fee - loan_amount) / loan_amount) / term_years

AMORTIZATION SCHEDULE:
For each payment period:
  interest_payment = balance * (annual_rate / 12 / 100)
  principal_payment = monthly_payment - interest_payment
  new_balance = balance - principal_payment
  date = start_date (current month) + payment_number months

=== FORMATTING ===
- Currency: $X,XXX or $X,XXX,XXX (no cents in output cards; 2 decimal places in amortization table)
- Percentages: XX.XX%
- All outputs update on every input keystroke/change (no submit button needed)
- Empty/invalid inputs: show "--" in output fields (do not throw errors)

=== DISCLAIMER (below calculator) ===
"This calculator provides estimates based on standard amortization formulas. SBA loan terms include fees and conditions not captured here. Actual monthly payments, rates, and guarantee fees vary by lender. Consult an SBA-approved lender for a formal loan estimate. FundingCompass is not an SBA lender and does not provide loan products."

END DEVELOPER NOTE -->

---

## How to Use This Calculator

Enter your loan amount, interest rate, and term to see your estimated monthly payment and total interest cost. Use the SBA 7(a) tab for working capital, equipment, and general business loans; use the SBA 504 tab for large equipment purchases or commercial real estate.

---

## What Is an SBA Loan?

SBA loans are business loans partially guaranteed by the US Small Business Administration. The guarantee reduces risk for lenders, allowing them to approve loans for businesses that might not qualify for conventional financing — at rates lower than most alternative lenders.

**SBA 7(a) loan:** The most common SBA product. Used for working capital, equipment, real estate, business acquisition, and general business purposes. Variable rates capped by SBA guidelines (currently approximately 10–14% APR depending on loan size). Maximum $5,000,000.

**SBA 504 loan:** A three-party structure for major fixed assets (equipment over $250,000 and commercial real estate). Features a fixed-rate CDC debenture at below-market rates. The 10% down payment is lower than most conventional commercial real estate or equipment loans. Maximum $5,500,000.

See the full [SBA Loans Guide](/guides/sba-loans/) for complete eligibility, documentation, and application guidance.

---

## SBA Loan Rate Reference (May 2026)

SBA sets maximum interest rates for 7(a) loans. Lenders may charge below the maximum.

| Loan Amount | Max Rate |
|---|---|
| $0–$25,000 | Prime + 4.25% (~14%) |
| $25,001–$50,000 | Prime + 3.25% (~13%) |
| $50,001–$250,000 | Prime + 2.25% (~12%) |
| Over $250,000 | Prime + 2.0% (~11.75%) |

*Prime rate as of May 2026: approximately 7.5%. SBA 504 debenture rates are fixed and set separately by the CDC debenture market. Confirm current rates with your lender or CDC.*

---

## SBA Loan Monthly Payment Examples

| Loan Amount | Rate | Term | Est. Monthly Payment | Total Interest |
|---|---|---|---|---|
| $100,000 | 11% | 10 years | $1,377 | $65,240 |
| $250,000 | 11% | 10 years | $3,442 | $163,040 |
| $500,000 | 10.5% | 10 years | $6,717 | $305,982 |
| $1,000,000 | 10% | 10 years | $13,215 | $585,817 |
| $500,000 | 10.5% | 25 years (real estate) | $4,689 | $906,701 |

*Estimates only. Actual rates, fees, and terms depend on lender and loan purpose.*

---

## SBA Guarantee Fee Reference

For SBA 7(a) loans, the SBA charges lenders a guarantee fee, which lenders typically pass to borrowers. The fee is based on the guaranteed portion of the loan (75% of loan amount for most 7(a) loans):

| Loan Amount | Guarantee Fee |
|---|---|
| Under $150,000 | 0% |
| $150,001–$700,000 | 3.0% of guaranteed portion |
| $700,001–$1,000,000 | 3.5% of guaranteed portion |
| Over $1,000,000 | 3.75% of guaranteed portion |

**Example:** $500,000 loan → guaranteed portion = $375,000 → guarantee fee at 3.0% = $11,250.

The guarantee fee adds to the effective cost of SBA financing. Factor it into total cost comparisons with conventional alternatives.

---

## Alternatives to Compare

- **Business line of credit:** Revolving access to capital at 15–30% APR. No term commitment. See [Business Line of Credit Guide](/guides/business-line-of-credit/).
- **Equipment financing:** Faster approval (24–48 hours) with rates 5–20% APR for equipment-specific needs. See [Best Equipment Financing Companies](/compare/best-equipment-financing-companies/).
- **Merchant cash advance:** Fastest access but highest cost (40–200%+ effective APR). Use only when other options are unavailable. Use the [MCA True Cost Calculator](/tools/mca-true-cost-calculator/) to compare true cost.

---

## Frequently Asked Questions

**What is the current SBA 7(a) interest rate?**
SBA 7(a) rates are variable and tied to the Prime rate. As of May 2026, the Prime rate is approximately 7.5%, and SBA 7(a) rates are typically Prime + 2.0–4.25% depending on loan amount — approximately 10–14% APR. Rates change when the Prime rate changes. Your lender sets the specific rate within SBA maximums.

**Is there a fee for SBA loans?**
Yes. SBA charges a guarantee fee (paid by the lender, usually passed to borrower) based on the loan amount. Loans under $150,000 have no guarantee fee. Larger loans carry a fee of 3.0–3.75% of the guaranteed portion. This calculator includes a toggle to factor this into total cost.

**How long does an SBA loan take to fund?**
SBA 7(a) loans typically take 2–4 weeks through SBA Preferred Lenders using the Express or SBA One program. Complex loans (over $500K) may take longer. SBA 504 loans take 30–90 days. If you need funding in days rather than weeks, consider conventional equipment financing or a business line of credit.

**Can I pay off an SBA loan early?**
SBA 7(a) loans have prepayment penalties for loans with terms of 15+ years paid off within the first 3 years (5%, 3%, 1% in years 1–3). Loans with terms under 15 years generally have no prepayment penalty. Confirm your specific loan's prepayment terms with your lender.

**What is the SBA loan calculator not capturing?**
This calculator estimates principal and interest only. It does not include: lender origination fees, closing costs, appraisal fees (for real estate), insurance requirements, or variable rate changes over the loan term. For a complete picture of SBA loan costs, request a Loan Estimate from your SBA lender.

---

<aside class="related-resources">
  <div class="related-resources__title">Related Resources</div>
  <ul class="related-resources__list">
    <li><a href="/guides/sba-loans/">SBA Loans for Small Businesses — Complete Guide</a></li>
    <li><a href="/compare/sba-504-vs-equipment-loan/">SBA 504 Loan vs. Equipment Loan</a></li>
    <li><a href="/tools/business-loan-calculator/">Business Loan Calculator</a></li>
  </ul>
</aside>
