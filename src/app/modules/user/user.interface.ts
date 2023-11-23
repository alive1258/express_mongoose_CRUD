import { Model } from 'mongoose';
// create an interface
export type TFullName = {
  firstName: string;
  lastName: string;
};

export type TUserAddress = {
  street: string;
  city: string;
  country: string;
};

export type TUser = {
  userId: number;
  userName: string;
  password: string;
  fullName: TFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TUserAddress;
};

//for create static
export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: number): Promise<TUser | null>;
}
