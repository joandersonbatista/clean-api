import CreateProductApplication from '~application/create-product.application';
import DeleteProductApplication from '~application/delete-product.application';
import GetProductApplication from '~application/get-product.application';
import UpdateProductApplication from '~application/update-product.application';

import ProductController from '~controller/product-controller';

import CreatedResponse from '~response/created-response';
import DeletedResponse from '~response/deleted-response';
import SucessResponse from '~response/sucess-response';
import UpdatedResponse from '~response/updated-response';

import BrandRepositorieMongoDB from '../mongoDB/repositories/brand-repositorie-mongodb';
import CategoryRepositorieMongoDB from '../mongoDB/repositories/category-repositorie-mongodb';
import ProductRepositorieMongoDB from '../mongoDB/repositories/product-repositorie-mongodb';
import UuidV4 from '../uuid';

export default () => {
  const productRepository = new ProductRepositorieMongoDB();
  const categoryRepository = new CategoryRepositorieMongoDB();
  const brandRepositorie = new BrandRepositorieMongoDB();
  const idGenerator = new UuidV4();
  // applications
  const createProduct = new CreateProductApplication(
    productRepository,
    categoryRepository,
    brandRepositorie,
    idGenerator,
  );
  const updateProduct = new UpdateProductApplication(
    productRepository,
    categoryRepository,
    brandRepositorie,
  );
  const getProduct = new GetProductApplication(productRepository);
  const deleteProduct = new DeleteProductApplication(productRepository);
  // responses
  const createdResponse = new CreatedResponse();
  const updatedResponse = new UpdatedResponse();
  const deletedResponse = new DeletedResponse();
  const sucessResponse = new SucessResponse();
  // controller
  return new ProductController(
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    createdResponse,
    updatedResponse,
    deletedResponse,
    sucessResponse,
  );
};
