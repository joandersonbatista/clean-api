import Id from '~value-object/id';
import Price from '~value-object/price';
import ProductName from '~value-object/product-name';

export default class Product {
  constructor(
    private readonly id: Id,
    private brandId: Id,
    private categoryId: Id,
    private name: ProductName,
    private price: Price,
    private readonly createdAt: Date,
    private updatedAt?: Date,
  ) {}

  public getId(): Id {
    return this.id;
  }

  public getBrandId(): Id {
    return this.brandId;
  }

  public getCategoryId(): Id {
    return this.categoryId;
  }

  public getName(): ProductName {
    return this.name;
  }

  public getPrice(): Price {
    return this.price;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  public changeBrandId(brandId: Id): void {
    this.brandId = brandId;

    this.updateProduct(new Date());
  }

  public changeCategoryId(categoryId: Id): void {
    this.categoryId = categoryId;

    this.updateProduct(new Date());
  }

  public changeName(name: ProductName): void {
    this.name = name;

    this.updateProduct(new Date());
  }

  public changePrice(price: Price): void {
    this.price = price;

    this.updateProduct(new Date());
  }

  private updateProduct(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
