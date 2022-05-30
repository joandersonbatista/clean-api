import ResponseHandler from '~presentation-interface/response-handler-interface';
import ResponseModel from '~presentation-interface/response-model-interface';

export default class DeletedResponse implements ResponseHandler {
  response(): ResponseModel<undefined> {
    return { statusCode: 204, body: undefined };
  }
}
