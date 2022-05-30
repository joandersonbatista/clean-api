import Brand from '~entity/brand';

import BrandName from '~value-object/brand-name';
import Id from '~value-object/id';

import IdGenerator from '~domain-protocol/id-generator-protocol';

import BrandRepositorie from '~application/repositories/brand-repositorie';

import CreateBrandInputDTO from '~dto/create-brand-input-dto';

import ExistsError from '~error/exists-error';

export default class CreateBrandApplication {
  constructor(
    private readonly brandRepositorie: BrandRepositorie,
    private readonly idGenerator: IdGenerator,
  ) {}

  async execute(input: CreateBrandInputDTO): Promise<void> {
    const name = new BrandName(input.name);

    const brand = await this.brandRepositorie.findByName(name);

    if (brand) throw new ExistsError('brand already exists');

    const id = new Id(this.idGenerator.generate());
    const date = new Date();

    const createdBrand = new Brand(id, name, date);

    await this.brandRepositorie.create(createdBrand);
  }
}
