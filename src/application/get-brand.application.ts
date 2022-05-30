import Id from '~value-object/id';

import GetBrandOutputDTO from '~dto/get-brand-output-dto';
import IdInputOptionalDTO from '~dto/id-input-optional-dto';

import BrandRepositorie from '~repositorie/brand-repositorie';

import NotFoundError from '~error/not-found-error';

export default class GetBrandApplication {
  constructor(private readonly brandRepositorie: BrandRepositorie) {}

  async execute(input: IdInputOptionalDTO): Promise<GetBrandOutputDTO[]> {
    if (input.id) {
      const id = new Id(input.id);

      const brand = await this.brandRepositorie.findById(id);

      if (!brand) throw new NotFoundError('brand does not exists');

      return [
        {
          id: id.value,
          name: brand.getName().value,
          createdAt: brand.getCreatedAt(),
          updatedAt: brand.getUpdatedAt(),
        },
      ];
    }

    const brands = await this.brandRepositorie.findAll();

    return brands.map((brand) => ({
      id: brand.getId().value,
      name: brand.getName().value,
      createdAt: brand.getCreatedAt(),
      updatedAt: brand.getUpdatedAt(),
    }));
  }
}
