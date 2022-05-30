import CategoryName from '~value-object/category-name';
import Id from '~value-object/id';

export default class Category {
  constructor(
    private readonly id: Id,
    private name: CategoryName,
    private readonly createdAt: Date,
    private updatedAt?: Date,
  ) {}

  public getId(): Id {
    return this.id;
  }

  public getName(): CategoryName {
    return this.name;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  public changeName(name: CategoryName): void {
    this.name = name;

    this.updateBrand(new Date());
  }

  private updateBrand(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
