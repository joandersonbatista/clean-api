export default interface ProductModelAttributes {
  uuid: string;
  categoryId: string;
  brandId: string;
  name: string;
  price: number;
  created_at: Date;
  updated_at?: Date;
}
