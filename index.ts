// ============================================================================
// Finance & Business Calculator Engines
// Production-ready deterministic calculation algorithms
// Reference: https://www.mycalculator.xyz
// ============================================================================

// 1. LOAN EMI ENGINE
export interface EMIInputs {
  principal: number;
  annualRate: number;
  tenureYears: number;
}

export interface EMIResult {
  emi: number;
  totalInterest: number;
  totalPayment: number;
}

export function calculateLoanEMI({ principal, annualRate, tenureYears }: EMIInputs): EMIResult {
  const p = Math.max(0, principal || 0);
  const r = Math.max(0, annualRate || 0) / 12 / 100;
  const n = Math.max(1, (tenureYears || 1) * 12);

  if (r === 0) {
    const emi = p / n;
    return { emi: Math.round(emi), totalInterest: 0, totalPayment: p };
  }

  const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - p;

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalPayment: Math.round(totalPayment),
  };
}

// 2. UPWORK NET PAYOUT & TDS ENGINE
export interface UpworkInputs {
  invoiceAmount: number;
  upworkFeePct?: number;
  tdsPct?: number;
  fxSpreadPct?: number;
  withdrawalFee?: number;
}

export function calculateUpworkEarnings({
  invoiceAmount,
  upworkFeePct = 10,
  tdsPct = 1.0,
  fxSpreadPct = 1.5,
  withdrawalFee = 0.99,
}: UpworkInputs) {
  const gross = Math.max(0, invoiceAmount || 0);
  const serviceFee = (gross * upworkFeePct) / 100;
  const postFeeAmount = Math.max(0, gross - serviceFee);
  const estimatedTds = (gross * tdsPct) / 100;
  const fxFee = (postFeeAmount * fxSpreadPct) / 100;

  const totalDeductions = serviceFee + estimatedTds + fxFee + withdrawalFee;
  const netPayout = Math.max(0, gross - totalDeductions);

  return {
    grossInvoice: gross,
    serviceFee: parseFloat(serviceFee.toFixed(2)),
    estimatedTds: parseFloat(estimatedTds.toFixed(2)),
    withdrawalAndFx: parseFloat((fxFee + withdrawalFee).toFixed(2)),
    netPayout: parseFloat(netPayout.toFixed(2)),
    effectiveDeductionPct: gross > 0 ? parseFloat(((totalDeductions / gross) * 100).toFixed(2)) : 0,
  };
}

// 3. E-COMMERCE ROAS & BREAK-EVEN ENGINE
export interface EcommerceROASInputs {
  sellingPrice: number;
  orders: number;
  productCost: number;
  shippingCost: number;
  packagingCost: number;
  marketplaceFeePct?: number;
  paymentGatewayFeePct?: number;
  adSpend: number;
  returnsRefundPct?: number;
  fixedCosts?: number;
}

export function calculateEcommerceROAS({
  sellingPrice,
  orders,
  productCost,
  shippingCost,
  packagingCost,
  marketplaceFeePct = 5,
  paymentGatewayFeePct = 2,
  adSpend,
  returnsRefundPct = 10,
  fixedCosts = 0,
}: EcommerceROASInputs) {
  const o = Math.max(0, orders || 0);
  const grossRevenue = o * Math.max(0, sellingPrice || 0);
  const netRevenue = grossRevenue * (1 - Math.max(0, returnsRefundPct) / 100);

  const totalCogs = o * Math.max(0, productCost || 0);
  const totalShipping = o * Math.max(0, shippingCost || 0);
  const totalPackaging = o * Math.max(0, packagingCost || 0);
  const totalMarketplaceFees = (netRevenue * marketplaceFeePct) / 100;
  const totalPgFees = (netRevenue * paymentGatewayFeePct) / 100;

  const nonAdVariableCosts = totalCogs + totalShipping + totalPackaging + totalMarketplaceFees + totalPgFees;
  const contributionBeforeAds = netRevenue - nonAdVariableCosts;
  const netProfit = contributionBeforeAds - Math.max(0, adSpend || 0) - Math.max(0, fixedCosts || 0);

  const actualRoas = adSpend > 0 ? grossRevenue / adSpend : 0;
  const breakEvenRoas = contributionBeforeAds > 0 ? grossRevenue / contributionBeforeAds : 0;
  const maxCac = o > 0 ? Math.max(0, (contributionBeforeAds - fixedCosts) / o) : 0;

  return {
    grossRevenue,
    netRevenue,
    contributionBeforeAds: parseFloat(contributionBeforeAds.toFixed(2)),
    netProfit: parseFloat(netProfit.toFixed(2)),
    actualRoas: parseFloat(actualRoas.toFixed(2)),
    breakEvenRoas: parseFloat(breakEvenRoas.toFixed(2)),
    maxCac: parseFloat(maxCac.toFixed(2)),
  };
}
