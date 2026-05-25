---
title: "Invoice Factoring Cost Calculator — Estimate Your True Cost"
description: "Calculate your exact factoring cost: enter invoice value, advance rate, and fee to see your net payout and effective annualised rate."
canonical: "https://fundingcompass.guide/tools/factoring-cost-calculator/"
last_reviewed: "2026-05-24"
schema: ["WebApplication", "FAQPage", "BreadcrumbList"]
---

# Invoice Factoring Cost Calculator — Estimate Your True Cost

*Use this calculator to model your factoring cost before signing with any factor. Enter your numbers to see net payout, reserve balance, factoring fee in dollars, and effective APR.*

---

## Calculator

<!-- DEVELOPER NOTE: Implement as a static HTML/JS calculator embedded in this page.
     Inputs required:
     1. Invoice face value ($)
     2. Advance rate (%)  — default 90
     3. Factoring fee rate (%) per period — default 2
     4. Fee period (days) — default 30
     5. Expected customer payment (days) — default 30

     Outputs to display:
     - Immediate advance ($)
     - Reserve held ($)
     - Fee charged ($) [fee rate × face value × (payment days / fee period)]
     - Net received when customer pays ($) [reserve − fee]
     - Total received ($) [advance + net received]
     - Effective APR [% cost ÷ advance × (365 / payment days) × 100]
     - Cost as % of invoice face value

     Include a clear example pre-filled with:
     Invoice: $50,000 | Advance rate: 90% | Fee: 2%/30 days | Payment: 30 days
-->

---

## How to Read Your Results

**Immediate advance:** The cash you receive when you submit the invoice — before your customer pays. This is the advance rate × invoice face value.

**Reserve held:** The portion the factor holds until your customer pays (100% − advance rate). Returned to you (minus the fee) when the customer pays.

**Factoring fee:** What the factor charges for advancing cash. Fees are typically quoted per 30-day period — but if your customer pays in 45 days, you pay 1.5× the base fee. If they pay in 60 days, 2×.

**Effective APR:** The annualised cost of the factoring arrangement. This is the metric that makes different factoring quotes comparable. A 2%/30-day fee with 30-day payment = approximately 24% APR. A 2%/30-day fee with 60-day payment = approximately 12% APR.

**Net total received:** Advance + reserve − fee. This is your take-home on the invoice after factoring costs.

---

## Example Calculations

### Example 1 — Standard B2B Invoice, 30-Day Payment

| Input | Value |
|---|---|
| Invoice value | $50,000 |
| Advance rate | 90% |
| Fee rate | 2% per 30 days |
| Customer payment | 30 days |

| Output | Value |
|---|---|
| Immediate advance | $45,000 |
| Reserve held | $5,000 |
| Fee charged | $1,000 (2% × $50,000) |
| Net on reserve release | $4,000 |
| Total received | $49,000 |
| Cost as % of invoice | 2% |
| Effective APR | ~24% |

### Example 2 — Same Invoice, 60-Day Payment

| Input | Value |
|---|---|
| Invoice value | $50,000 |
| Advance rate | 90% |
| Fee rate | 2% per 30 days |
| Customer payment | 60 days |

| Output | Value |
|---|---|
| Immediate advance | $45,000 |
| Reserve held | $5,000 |
| Fee charged | $2,000 (2 periods × 2% × $50,000) |
| Net on reserve release | $3,000 |
| Total received | $48,000 |
| Cost as % of invoice | 4% |
| Effective APR | ~24% (same rate, same period cost, longer time) |

**Key insight:** The effective APR is the same in both examples — 24% — but the total dollar cost doubled because the invoice took twice as long to collect. This is why asking your factor for the per-period rate is not enough: you must model your expected payment timeline.

### Example 3 — Freight Invoice, Same-Day Fuel Advance

| Input | Value |
|---|---|
| Load invoice value | $3,000 |
| Fuel advance (at dispatch) | 50% = $1,500 |
| Final advance rate | 97% total |
| Fee rate | 1.5% per 30 days |
| Broker payment | 30 days |

