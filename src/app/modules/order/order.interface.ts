import { Model } from 'mongoose';

export type TOrder = {
  productName: string;
  price: number;
  quantity: number;
};

//for create static
export interface UserModel extends Model<TOrder> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: number): Promise<TOrder | null>;
}
