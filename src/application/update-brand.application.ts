import BrandName from '~value-object/brand-name';
import Id from '~value-object/id';

import UpdateBrandInputDTO from '~dto/update-brand-input-dto';

import BrandRepositorie from '~repositorie/brand-repositorie';

import NotFoundError from '~error/not-found-error';

export default class UpdateBrandApplication {
  constructor(private readonly brandRepositorie: BrandRepositorie) {}

  async execute(input: UpdateBrandInputDTO): Promise<void> {
    const brand = await this.brandRepositorie.findById(new Id(input.id));

    if (!brand) throw new NotFoundError('brand does not exists');

    !!input?.name && brand.changeName(new BrandName(input.name));

    await this.brandRepositorie.update(brand);
  }
}
