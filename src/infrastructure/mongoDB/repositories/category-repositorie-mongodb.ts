import Category from '~entity/category';

import CategoryName from '~value-object/category-name';
import Id from '~value-object/id';

import CategoryRepositorie from '~repositorie/category-repositorie';

import CategoryModelAttributes from '~infrastructure-interface/category-model-attributes.interface';

import CategoryModelMongoDB from '../models/category-model-mongodb';

export default class CategoryRepositorieMongoDB implements CategoryRepositorie {
  async create(brand: Category): Promise<void> {
    await CategoryModelMongoDB.create(this.fromEntityToTable(brand));
  }

  async update(brand: Category): Promise<void> {
    await CategoryModelMongoDB.findOneAndUpdate(
      { uuid: brand.getId().value },
      this.fromEntityToTable(brand),
    );
  }

  async findById(id: Id): Promise<Category | null> {
    const brand = await CategoryModelMongoDB.findOne({ uuid: id.value });

    if (!brand) return null;

    return this.fromTableToEntity(brand);
  }

  async findByName(name: CategoryName): Promise<Category | null> {
    const brand = await CategoryModelMongoDB.findOne({ name: name.value });

    if (!brand) return null;

    return this.fromTableToEntity(brand);
  }

  async findAll(): Promise<Category[]> {
    let categorys: Category[] = [];

    (await CategoryModelMongoDB.find()).forEach((brand) => {
      categorys.push(this.fromTableToEntity(brand));
    });

    return categorys;
  }

  async delete(id: Id): Promise<void> {
    await CategoryModelMongoDB.deleteOne({ uuid: id.value });
  }

  private fromEntityToTable(category: Category): CategoryModelAttributes {
    return {
      uuid: category.getId().value,
      name: category.getName().value,
      created_at: category.getCreatedAt(),
      updated_at: category.getUpdatedAt(),
    };
  }

  private fromTableToEntity(category: CategoryModelAttributes): Category {
    return new Category(
      new Id(category.uuid),
      new CategoryName(category.name),
      category.created_at,
      category.updated_at,
    );
  }
}
