import CreateProductApplication from '~application/create-product.application';
import DeleteProductApplication from '~application/delete-product.application';
import GetProductsApplication from '~application/get-product.application';
import UpdateProductApplication from '~application/update-product.application';

import GetProductOutputDTO from '~dto/get-product-output-dto';

import CreatedResponse from '~response/created-response';
import DeletedResponse from '~response/deleted-response';
import SucessResponse from '~response/sucess-response';
import UpdatedResponse from '~response/updated-response';

import CreateProductRequest from '~request/create-product-request';
import DeleteProductRequest from '~request/delete-product-request';
import GetProductRequest from '~request/get-product-request';
import UpdateProductRequest from '~request/update-product-request';

import MethodController from '~presentation-interface/method-controller-interface';

export default class ProductController {
  constructor(
    private readonly createProductApplication: CreateProductApplication,
    private readonly updateProductApplication: UpdateProductApplication,
    private readonly deleteProductApplication: DeleteProductApplication,
    private readonly getProductApplication: GetProductsApplication,

    private readonly createdResponse: CreatedResponse,
    private readonly updatedResponse: UpdatedResponse,
    private readonly deletedResponse: DeletedResponse,
    private readonly sucessResponse: SucessResponse,
  ) {}

  create: MethodController = async (req: CreateProductRequest) => {
    const inputDTO = { ...req.body };

    await this.createProductApplication.execute(inputDTO);

    return this.createdResponse.response();
  };

  update: MethodController = async (req: UpdateProductRequest) => {
    const inputDTO = { ...req.body, id: req.params.id };

    await this.updateProductApplication.execute(inputDTO);

    return this.updatedResponse.response();
  };

  delete: MethodController = async (req: DeleteProductRequest) => {
    const inputDTO = { id: req.params.id };

    await this.deleteProductApplication.execute(inputDTO);

    return this.deletedResponse.response();
  };

  get: MethodController<GetProductOutputDTO[]> = async (
    req: GetProductRequest,
  ) => {
    const inputDTO = { id: req.params.id };

    const outPutDTO = await this.getProductApplication.execute(inputDTO);

    return this.sucessResponse.response(outPutDTO);
  };
}
