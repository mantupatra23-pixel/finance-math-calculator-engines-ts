import { calculateLoanEMI, calculateUpworkEarnings, calculateEcommerceROAS } from "./index";

// 1. E-Commerce ROAS Test
const roasResult = calculateEcommerceROAS({
  sellingPrice: 1499,
  orders: 100,
  productCost: 400,
  shippingCost: 90,
  packagingCost: 30,
  marketplaceFeePct: 5,
  paymentGatewayFeePct: 2,
  adSpend: 25000,
  returnsRefundPct: 10,
  fixedCosts: 10000,
});

console.log("--- E-Commerce ROAS Result ---");
console.log(`Gross Revenue: ₹${roasResult.grossRevenue}`);
console.log(`Net Revenue: ₹${roasResult.netRevenue}`);
console.log(`Contribution Before Ads: ₹${roasResult.contributionBeforeAds}`);
console.log(`Net Profit: ₹${roasResult.netProfit}`);
console.log(`Actual ROAS: ${roasResult.actualRoas}x`);
console.log(`Break-Even ROAS Target: ${roasResult.breakEvenRoas}x`);
console.log(`Maximum Allowable CAC: ₹${roasResult.maxCac}`);

// 2. Loan EMI Test
const emiResult = calculateLoanEMI({
  principal: 2500000,
  annualRate: 8.5,
  tenureYears: 20,
});

console.log("\n--- Loan EMI Result ---");
console.log(`Monthly EMI: ₹${emiResult.emi}`);
console.log(`Total Interest: ₹${emiResult.totalInterest}`);
console.log(`Total Payment: ₹${emiResult.totalPayment}`);
