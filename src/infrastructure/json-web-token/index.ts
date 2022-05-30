import { sign, verify, JwtPayload } from 'jsonwebtoken';

import Id from '~value-object/id';
import token from '~value-object/token';
import Token from '~value-object/token';

import TokenJwt from '~domain-protocol/token-jwt-protocol';

export default class JsonWebToken implements TokenJwt {
  verify(token: token): Id {
    const { id } = verify(token.value, process.env.TOKEN_SECRET!) as JwtPayload;

    return new Id(id);
  }

  sigin(id: Id): token {
    const token = sign({ id: id.value }, process.env.TOKEN_SECRET!, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return new Token(token);
  }
}
