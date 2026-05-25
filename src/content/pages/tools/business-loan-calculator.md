---
title: "Business Loan Calculator — Monthly Payment, Total Cost & Amortization"
description: "Calculate your business loan monthly payment, total interest cost, and amortization schedule. Compare loan options side by side. Free business loan calculator."
canonical: "https://fundingcompass.guide/tools/business-loan-calculator/"
last_reviewed: "2026-05-24"
schema: ["WebApplication", "FAQPage", "BreadcrumbList"]
---

# Business Loan Calculator

*Enter your loan details to calculate your monthly payment, total cost, and amortization schedule. Compare multiple loan scenarios side by side to find the most cost-effective option.*

<!-- DEVELOPER NOTE

TOOL: Business Loan Calculator
URL: /tools/business-loan-calculator/
Implement as inline JavaScript in the compiled Astro page. No external dependencies.

=== UI LAYOUT ===

PRIMARY CALCULATOR
Tab row: "Term Loan" | "Line of Credit" | "Compare Loans"

--- TERM LOAN TAB ---

INPUTS (with defaults):
- Loan amount: $100,000 (numeric, $1,000–$10,000,000)
- Annual interest rate (%): 10.0 (numeric, 0.1–100, step 0.1)
  → Add note: "Enter the APR (annual percentage rate), not a monthly or weekly rate."
- Loan term: dropdown with options:
    6 months | 12 months | 18 months | 24 months | 36 months | 48 months | 60 months | 84 months | 10 years | 15 years | 25 years
  OR numeric entry field with unit toggle (months/years)
- Payment frequency: Monthly (default) | Weekly | Daily | Bi-weekly
- Origination fee (%): 0 (numeric, 0–10, step 0.25)
  → Helper: "Many online lenders charge 1–5% origination fee. Include it to see true APR."

OUTPUTS (update live):

Card row:
  - Monthly Payment (or per-payment amount if weekly/daily frequency selected)
  - Total Amount Paid
  - Total Interest Paid
  - Origination Fee (if >0, shown separately)
  - True APR (including origination fee)

AMORTIZATION TABLE:
Columns: Payment #, Date, Payment Amount, Principal, Interest, Remaining Balance
Show first 12 payments by default
"Show all [N] payments" expand button
Option to download as CSV (generate CSV content in JavaScript and trigger download via Blob URL)

--- LINE OF CREDIT TAB ---

Lines of credit are revolving; there's no standard amortization. Model a draw-and-repay scenario.

INPUTS:
- Credit limit: $50,000 (numeric)
- Draw amount: $25,000 (numeric, ≤ credit limit)
- Annual interest rate (%): 20.0
- Payback period (months): 12 (how long you plan to pay it back)
  → Note: "Lines of credit are revolving. This models a single draw repaid over the chosen period."

OUTPUTS:
- Monthly Payment to repay draw over payback period
- Total Interest on draw
- Available credit remaining after draw: [credit limit - draw amount]
- Cost per dollar borrowed: [total interest / draw amount] as a percentage

Simple interest calculation (interest-only during draw, P+I during repayment) or full amortization — implement as full amortization of the draw amount.

Show comparison with equivalent term loan at same rate and amount for context.

--- COMPARE LOANS TAB ---

Allow side-by-side comparison of up to 3 loan scenarios.

LAYOUT: Three columns, each with:
- Loan label: "Loan A" (editable text field)
- Loan amount
- Annual rate
- Term (months)
- Origination fee (%)

Pre-fill Loan A with example bank loan (low rate, long term), Loan B with online lender (higher rate, shorter term), Loan C blank.

COMPARISON OUTPUT TABLE:
| | Loan A | Loan B | Loan C |
|---|---|---|---|
| Monthly payment | | | |
| Total interest | | | |
| Origination fee | | | |
| Total cost | | | |
| True APR | | | |
| Payoff date | | | |

Highlight the lowest-cost option (lowest total cost) in green.

VISUAL: Bar chart showing Total Cost for each loan side by side. Use inline SVG — no external chart library.

=== CALCULATIONS ===

MONTHLY PAYMENT (standard amortization):
P = loan_amount
r = annual_rate / 12 / 100
n = term_months
if r === 0: monthly_payment = P / n
else: monthly_payment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)

