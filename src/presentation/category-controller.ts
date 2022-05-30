import CreateCategoryApplication from '~application/create-category.application';
import DeleteCategoryApplication from '~application/delete-category.application';
import GetCategoryApplication from '~application/get-category.application';
import UpdateCategoryApplication from '~application/update-category.application';

import GetCategoryOutputDTO from '~dto/get-category-output-dto';

import CreatedResponse from '~response/created-response';
import DeletedResponse from '~response/deleted-response';
import SucessResponse from '~response/sucess-response';
import UpdatedResponse from '~response/updated-response';

import CreateCategoryRequest from '~request/create-category-request';
import DeleteCategoryRequest from '~request/delete-category-request';
import GetCategoryRequest from '~request/get-category-request';
import UpdateCategoryRequest from '~request/update-category-request';

import MethodController from '~presentation-interface/method-controller-interface';

export default class CategoryController {
  constructor(
    private readonly createCategoryApplication: CreateCategoryApplication,
    private readonly updateCategoryApplication: UpdateCategoryApplication,
    private readonly deleteCategoryApplication: DeleteCategoryApplication,
    private readonly getCategoryApplication: GetCategoryApplication,

    private readonly createdResponse: CreatedResponse,
    private readonly updatedResponse: UpdatedResponse,
    private readonly deletedResponse: DeletedResponse,
    private readonly sucessResponse: SucessResponse,
  ) {}

  create: MethodController = async (req: CreateCategoryRequest) => {
    const inputDTO = { ...req.body };

    await this.createCategoryApplication.execute(inputDTO);

    return this.createdResponse.response();
  };

  update: MethodController = async (req: UpdateCategoryRequest) => {
    const inputDTO = { ...req.body, id: req.params.id };

    await this.updateCategoryApplication.execute(inputDTO);

    return this.updatedResponse.response();
  };

  delete: MethodController = async (req: DeleteCategoryRequest) => {
    const inputDTO = { id: req.params.id };

    await this.deleteCategoryApplication.execute(inputDTO);

    return this.deletedResponse.response();
  };

  get: MethodController<GetCategoryOutputDTO[]> = async (
    req: GetCategoryRequest,
  ) => {
    const inputDTO = { id: req.params.id };

    const outPutDTO = await this.getCategoryApplication.execute(inputDTO);

    return this.sucessResponse.response(outPutDTO);
  };
}
