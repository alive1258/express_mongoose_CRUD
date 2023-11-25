import { Schema, model } from 'mongoose';
import { TFullName, TUser, TUserAddress, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

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

const userSchema = new Schema<TUser, UserModel>({
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
//per save middleware hook
userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//remove password from serialize output
userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  },
});
//post save middleware hook
userSchema.post('save', function (doc, next) {
  doc.password = '';
  console.log(this, 'post hook: we  saved the data');
  next();
});

//creating a custom statics method
userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

// export const User = model<TUser, UserModel>('User', userSchema);
export const User = model<TUser, UserModel>('User', userSchema);
