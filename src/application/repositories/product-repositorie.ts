import Product from '~entity/product';

import Id from '~value-object/id';
import ProductName from '~value-object/product-name';

export default interface ProductRepositorie {
  create(product: Product): Promise<void>;
  update(product: Product): Promise<void>;
  findById(id: Id): Promise<Product | null>;
  findByName(name: ProductName): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  delete(id: Id): Promise<void>;
}
