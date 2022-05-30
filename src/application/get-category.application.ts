import Id from '~value-object/id';

import GetCategoryOutputDTO from '~dto/get-category-output-dto';
import IdInputOptionalDTO from '~dto/id-input-optional-dto';

import CategoryRepositorie from '~repositorie/category-repositorie';

import NotFoundError from '~error/not-found-error';

export default class GetCategoryApplication {
  constructor(private readonly categoryRepositorie: CategoryRepositorie) {}

  async execute(input: IdInputOptionalDTO): Promise<GetCategoryOutputDTO[]> {
    if (input.id) {
      const id = new Id(input.id);

      const category = await this.categoryRepositorie.findById(id);

      if (!category) throw new NotFoundError('category does not exists');

      return [
        {
          id: id.value,
          name: category.getName().value,
          createdAt: category.getCreatedAt(),
          updatedAt: category.getUpdatedAt(),
        },
      ];
    }

    const categorys = await this.categoryRepositorie.findAll();

    return categorys.map((category) => ({
      id: category.getId().value,
      name: category.getName().value,
      createdAt: category.getCreatedAt(),
      updatedAt: category.getUpdatedAt(),
    }));
  }
}