PAYMENT FREQUENCY ADJUSTMENTS:
- Weekly: use r = annual_rate / 52 / 100, n = term_weeks
- Daily: use r = annual_rate / 365 / 100, n = term_days
- Bi-weekly: use r = annual_rate / 26 / 100, n = term_biweekly_periods
Convert term to appropriate periods when frequency changes.

TRUE APR WITH ORIGINATION FEE:
net_proceeds = loan_amount - (loan_amount * origination_fee_pct / 100)
Use Newton's method to find the rate r such that:
  sum of [monthly_payment / (1+r)^t] for t=1 to n = net_proceeds
Simple approximation: add origination fee to total interest, then compute rate on net proceeds.

AMORTIZATION SCHEDULE:
For each payment period 1 to n:
  interest = balance * r
  principal = monthly_payment - interest  (adjust final payment for rounding)
  balance = balance - principal
  date = start of current month + payment_index months

CSV EXPORT:
Generate CSV string from amortization data:
"Payment,Date,Payment Amount,Principal,Interest,Balance"
One row per payment
Trigger download via: window.URL.createObjectURL(new Blob([csvString], {type: 'text/csv'}))

=== LOAN TYPE REFERENCE TABLE ===
Show below the calculator as a static table (no JS):

| Loan Type | Typical Rate | Typical Term | Best For |
|---|---|---|---|
| SBA 7(a) | 10–14% APR | 7–25 years | General business, real estate |
| Bank term loan | 6–10% APR | 1–10 years | Established businesses, strong credit |
| Online term loan | 15–45% APR | 3–36 months | Fast funding, moderate credit |
| Business LOC (bank) | 8–15% APR | Revolving | Ongoing working capital |
| Business LOC (online) | 20–80% APR | Revolving | Fast access, moderate credit |
| Merchant cash advance | 40–200%+ EFF. APR | Until repaid | Last resort: no other options |
| Equipment loan | 5–20% APR | 24–84 months | Equipment purchase |

=== FORMATTING ===
- Currency inputs: format with commas as user types; strip commas on calculation
- Currency outputs: $X,XXX format (no cents in summary cards; 2 decimal places in amortization)
- Percentages: XX.XX%
- All outputs update on every input change (no submit button)
- Empty/invalid inputs: show "--" in output fields

=== DISCLAIMER ===
"This calculator provides payment estimates based on standard amortization formulas. Actual loan payments, rates, and fees vary by lender and loan agreement. True APR includes origination fee; other fees (closing costs, prepayment penalties) are not included. FundingCompass is not a lender and does not provide loan products."

END DEVELOPER NOTE -->

---

## How to Use This Calculator

Enter your loan amount, interest rate (APR), and term to calculate your monthly payment and total cost. Use the "Compare Loans" tab to evaluate multiple loan options side by side — enter details from offers you've received to identify the true lowest-cost option.

**Important:** Always use the Annual Percentage Rate (APR) for comparisons. Lenders sometimes quote weekly or monthly rates — multiply by 52 or 12 to get the annual rate before entering.

---

## Understanding Business Loan Costs

### Monthly Payment

Your monthly payment is determined by three factors: loan amount, interest rate, and term. A lower interest rate reduces your payment; a longer term also lowers your payment (but increases total interest paid).

### Total Interest Paid

Total interest is the full cost of borrowing — what you pay above and beyond the principal. Short-term loans at high rates can have lower total interest than long-term loans at low rates if the term is short enough. Compare this across loan options, not just monthly payment.

### True APR (Including Origination Fee)

If a lender charges an origination fee (1–5% of the loan amount, deducted from proceeds), the effective APR is higher than the stated interest rate. The calculator computes true APR by factoring the origination fee into the cost of borrowing on the net proceeds received.

**Example:** A $100,000 loan at 10% with a 3% origination fee means you receive $97,000 but pay interest on $100,000. True APR is approximately 11.5%.

---

## Business Loan Rate Comparison (May 2026)

| Loan Type | Typical Rate | Typical Term | Best For |
|---|---|---|---|
| SBA 7(a) | 10–14% APR | 7–25 years | General business; established businesses |
| Bank term loan | 6–10% APR | 1–10 years | Strong credit; existing banking relationship |
| Online term loan | 15–45% APR | 3–36 months | Fast funding; moderate credit |
| Business line of credit (bank) | 8–15% APR | Revolving | Recurring working capital needs |
| Business line of credit (online) | 20–80% APR | Revolving | Fast access; lower credit |
| Equipment loan | 5–20% APR | 24–84 months | Equipment purchase; collateral reduces rate |
| Merchant cash advance | 40–200%+ eff. APR | Until repaid | Last resort when other options unavailable |

