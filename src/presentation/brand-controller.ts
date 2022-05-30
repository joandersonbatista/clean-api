import CreateBrandApplication from '~application/create-brand.application';
import DeleteBrandApplication from '~application/delete-brand.application';
import GetBrandsApplication from '~application/get-brand.application';
import UpdateBrandApplication from '~application/update-brand.application';

import GetBrandOutputDTO from '~dto/get-brand-output-dto';

import CreatedResponse from '~response/created-response';
import DeletedResponse from '~response/deleted-response';
import SucessResponse from '~response/sucess-response';
import UpdatedResponse from '~response/updated-response';

import CreateBrandRequest from '~request/create-brand-request';
import DeleteBrandRequest from '~request/delete-brand-request';
import GetBrandRequest from '~request/get-brand-request';
import UpdateBrandRequest from '~request/update-brand-request';

import MethodController from '~presentation-interface/method-controller-interface';

export default class BrandController {
  constructor(
    private readonly createBrandApplication: CreateBrandApplication,
    private readonly updateBrandApplication: UpdateBrandApplication,
    private readonly deleteBrandApplication: DeleteBrandApplication,
    private readonly getBrandApplication: GetBrandsApplication,

    private readonly createdResponse: CreatedResponse,
    private readonly updatedResponse: UpdatedResponse,
    private readonly deletedResponse: DeletedResponse,
    private readonly sucessResponse: SucessResponse,
  ) {}

  create: MethodController = async (req: CreateBrandRequest) => {
    const inputDTO = { ...req.body };

    await this.createBrandApplication.execute(inputDTO);

    return this.createdResponse.response();
  };

  update: MethodController = async (req: UpdateBrandRequest) => {
    const inputDTO = { ...req.body, id: req.params.id };

    await this.updateBrandApplication.execute(inputDTO);

    return this.updatedResponse.response();
  };

  delete: MethodController = async (req: DeleteBrandRequest) => {
    const inputDTO = { id: req.params.id };

    await this.deleteBrandApplication.execute(inputDTO);

    return this.deletedResponse.response();
  };

  get: MethodController<GetBrandOutputDTO[]> = async (req: GetBrandRequest) => {
    const inputDTO = { id: req.params.id };

    const outPutDTO = await this.getBrandApplication.execute(inputDTO);

    return this.sucessResponse.response(outPutDTO);
  };
}
