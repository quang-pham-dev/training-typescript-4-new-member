interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
  //   getTotal(discount: number): string;
}

const table: Product = {
  name: 'Table',
  unitPrice: 500,
};

const tableOrder: OrderDetail = {
  product: table,
  quantity: 1,
  getTotal(discountPercentage: number): string {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discountPercentage;
    return (priceWithoutDiscount - discountAmount).toString();
  },
};
