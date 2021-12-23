interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
  //   getTotal(discount: string): number;
}

const table: Product = {
  name: 'Table',
  unitPrice: 500,
};

const tableOrder: OrderDetail = {
  product: table,
  quantity: 1,
  getTotal(discountPercentage: string): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    // const discountAmount = priceWithoutDiscount * +discountPercentage;
    const discountAmount = priceWithoutDiscount * discountPercentage;
    return priceWithoutDiscount - discountAmount;
  },
};
