import Id from '~value-object/id';
import Token from '~value-object/token';

export default interface TokenJwtProtocol {
  verify(token: Token): Id;
  sigin(id: Id): Token;
}
