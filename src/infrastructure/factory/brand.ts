import CreateBrandApplication from '~application/create-brand.application';
import DeleteBrandApplication from '~application/delete-brand.application';
import GetBrandApplication from '~application/get-brand.application';
import UpdateBrandApplication from '~application/update-brand.application';

import BrandController from '~controller/brand-controller';

import CreatedResponse from '~response/created-response';
import DeletedResponse from '~response/deleted-response';
import SucessResponse from '~response/sucess-response';
import UpdatedResponse from '~response/updated-response';

import BrandRepositorieMongoDB from '../mongoDB/repositories/brand-repositorie-mongodb';
import UuidV4 from '../uuid';

export default () => {
  const brandRepositorie = new BrandRepositorieMongoDB();
  const idGenerator = new UuidV4();
  // applications
  const createBrandApplication = new CreateBrandApplication(
    brandRepositorie,
    idGenerator,
  );
  const deleteBrandApplication = new DeleteBrandApplication(brandRepositorie);
  const updateBrandApplication = new UpdateBrandApplication(brandRepositorie);
  const getBrandApplication = new GetBrandApplication(brandRepositorie);
  // responses
  const createdResponse = new CreatedResponse();
  const updatedResponse = new UpdatedResponse();
  const deletedResponse = new DeletedResponse();
  const sucessResponse = new SucessResponse();
  // controller
  return new BrandController(
    createBrandApplication,
    updateBrandApplication,
    deleteBrandApplication,
    getBrandApplication,
    createdResponse,
    updatedResponse,
    deletedResponse,
    sucessResponse,
  );
};
