import { Request, Response } from 'express';
import { orderServices } from './order.service';
import { TOrder } from './order.interface';
import { OrderDocument, UserModel } from './order.model';

const addProductToOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orderData: TOrder = req.body;

    //find the user by userId
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      });
    }

    //if orders dose not exist for the user, create empty array
    if (!user.orders) {
      user.orders = [];
    }

    //append new order to the orders array
    // eslint-disable-next-line no-undef
    user.orders.push(orderData as OrderDocument);
    //save update user object
    await user.save();

    //create a order in the database
    // const result = await orderServices.createOrderIntoDB(orderData);
    // if successful, respond with a success message and the created order data
    res.status(201).json({
      success: true,
      message: 'Product added to orders',
      data: user.orders,
    });
  } catch (error: unknown) {
    //if an error occurs during order creation process
    if (error instanceof Error) {
      // log the error for debugging purposes
      //   console.log(error);

      // Respond with a detailed error message indicating order not found
      res.status(500).json({
        success: false,
        message: 'Order not found',
        error: {
          code: 404,
          description: 'Order not found',
        },
      });
    } else {
      // if the error is of an unknown type, respond with a generic error message
      res.status(500).json({
        success: false,
        description: 'Order not found',
        error: {
          code: 404,
          description: 'Order not found',
        },
      });
    }
  }
};

// get All Orders controller
const getAllOrders = async (req: Request, res: Response) => {
  try {
    //get all order in the database
    const result = await orderServices.getAllOrdersFromDB();
    // if successful, respond with a success message and the created order data
    res.status(200).json({
      success: true,
      message: 'Order fetched Successfully',
      data: result,
    });
  } catch (error: unknown) {
    //if an error occurs during order creation process
    if (error instanceof Error) {
      // log the error for debugging purposes
      // console.log(error);

      // Respond with a detailed error message indicating order not found
      res.status(500).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      });
    } else {
      // if the error is of an unknown type, respond with a generic error message
      res.status(500).json({
        success: false,
        description: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      });
    }
  }
};

export const orderController = {
  addProductToOrder,
  getAllOrders,
};
