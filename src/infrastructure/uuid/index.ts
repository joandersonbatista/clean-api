import { v4 as uuidV4 } from 'uuid';

import IdGenerator from '~domain-protocol/id-generator-protocol';

export default class UuidV4 implements IdGenerator {
  generate(): string {
    return uuidV4();
  }
}
