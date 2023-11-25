import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (OrderData: TOrder) => {
  const result = await OrderModel.create(OrderData);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
