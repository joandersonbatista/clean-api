import Category from '~entity/category';

import CategoryName from '~value-object/category-name';
import Id from '~value-object/id';

import IdGenerator from '~domain-protocol/id-generator-protocol';

import CreateCategoryInputDTO from '~dto/create-category-input-dto';

import CategoryRepositorie from '~repositorie/category-repositorie';

import ExistsError from '~error/exists-error';

export default class CreateCategoryApplication {
  constructor(
    private readonly categoryRepositorie: CategoryRepositorie,
    private readonly idGenerator: IdGenerator,
  ) {}

  async execute(input: CreateCategoryInputDTO): Promise<void> {
    const name = new CategoryName(input.name);

    const category = await this.categoryRepositorie.findByName(name);

    if (category) throw new ExistsError('category already exists');

    const id = new Id(this.idGenerator.generate());
    const date = new Date();

    const createdCategory = new Category(id, name, date);

    await this.categoryRepositorie.create(createdCategory);
  }
}
