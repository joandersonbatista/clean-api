import { model, Schema } from 'mongoose';

import BrandModelAttributes from '~infrastructure-interface/brand-model-attributes.interface';

import ProductModelMongoDB from './product-model-mongodb';

const schema = new Schema<BrandModelAttributes>(
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
  await ProductModelMongoDB.deleteMany({ brandId: this.uuid });

  next();
});

const BrandModelMongoDB = model<BrandModelAttributes>('brands', schema);

export default BrandModelMongoDB;
