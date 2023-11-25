import { Model, Schema, model, Document } from 'mongoose';
import { TOrder } from './order.interface';
import { TUser } from '../user/user.interface';

export interface OrderDocument extends Document, TOrder {}
export interface UserDocument extends Document, TUser {
  orders: OrderDocument[];
}
//order schema
const orderSchema = new Schema<TOrder>({
  productName: {
    type: String,
    required: [true, 'Please tell us productName'],
  },
  price: {
    type: Number,
    required: [true, 'Please tell us price'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please tell us quantity'],
  },
});

const userSchema = new Schema<UserDocument>({
  orders: [orderSchema],
});

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: number): Promise<TUser | null>;
}

export const UserModel = model<UserDocument>('User', userSchema);
export const OrderModel = model<OrderDocument>('Order', userSchema);
