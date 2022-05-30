import Id from '~value-object/id';

import GetProductOutputDTO from '~dto/get-product-output-dto';
import IdInputOptionalDTO from '~dto/id-input-optional-dto';

import ProductRepositorie from '~repositorie/product-repositorie';

import NotFoundError from '~error/not-found-error';

export default class GetProductApplication {
  constructor(private readonly productRepositorie: ProductRepositorie) {}

  async execute(input: IdInputOptionalDTO): Promise<GetProductOutputDTO[]> {
    if (input.id) {
      const id = new Id(input.id);

      const product = await this.productRepositorie.findById(id);

      if (!product) throw new NotFoundError('product does not exists');

      return [
        {
          id: id.value,
          name: product.getName().value,
          createdAt: product.getCreatedAt(),
          updatedAt: product.getUpdatedAt(),
        },
      ];
    }

    const products = await this.productRepositorie.findAll();

    return products.map((product) => ({
      id: product.getId().value,
      name: product.getName().value,
      createdAt: product.getCreatedAt(),
      updatedAt: product.getUpdatedAt(),
    }));
  }
}
