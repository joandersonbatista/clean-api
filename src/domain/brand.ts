import BrandName from '~value-object/brand-name';
import Id from '~value-object/id';

export default class Brand {
  constructor(
    private readonly id: Id,
    private name: BrandName,
    private readonly createdAt: Date,
    private updatedAt?: Date,
  ) {}

  public getId(): Id {
    return this.id;
  }

  public getName(): BrandName {
    return this.name;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date | undefined {
    return this.updatedAt;
  }

  public changeName(name: BrandName): void {
    this.name = name;

    this.updateBrand(new Date());
  }

  private updateBrand(updatedAt: Date): void {
    this.updatedAt = updatedAt;
  }
}
