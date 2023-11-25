import { z } from 'zod';
const orderValidationSchema = z.object({
  productName: z.string().min(1, { message: 'Please tell us productName' }),
  price: z.number().min(1, { message: 'Please tell us price' }),
  quantity: z.number().min(1, { message: 'Please tell us quantity' }),
});

export default orderValidationSchema;
