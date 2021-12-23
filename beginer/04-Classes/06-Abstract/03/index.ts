abstract class Product {
  name: string;
  unitPrice: number;
  abstract delete(): void;
}

class Food extends Product {
  deleted: boolean;

  constructor(public bestBefore: Date) {
    super();
  }

  delete() {
    this.deleted = false;
    this.name = null;
    this.unitPrice = undefined;
  }
}

const bread = new Food(new Date(2019, 6, 1));
