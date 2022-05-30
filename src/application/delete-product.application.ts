import Id from '~value-object/id';

import IdInputDTO from '~dto/id-input-dto';

import ProductRepositorie from '~repositorie/product-repositorie';

import NotFoundError from '~error/not-found-error';

export default class DeleteProductApplication {
  constructor(private readonly productRepositorie: ProductRepositorie) {}

  async execute(input: IdInputDTO): Promise<void> {
    const id = new Id(input.id);

    const product = await this.productRepositorie.findById(id);

    if (!product) throw new NotFoundError('product does not exists');

    await this.productRepositorie.delete(id);
  }
}
