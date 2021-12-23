class Product {
  name: string;
  unitPrice: number;
}

class OrderDetail {
  product: Product;
  quantity: number;

  //   static getTotal(discount: number): number {
  //     const priceWithoutDiscount = this.product.unitPrice * this.quantity; // Error
  //     const discountAmount = priceWithoutDiscount * discount;
  //     return priceWithoutDiscount - discountAmount;
  //   }

  static getTotal(unitPrice: number, quantity: number, discount: number): number {
    const priceWithoutDiscount = unitPrice * quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}

const total = OrderDetail.getTotal(500, 2, 0.1);
console.log(total);
