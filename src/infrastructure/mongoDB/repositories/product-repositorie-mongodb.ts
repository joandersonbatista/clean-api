import Product from '~entity/product';

import Id from '~value-object/id';
import Price from '~value-object/price';
import ProductName from '~value-object/product-name';

import ProductRepositorie from '~repositorie/product-repositorie';

import ProductModelAttributes from '~infrastructure-interface/product-model-attributes.interface';

import ProductModelMongoDB from '../models/product-model-mongodb';

export default class ProductRepositorieMongoDB implements ProductRepositorie {
  async create(product: Product): Promise<void> {
    await ProductModelMongoDB.create(this.fromEntityToTable(product));
  }

  async update(product: Product): Promise<void> {
    await ProductModelMongoDB.findOneAndUpdate(
      { uuid: product.getId().value },
      this.fromEntityToTable(product),
    );
  }

  async findById(id: Id): Promise<Product | null> {
    const product = await ProductModelMongoDB.findOne({ uuid: id.value });

    if (!product) return null;

    return this.fromTableToEntity(product);
  }

  async findByName(name: ProductName): Promise<Product | null> {
    const product = await ProductModelMongoDB.findOne({ name: name.value });

    if (!product) return null;

    return this.fromTableToEntity(product);
  }

  async findAll(): Promise<Product[]> {
    let products: Product[] = [];

    (await ProductModelMongoDB.find()).forEach((product) => {
      products.push(this.fromTableToEntity(product));
    });

    return products;
  }

  async delete(id: Id): Promise<void> {
    await ProductModelMongoDB.deleteOne({ uuid: id.value });
  }

  private fromEntityToTable(product: Product): ProductModelAttributes {
    return {
      uuid: product.getId().value,
      brandId: product.getBrandId().value,
      categoryId: product.getCategoryId().value,
      name: product.getName().value,
      price: product.getPrice().value,
      created_at: product.getCreatedAt(),
      updated_at: product.getUpdatedAt(),
    };
  }

  private fromTableToEntity(product: ProductModelAttributes): Product {
    return new Product(
      new Id(product.uuid),
      new Id(product.categoryId),
      new Id(product.brandId),
      new ProductName(product.name),
      new Price(product.price),
      product.created_at,
      product.updated_at,
    );
  }
}
