import { HttpResponse, HttpRequest } from './Http.protocol';

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}
