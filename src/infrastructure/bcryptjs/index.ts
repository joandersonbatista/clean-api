import bcryptjs from 'bcryptjs';

import Hash from '~domain-protocol/hash-protocol';

export default class Bcryptjs implements Hash {
  async hash(value: string): Promise<string> {
    return await bcryptjs.hash(value, 8);
  }

  async compare(value: string, hash: string): Promise<boolean> {
    return await bcryptjs.compare(value, hash);
  }
}