*Use the [MCA True Cost Calculator](/tools/mca-true-cost-calculator/) if you are evaluating a merchant cash advance offer.*

---

## Loan Payment Examples

| Loan Amount | Rate | Term | Monthly Payment | Total Interest |
|---|---|---|---|---|
| $50,000 | 10% | 36 months | $1,613 | $8,068 |
| $100,000 | 10% | 60 months | $2,125 | $27,481 |
| $250,000 | 8% | 84 months | $3,891 | $76,836 |
| $500,000 | 12% | 60 months | $11,122 | $167,333 |
| $100,000 | 25% | 24 months | $5,382 | $29,168 |
| $100,000 | 25% | 12 months | $9,536 | $14,432 |

*Note how shorter terms dramatically reduce total interest paid even at high rates.*

---

## How to Compare Business Loan Offers

When evaluating competing loan offers, use the "Compare Loans" tab and enter the exact details from each offer you receive. Key metrics to compare:

1. **True APR (including all fees):** This is the single most important comparison metric. It accounts for rate, fees, and term in a standardized way.

2. **Total cost:** If you plan to pay off the loan before maturity, total cost matters more than APR — a higher-rate short-term loan may cost less total than a lower-rate long-term loan.

3. **Monthly payment vs. cash flow:** The lowest-cost loan may not be right if the monthly payment exceeds your cash flow capacity. Build a buffer — most lenders recommend debt service coverage ratio (DSCR) of at least 1.25x (you earn $1.25 for every $1.00 of debt payment).

4. **Prepayment penalty:** Some lenders charge fees for early payoff. If you expect to pay off early, factor in the penalty.

---

## Related Tools

- [MCA True Cost Calculator](/tools/mca-true-cost-calculator/) — Convert merchant cash advance factor rates to effective APR
- [Equipment Financing Calculator](/tools/equipment-financing-calculator/) — Model equipment loan and lease payments
- [SBA Loan Calculator](/tools/sba-loan-calculator/) — SBA-specific calculator with guarantee fee and 504 structure

---

## Frequently Asked Questions

**What is APR and why should I use it to compare loans?**
APR (Annual Percentage Rate) is the annualized cost of borrowing, including interest and fees, expressed as a percentage. Using APR allows you to compare loans with different structures (weekly vs. monthly payments, different fee arrangements) on a standardized basis. Always ask lenders for the APR — some quote weekly or monthly rates that appear small but are much higher annualized.

**What is the difference between a term loan and a line of credit?**
A term loan provides a lump sum that you repay over a fixed schedule. A line of credit provides revolving access to funds — you draw as needed and repay, and the availability resets as you repay. Term loans are better for one-time purchases (equipment, expansion). Lines of credit are better for recurring working capital needs.

**Should I choose a shorter or longer loan term?**
Shorter terms mean higher monthly payments but lower total interest. Longer terms mean lower payments but higher total interest. The right term balances what your cash flow can support against the total cost you want to incur. As a general rule: use the shortest term your cash flow can comfortably support.

**What credit score do I need for a business loan?**
SBA and bank loans typically require 680+ personal credit. Online lenders typically require 600–650. Some lenders (National Funding) work with 575+. Credit score is one factor — revenue, time in business, and debt-service coverage ratio also matter significantly.

**Is it better to get one large loan or multiple smaller loans?**
One loan is generally simpler and may offer better rates than multiple smaller loans (economies of scale in underwriting). Multiple smaller loans can work if you need different products for different purposes (e.g., an SBA loan for real estate + a line of credit for working capital). Avoid "stacking" multiple short-term loans from different lenders simultaneously — this is a red flag for lenders and signals cash flow stress.

---

<aside class="related-resources">
  <div class="related-resources__title">Related Resources</div>
  <ul class="related-resources__list">
    <li><a href="/guides/business-line-of-credit/">Business Line of Credit — Complete Guide</a></li>
    <li><a href="/guides/sba-loans/">SBA Loans for Small Businesses — Complete Guide</a></li>
    <li><a href="/tools/sba-loan-calculator/">SBA Loan Calculator</a></li>
  </ul>
</aside>
