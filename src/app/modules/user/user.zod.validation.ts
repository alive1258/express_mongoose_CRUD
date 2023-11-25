import { z } from 'zod';

const userFullNameValidationSchema = z.object({
  firstName: z.string().min(1, { message: 'Please tell us your firstName' }),
  lastName: z.string().min(1, { message: 'Please tell us your lastName' }),
});

const userAddressValidationSchema = z.object({
  street: z.string().min(1, { message: 'Please tell us your street' }),
  city: z.string().min(1, { message: 'Please tell us your city' }),
  country: z.string().min(1, { message: 'Please tell us your country' }),
});

const userValidationSchema = z.object({
  userId: z.number().min(1, { message: 'Please tell us your userId' }),
  userName: z.string().min(1, { message: 'Please tell us your userName' }),
  password: z.string().min(1, { message: 'Please tell us your password' }),
  fullName: userFullNameValidationSchema,
  age: z.number().min(1, { message: 'Please tell us your age' }),
  email: z.string().min(1, { message: 'Please tell us your email' }),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: userAddressValidationSchema,
});

export default userValidationSchema;
