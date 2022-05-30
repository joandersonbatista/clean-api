import Id from '~value-object/id';

import IdInputDTO from '~dto/id-input-dto';

import CategoryRepositorie from '~repositorie/category-repositorie';

import NotFoundError from '~error/not-found-error';

export default class DeleteCategoryApplication {
  constructor(private readonly categoryRepositorie: CategoryRepositorie) {}

  async execute(input: IdInputDTO): Promise<void> {
    const categoryId = new Id(input.id);

    const category = await this.categoryRepositorie.findById(categoryId);

    if (!category) throw new NotFoundError('category does not exists');

    await this.categoryRepositorie.delete(categoryId);
  }
}
