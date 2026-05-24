---
title: "MCA True Cost Calculator — Convert Factor Rate to Effective APR"
description: "Calculate the true cost of a merchant cash advance. Enter your advance amount, factor rate, holdback percentage, and daily card sales to see effective APR."
canonical: "https://fundingcompass.guide/tools/mca-true-cost-calculator/"
last_reviewed: "2026-05-01"
schema: ["WebApplication", "FAQPage", "BreadcrumbList"]
---

# MCA True Cost Calculator

*Convert your merchant cash advance factor rate into a real effective APR — and compare it against alternatives.*

<!-- DEVELOPER NOTE: Interactive calculator — implement as inline JavaScript.

INPUTS (all required):
1. Advance Amount ($) — number input, default 50000, min 5000, max 2000000
2. Factor Rate — number input, default 1.25, min 1.01, max 2.00, step 0.01
3. Holdback Percentage (%) — number input, default 15, min 5, max 50
4. Average Daily Card Sales ($) — number input, default 3000, min 100, max 100000

CALCULATED OUTPUTS (update live on input change):
- Total Repayment Amount = Advance Amount × Factor Rate
- Total Cost (Dollar Cost) = Total Repayment − Advance Amount
- Estimated Repayment Days = Total Repayment ÷ (Daily Card Sales × Holdback Rate)
- Estimated Repayment Months = Days ÷ 30 (rounded to 1 decimal)
- Effective APR = (Dollar Cost ÷ Advance Amount) ÷ (Repayment Days ÷ 365) × 100
  Format: XX.X%

COMPARISON TABLE (calculate after main outputs):
Show cost of same advance amount and same repayment period at:
- Business LOC at 20% APR: Interest = Advance × 0.20 × (Days/365)
- Invoice Factoring at 3%/30 days: Fee = Advance × 0.03 × (Days/30)
- SBA Loan at 12% APR: Interest = Advance × 0.12 × (Days/365)
Label column headers: "Financing Option", "Effective APR", "Total Cost", "vs. MCA"
"vs. MCA" = dollar difference (MCA cost minus alternative cost), shown in green if positive savings

DESIGN NOTES:
- Brand colors: Navy #0D2B4E (headers), Slate #8896A8 (labels), White backgrounds
- Font: system-ui / Helvetica Neue
- Results section: display prominently with large font for Effective APR
- Add warning callout if Effective APR exceeds 100%: "⚠️ This MCA carries an effective APR above 100%. Before signing, confirm you have evaluated a business line of credit and invoice factoring."
- Add note below calculator: "Factor rates and holdback percentages are the only inputs that affect total dollar cost. Daily card sales affect how quickly you repay — faster repayment = higher effective APR."
-->

---

## How This Calculator Works

A merchant cash advance does not have an interest rate — it has a factor rate. The factor rate tells you the **total dollar cost** but not the **annualised cost** you'd use to compare against other financing. This calculator converts your factor rate into an effective APR so you can compare apples to apples.

**The key formula:**

Effective APR = (Total Cost ÷ Advance Amount) ÷ (Repayment Days ÷ 365) × 100

**Example:**
- Advance: $60,000 at 1.30 factor rate
- Total repayment: $78,000
- Total cost: $18,000
- Holdback: 15% of $3,500/day = $525/day collected
- Repayment days: $78,000 ÷ $525 = 149 days
- Effective APR: ($18,000 ÷ $60,000) ÷ (149 ÷ 365) × 100 = **73.6%**

The same advance with $6,000/day in card sales repays in 87 days at 126% effective APR — the dollar cost is identical, but faster repayment pushes the annualised rate higher.

---

## Why Effective APR Matters

MCA providers quote factor rates — not APRs — because factor rates make the product appear less expensive than it is. A 1.30 factor rate sounds modest; a 73–130% effective APR does not. Both describe the same product.

The APR matters because it lets you compare the MCA against:
- A business line of credit (8–30% APR)
- Invoice factoring (18–60% effective APR)
- An SBA loan (10–13% APR)
- A conventional term loan (15–40% APR)

In most cases, an MCA is the most expensive option available. The calculator makes that comparison concrete.

---

## Factor Rate to APR Reference Table

Common factor rates converted to effective APR across different repayment speeds:

