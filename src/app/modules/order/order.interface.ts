import { Document, Model } from 'mongoose';

export interface TOrder {
  productName: string;
  price: number;
  quantity: number;
}

export interface TUser extends Document {
  orders: TOrder[];
}

//for create static
export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: number): Promise<TUser | null>;
}
