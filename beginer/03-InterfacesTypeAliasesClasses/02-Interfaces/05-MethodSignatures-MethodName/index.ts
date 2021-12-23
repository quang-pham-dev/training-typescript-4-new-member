interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
  //   total(discount: number): number;
}

const table: Product = {
  name: 'Table',
  unitPrice: 500,
};

const tableOrder: OrderDetail = {
  product: table,
  quantity: 1,
  total(discountPercentage: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discountPercentage;
    return priceWithoutDiscount - discountAmount;
  },
};
