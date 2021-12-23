interface Product {
  name: string;
  unitPrice: number;
}

interface IOrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}

class OrderDetail implements IOrderDetail {
  product: Product;
  quantity: number;

  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;
  }
}

const tableOrderDetail = new OrderDetail();
tableOrderDetail.product = {
  name: 'Table',
  unitPrice: 500,
};
tableOrderDetail.quantity = 2;
tableOrderDetail.getTotal(0.1);

console.log(tableOrderDetail.getTotal(0.1));
