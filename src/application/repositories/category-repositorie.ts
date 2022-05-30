import Category from '~entity/category';

import CategoryName from '~value-object/category-name';
import Id from '~value-object/id';

export default interface CategoryRepositorie {
  create(category: Category): Promise<void>;
  update(category: Category): Promise<void>;
  findById(id: Id): Promise<Category | null>;
  findByName(name: CategoryName): Promise<Category | null>;
  findAll(): Promise<Category[]>;
  delete(id: Id): Promise<void>;
}
