// Working with money
// 2 basketball at $20.95 each with $4.99 shipping
// and 2 t-shirts at $7.99 each with $4.99 shipping

let itemsTotal = `Items (4):  $${((2095 + 799) * 2) / 100}`; // Convert from Dollar to cents by omitting the period 2095, and back to Dollar by dividing by 100
let shippingHandlingTotal = `Shipping & handling:  $${(499 * 2) / 100}`;
let preTaxTotal = `Total before tax: $${(5788 + 998) / 100}`;
let estimatedTax = `Estimated tax (10%): $${Math.round(6786 * 0.1) / 100}`; // Use Math.round() when calculating tax for accuracy.
let orderTotal = `Order total: $${(679 + 6786) / 100}`;

console.log(`
${itemsTotal}
${shippingHandlingTotal}
${preTaxTotal}
${estimatedTax}
${orderTotal}`);

// Update cart to 1 basketball and 1 t-shirt, free shipping
itemsTotal = `Items (2): $${(2095 + 799) / 100}`;
preTaxTotal = `Total before tax: $${2894 / 100}`;
estimatedTax = `Estimated tax (10%): $${Math.round(2894 * 0.1) / 100}`;
orderTotal = `Order total: $${(2894 + 289) / 100}`;

console.log(`
${itemsTotal}
${preTaxTotal}
${estimatedTax}
${orderTotal}`);
