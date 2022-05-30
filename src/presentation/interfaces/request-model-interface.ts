export default interface RequestModel<
  Body = {},
  Params = {},
  Query = {},
  Headers = {},
  Method = {},
> {
  body: Body;
  params: Params;
  query: Query;
  headers: Headers;
  method: Method;
}
