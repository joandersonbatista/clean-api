import { model, Schema } from 'mongoose';

import CategoryModelAttributes from '~infrastructure-interface/category-model-attributes.interface';

import ProductModelMongoDB from './product-model-mongodb';

const schema = new Schema<CategoryModelAttributes>(
  {
    uuid: { type: 'string', required: true, unique: true },
    name: { type: 'string', required: true, unique: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: false },
  },
  {
    timestamps: false,
  },
);

schema.pre('deleteOne', async function (next) {
  await ProductModelMongoDB.deleteMany({ categoryId: this.uuid });

  next();
});

const CategoryProductModelMongoDB = model<CategoryModelAttributes>(
  'category_products',
  schema,
);

export default CategoryProductModelMongoDB;
