import CreateCategoryApplication from '~application/create-category.application';
import DeleteCategoryApplication from '~application/delete-category.application';
import GetCategoryApplication from '~application/get-category.application';
import UpdateCategoryApplication from '~application/update-category.application';

import CategoryController from '~controller/category-controller';

import CreatedResponse from '~response/created-response';
import DeletedResponse from '~response/deleted-response';
import SucessResponse from '~response/sucess-response';
import UpdatedResponse from '~response/updated-response';

import CategoryRepositorieMongoDB from '../mongoDB/repositories/category-repositorie-mongodb';
import UuidV4 from '../uuid';

export default () => {
  const categoryRepository = new CategoryRepositorieMongoDB();
  const idGenerator = new UuidV4();
  // aplications
  const createCategory = new CreateCategoryApplication(
    categoryRepository,
    idGenerator,
  );
  const updateCategory = new UpdateCategoryApplication(categoryRepository);
  const getCategoryApplication = new GetCategoryApplication(categoryRepository);
  const deleteCategoryApplication = new DeleteCategoryApplication(
    categoryRepository,
  );
  // responses
  const createdResponse = new CreatedResponse();
  const updatedResponse = new UpdatedResponse();
  const deletedResponse = new DeletedResponse();
  const sucessResponse = new SucessResponse();
  // controller
  return new CategoryController(
    createCategory,
    updateCategory,
    deleteCategoryApplication,
    getCategoryApplication,
    createdResponse,
    updatedResponse,
    deletedResponse,
    sucessResponse,
  );
};
