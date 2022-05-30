import Product from '~entity/product';

import Id from '~value-object/id';
import Price from '~value-object/price';
import ProductName from '~value-object/product-name';

import IdGenerator from '~domain-protocol/id-generator-protocol';

import CreateProductInputDTO from '~dto/create-product-input-dto';

import BrandRepositorie from '~repositorie/brand-repositorie';
import CategoryRepositorie from '~repositorie/category-repositorie';
import ProductRepositorie from '~repositorie/product-repositorie';

import ExistsError from '~error/exists-error';
import NotFoundError from '~error/not-found-error';

export default class CreateProductApplication {
  constructor(
    private readonly productRepositorie: ProductRepositorie,
    private readonly categoryRepositorie: CategoryRepositorie,
    private readonly brandRepositorie: BrandRepositorie,
    private readonly idGenerator: IdGenerator,
  ) {}

  async execute(input: CreateProductInputDTO): Promise<void> {
    const name = new ProductName(input.name);
    const brandId = new Id(input.brandId);
    const categoryId = new Id(input.categoryId);

    const product = await this.productRepositorie.findByName(name);
    const brand = await this.brandRepositorie.findById(brandId);
    const category = await this.categoryRepositorie.findById(categoryId);

    if (product) throw new ExistsError('product already exists');
    if (!brand) throw new NotFoundError('brand does not exists');
    if (!category) throw new NotFoundError('brand does not exists');

    const id = new Id(this.idGenerator.generate());
    const price = new Price(input.price);
    const createdAt = new Date();

    const createdProduct = new Product(
      id,
      brandId,
      categoryId,
      name,
      price,
      createdAt,
    );

    await this.productRepositorie.create(createdProduct);
  }
}
