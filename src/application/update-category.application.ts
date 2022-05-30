import CategoryName from '~value-object/category-name';
import Id from '~value-object/id';

import UpdateCategoryInputDTO from '~dto/update-category-input-dto';

import CategoryRepositorie from '~repositorie/category-repositorie';

import NotFoundError from '~error/not-found-error';

export default class UpdateCategoryApplication {
  constructor(private readonly categoryRepositorie: CategoryRepositorie) {}

  async execute(input: UpdateCategoryInputDTO): Promise<void> {
    const category = await this.categoryRepositorie.findById(new Id(input.id));

    if (!category) throw new NotFoundError('brand does not exists');

    !!input?.name && category.changeName(new CategoryName(input.name));

    await this.categoryRepositorie.update(category);
  }
}
