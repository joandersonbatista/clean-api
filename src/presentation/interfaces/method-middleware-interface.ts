import RequestModel from '~presentation-interface/request-model-interface';

export default interface MethodMiddleware {
  (request: RequestModel): Promise<void>;
}
