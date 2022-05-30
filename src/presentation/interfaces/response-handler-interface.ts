import ResponseModel from '~presentation-interface/response-model-interface';

export default interface ResponseHandler {
  response<Body>(body?: Body): ResponseModel<Body>;
}
