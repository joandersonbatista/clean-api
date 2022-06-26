import Id from '~value-object/id';
import ProductName from '~value-object/product-name';

import UpdateProductInputDTO from '~dto/update-product-dto';

import BrandRepositorie from '~repositorie/brand-repositorie';
import CategoryRepositorie from '~repositorie/category-repositorie';
import ProductRepositorie from '~repositorie/product-repositorie';

import NotFoundError from '~error/not-found-error';

export default class UpdateProductApplication {
  constructor(
    private readonly productRepositorie: ProductRepositorie,
    private readonly categoryRepositorie: CategoryRepositorie,
    private readonly brandRepositorie: BrandRepositorie,
  ) {}

  async execute(input: UpdateProductInputDTO): Promise<void> {
    const product = await this.productRepositorie.findById(new Id(input.id));

    if (!product) throw new NotFoundError('product does not exists');

    if (input.name) product.changeName(new ProductName(input.name));

    if (input.brandId) {
      const brandId = new Id(input.brandId);

      const brand = await this.brandRepositorie.findById(brandId);

      if (!brand) throw new NotFoundError('brand does not exists');

      product.changeBrandId(brandId);
    }

    if (input.categoryId) {
      const categoryId = new Id(input.categoryId);

      const category = await this.categoryRepositorie.findById(categoryId);

      if (!category) throw new NotFoundError('brand does not exists');

      product.changeCategoryId(categoryId);
    }

    await this.productRepositorie.update(product);
  }
}