| Factor Rate | Total Cost on $100K | 60-day repayment APR | 90-day APR | 120-day APR | 180-day APR |
|---|---|---|---|---|---|
| 1.10 | $10,000 | 61% | 41% | 30% | 20% |
| 1.15 | $15,000 | 91% | 61% | 46% | 30% |
| 1.20 | $20,000 | 122% | 81% | 61% | 41% |
| 1.25 | $25,000 | 152% | 101% | 76% | 51% |
| 1.30 | $30,000 | 183% | 122% | 91% | 61% |
| 1.35 | $35,000 | 213% | 142% | 106% | 71% |
| 1.40 | $40,000 | 243% | 162% | 122% | 81% |
| 1.49 | $49,000 | 299% | 199% | 149% | 100% |

*APRs are approximations. Your actual effective APR depends on your specific holdback percentage and daily card sales volume.*

---

## Understanding Holdback Percentage

The holdback (also called retrieval rate) is the percentage of your daily credit and debit card sales the MCA provider collects each business day.

- **10% holdback on $5,000/day = $500/day collected**
- **20% holdback on $5,000/day = $1,000/day collected**

A higher holdback means faster repayment and a higher effective APR (same dollar cost, fewer days). A lower holdback means slower repayment and a lower effective APR. The total dollar cost does not change.

This is why MCAs advertise "flexible repayment" — on slow sales days, less is collected. But the total owed never decreases. You'll eventually repay the full amount regardless of how long it takes.

---

## Red Flags in MCA Agreements

Before signing any MCA, check for:

**Fixed daily ACH (not holdback):** Some MCAs collect a fixed dollar amount daily regardless of your sales — eliminating the "flexibility" that distinguishes an MCA from a term loan. If your agreement specifies a fixed daily debit rather than a percentage of card sales, it is not a true holdback MCA.

**Confession of judgment:** A legal clause allowing the provider to obtain a court judgment against you without notice. Banned in some states; still present in agreements elsewhere. Do not sign any MCA with this clause.

**Stacking prohibition:** Most agreements prohibit taking additional MCAs without consent. Violating this triggers default.

**Default on sales decline:** Some agreements treat a significant drop in sales volume as a default event — even if you're not behind on payments. Read this section of your agreement carefully.

---

## Frequently Asked Questions

**What is a "good" factor rate for an MCA?**
There is no universally good factor rate — it depends on how quickly you repay. A 1.15 factor rate over 60 days is ~91% effective APR. A 1.15 over 180 days is ~30% effective APR. The only way to evaluate a factor rate is to know your average daily card sales, calculate your expected repayment timeline, and convert to APR for comparison. Use the calculator above.

**Can I use this calculator for a fixed daily ACH MCA?**
Partially. If your MCA has fixed daily ACH (not holdback), enter your fixed daily payment amount as if it were holdback: Daily ACH ÷ your average daily card sales = effective holdback %. This gives you an approximation, but note that fixed daily ACH doesn't flex with revenue, making it higher-risk than a true holdback MCA.

**Why do my daily card sales affect the effective APR but not the total cost?**
Total cost = Advance Amount × (Factor Rate − 1). This is fixed the moment you sign. Daily card sales determine how quickly you repay — faster repayment means fewer days over which you spread the cost, pushing the annualised (APR) rate higher. If you expect very high card sales, model the faster repayment scenario to see your true effective APR.

**Is there an early payment discount available?**
Some MCA providers offer a prepayment discount — a reduced total owed if you settle early. This is not standard across all providers and is not published in most agreements. Ask specifically whether your provider offers a prepayment discount before signing, and get any such offer in writing.

**How do I calculate the effective APR for multiple MCAs stacked together?**
Run each MCA through this calculator separately, then add the daily holdback amounts across all MCAs. The combined holdback from multiple MCAs can represent 30–50% of daily card sales for some businesses. Stacking is generally inadvisable — see [MCA guide](/guides/merchant-cash-advance/) for stacking risks.

**This APR looks very high. Is the calculator wrong?**
The calculator is correct. MCAs are genuinely expensive products when measured on an annualised basis. A 1.25 factor rate repaid over 90 days is approximately 101% effective APR. This is accurate — and it is why regulators in California, New York, Utah, and Virginia now require MCA providers to disclose effective APR before signing. The calculator is giving you the same number those states require providers to disclose.

---

<aside class="related-resources">
  <div class="related-resources__title">Related Resources</div>
  <ul class="related-resources__list">
    <li><a href="/guides/merchant-cash-advance/">Merchant Cash Advances — Complete Guide</a></li>
    <li><a href="/compare/best-merchant-cash-advance-providers/">Best Merchant Cash Advance Providers of 2026</a></li>
    <li><a href="/compare/factoring-vs-merchant-cash-advance/">Invoice Factoring vs. Merchant Cash Advance</a></li>
  </ul>
</aside>
