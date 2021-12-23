interface Product {
  readonly name: string;
  unitPrice: number;
}

const table: Product = {
  name: 'Table',
  unitPrice: 500,
};

table.name = 'Better Table'; // Error Cannot assign to 'name' because it is a read-only property
