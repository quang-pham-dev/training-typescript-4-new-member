class Product {
  name: string;
  unitPrice: number;
}
class OrderDetail {
  product: Product;
  quantity: number;
  getTotal(productName: string, discount: number): number | string {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    const total = priceWithoutDiscount - discountAmount;
    return `product Name: ${productName}, totalPrice: ${total}`;
  }
}

const table = new Product();
table.name = 'Table';
table.unitPrice = 500;

const orderDetail = new OrderDetail();
orderDetail.product = table;
orderDetail.product.name = table.name;
orderDetail.quantity = 2;

const total = orderDetail.getTotal(orderDetail.product.name, 0.1);

console.log(total);
