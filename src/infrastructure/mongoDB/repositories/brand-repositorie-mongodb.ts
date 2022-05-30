import Brand from '~entity/brand';

import BrandName from '~value-object/brand-name';
import Id from '~value-object/id';

import BrandRepositorie from '~repositorie/brand-repositorie';

import BrandModelAttributes from '~infrastructure-interface/brand-model-attributes.interface';

import BrandModelMongoDB from '../models/brand-model-mongodb';

export default class BrandRepositorieMongoDB implements BrandRepositorie {
  async create(brand: Brand): Promise<void> {
    await BrandModelMongoDB.create(this.fromEntityToTable(brand));
  }

  async update(brand: Brand): Promise<void> {
    await BrandModelMongoDB.findOneAndUpdate(
      { uuid: brand.getId().value },
      this.fromEntityToTable(brand),
    );
  }

  async findById(id: Id): Promise<Brand | null> {
    const brand = await BrandModelMongoDB.findOne({ uuid: id.value });

    if (!brand) return null;

    return this.fromTableToEntity(brand);
  }

  async findByName(name: BrandName): Promise<Brand | null> {
    const brand = await BrandModelMongoDB.findOne({ name: name.value });

    if (!brand) return null;

    return this.fromTableToEntity(brand);
  }

  async findAll(): Promise<Brand[]> {
    let brands: Brand[] = [];

    (await BrandModelMongoDB.find()).forEach((brand) => {
      brands.push(this.fromTableToEntity(brand));
    });

    return brands;
  }

  async delete(id: Id): Promise<void> {
    await BrandModelMongoDB.deleteOne({ uuid: id.value });
  }

  private fromEntityToTable(brand: Brand): BrandModelAttributes {
    return {
      uuid: brand.getId().value,
      name: brand.getName().value,
      created_at: brand.getCreatedAt(),
      updated_at: brand.getUpdatedAt(),
    };
  }

  private fromTableToEntity(brand: BrandModelAttributes): Brand {
    return new Brand(
      new Id(brand.uuid),
      new BrandName(brand.name),
      brand.created_at,
      brand.updated_at,
    );
  }
}
