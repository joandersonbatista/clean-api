import { model, Schema } from 'mongoose';

import ProductModelAttributes from '~infrastructure-interface/product-model-attributes.interface';

const schema = new Schema<ProductModelAttributes>(
  {
    uuid: { type: 'string', required: true, unique: true },
    name: { type: 'string', required: true, unique: true },
    price: { type: 'number', required: true },
    categoryId: { type: 'string', required: true },
    brandId: { type: 'string', required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: false },
  },
  {
    timestamps: false,
  },
);

const ProductModelMongoDB = model<ProductModelAttributes>('products', schema);

export default ProductModelMongoDB;
