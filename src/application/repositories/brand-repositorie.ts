import Brand from '~entity/brand';

import BrandName from '~value-object/brand-name';
import Id from '~value-object/id';

export default interface BrandRepositorie {
  create(brand: Brand): Promise<void>;
  update(brand: Brand): Promise<void>;
  findById(id: Id): Promise<Brand | null>;
  findByName(name: BrandName): Promise<Brand | null>;
  findAll(): Promise<Brand[] | null>;
  delete(id: Id): Promise<void>;
}
