import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  try {
    const existingUser = await User.findOne({ userId: userData.userId });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const result = await User.create(userData);
    return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error('failed to create user.' + error.message);
  }
};

const getAllUsersFromDB = async () => {
  const result = await User.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};
const deleteUserFromDB = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

const updateUserFromDB = async (id: string, newData: TUser) => {
  const result = await User.findByIdAndUpdate(id, newData, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
  updateUserFromDB,
};
