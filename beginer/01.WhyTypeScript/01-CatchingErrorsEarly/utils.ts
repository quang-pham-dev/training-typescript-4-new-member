interface IProduct {
  name: string;
  unitPrice: number;
}

function calculateTotalPrice(
  product: IProduct,
  quantity: number,
  discount: number,
): number | string {
  var priceWithoutDiscount: number = product.unitPrice * quantity;
  var discountAmount: number = priceWithoutDiscount * discount;
  return `Product Name: ${product.name}, total Price: ${priceWithoutDiscount - discountAmount}`;
}
console.log(
  calculateTotalPrice(
    {
      name: 'table',
      unitPrice: 500,
    },
    2,
    0.1,
  ),
);
