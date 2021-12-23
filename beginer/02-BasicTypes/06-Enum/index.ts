enum OrderStatus {
  Paid = 1,
  Shipped = 2,
  Completed = 3,
  Cancelled = 0,
}

let orderStatus = OrderStatus.Shipped;
console.log(orderStatus);
