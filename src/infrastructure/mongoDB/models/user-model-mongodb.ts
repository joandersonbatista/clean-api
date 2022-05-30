import { model, Schema } from 'mongoose';

import UserModelAttributes from '~infrastructure-interface/user-model-attributes.interface';

const schema = new Schema<UserModelAttributes>(
  {
    uuid: { type: 'string', required: true, unique: true },
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: false },
  },
  {
    timestamps: false,
  },
);

const UserModelMongoDB = model<UserModelAttributes>('users', schema);

export default UserModelMongoDB;
