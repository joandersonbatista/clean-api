import Id from '~value-object/id';

import IdInputDTO from '~dto/id-input-dto';

import BrandRepositorie from '~repositorie/brand-repositorie';

import NotFoundError from '~error/not-found-error';

export default class DeleteBrandApplication {
  constructor(private readonly brandRepositorie: BrandRepositorie) {}

  async execute(input: IdInputDTO): Promise<void> {
    const id = new Id(input.id);

    const brand = await this.brandRepositorie.findById(id);

    if (!brand) throw new NotFoundError('brand does not exists');

    await this.brandRepositorie.delete(id);
  }
}