| Output | Value |
|---|---|
| Fuel advance at dispatch | $1,500 |
| Remaining advance at delivery | $1,410 ($2,910 total − $1,500 already paid) |
| Reserve held | $90 (3%) |
| Fee charged | $45 (1.5% × $3,000) |
| Net on reserve release | $45 |
| Total received | $2,955 |
| Cost as % of load | 1.5% |

---

## Common Fee Structures — Comparison Table

| Fee Structure | Effective APR at 30-day payment | Effective APR at 60-day payment |
|---|---|---|
| 0.69% per 30 days | ~8.3% | ~8.3% |
| 1.0% per 30 days | ~12% | ~12% |
| 1.5% per 30 days | ~18% | ~18% |
| 2.0% per 30 days | ~24% | ~24% |
| 3.0% per 30 days | ~36% | ~36% |
| 0.5% per week | ~26% | ~26% |
| 1.0% per week | ~52% | ~52% |
| 1.5% per week | ~78% | ~78% |

*Note: Effective APR does not change with payment speed — it is a rate per unit time. What changes is the total dollar cost. A longer payment period means more periods of fees, but the same annualised rate.*

---

## What This Calculator Does Not Include

Real-world factoring costs include fees beyond the base factoring fee. Always request a full fee schedule from your factor:

- **Wire transfer fee:** $15–$35 per advance (some factors charge per wire, others waive this)
- **Monthly administration fee:** $50–$150 at some factors (charged even in months you factor less than the minimum)
- **Due diligence / onboarding fee:** $200–$500 one-time, charged at account setup
- **Minimum volume fee:** If your monthly factoring volume falls below the contract minimum, some factors charge a shortfall fee
- **Early termination fee:** 1–3% of contracted monthly volume × remaining months if you exit a long-term contract early

Add these to your modelled cost for a complete picture.

---

## Frequently Asked Questions

**Why does the effective APR look so high compared to a bank loan?**
Factoring fees, when converted to an annualised rate, often appear high (24–60% effective APR) because factoring serves a different risk profile than bank financing. The comparison that matters is not factoring vs. a bank loan (you likely cannot access a bank loan on the same terms and timeline) but factoring vs. the next best available alternative. If your alternative is an MCA at 100–200% effective APR, factoring at 24% APR is favourable.

**Should I factor every invoice or just some?**
This depends on your cash flow needs and contract terms. Under a contract factoring arrangement, you may be required to factor all invoices from your customers (or all invoices above a minimum). Under spot factoring, you choose which invoices to submit. Selective factoring — submitting only slow-paying customers — often conflicts with contract factoring terms, so confirm your agreement's requirements.

**How do I compare two different factoring quotes?**
Convert both to effective APR (cost ÷ advance amount ÷ payment days × 365 × 100) and model at your expected payment speed. Also request a full fee schedule from each factor, as wire fees, monthly admin fees, and minimum volume fees can make a lower base rate more expensive overall.

**What advance rate should I expect?**
Advance rates vary by industry and customer credit:
- Freight: 90–97% (strong broker credit)
- Staffing: 85–92%
- General B2B: 80–92%
- Healthcare: 70–85%
- Construction: 70–85%
Your factor will provide advance rates for your specific customer list after running their credit.

**Is there a minimum invoice size for factoring?**
Most traditional factors have a minimum invoice size of $1,000–$5,000 per invoice, and monthly volume minimums of $10,000–$50,000. Spot factoring providers ([Riviera Finance](/providers/riviera-finance-review/), [Paragon Financial Group](https://www.paragonfinancial.net/)) may work with smaller volumes. Very small invoices (under $500) are generally not economic to factor due to the per-transaction processing cost.

---

<aside class="related-resources">
  <div class="related-resources__title">Related Resources</div>
  <ul class="related-resources__list">
    <li><a href="/guides/invoice-factoring/">Invoice Factoring Guide — How It Works and What It Costs</a></li>
    <li><a href="/compare/best-invoice-factoring-companies/">Best Invoice Factoring Companies of 2026</a></li>
    <li><a href="/guides/accounts-receivable-financing/">Accounts Receivable Financing — Complete Guide</a></li>
  </ul>
</aside>
