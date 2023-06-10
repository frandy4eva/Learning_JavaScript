// Working with money
// 2 basketball at $20.95 each with $4.99 shipping
// and 2 t-shirts at $7.99 each with $4.99 shipping

let itemsTotal = `Items (4):  $${((2095 + 799) * 2) / 100}`;
let shippingHandlingTotal = `Shipping & handling:  $${(499 * 2) / 100}`;
let preTaxTotal = `Total before tax: $${(5788 + 998) / 100}`;
let estimatedTax = `Estimated tax (10%): $${Math.round(6786 * 0.1) / 100}`;
let orderTotal = `Order total: $${(679 + 6786) / 100}`;

console.log(`
${itemsTotal}
${shippingHandlingTotal}
${preTaxTotal}
${estimatedTax}
${orderTotal}`);
