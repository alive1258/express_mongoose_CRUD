import { Schema, model } from 'mongoose';
import { TFullName, TUser, TUserAddress } from './user.interface';
// import User from './user.model';

const userFullNameSchema = new Schema<TFullName>({
  firstName: {
    type: String,
    required: [true, 'Please tell us firstName'],
  },
  lastName: {
    type: String,
    required: [true, 'Please tell us lastName'],
  },
});
const userAddressSchema = new Schema<TUserAddress>({
  street: {
    type: String,
    required: [true, 'Please tell us street'],
  },
  city: {
    type: String,
    required: [true, 'Please tell us city'],
  },
  country: {
    type: String,
    required: [true, 'Please tell us country'],
  },
});

//Define a schema for  user

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'Please tell us userId'],
    unique: true,
  },
  userName: {
    type: String,
    required: [true, 'Please tell us userName'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please tell us password'],
    unique: true,
  },
  fullName: userFullNameSchema,
  age: Number,
  email: String,
  isActive: Boolean,
  hobbies: [String],
  address: userAddressSchema,
});

// export const User = model<TUser, UserModel>('User', userSchema);
export const User = model<TUser>('User', userSchema);
