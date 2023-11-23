import { Request, Response } from 'express';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    // user data from the request body
    const userData = req.body;
    //create a user in the database
    const result = await userServices.createUserIntoDB(userData);
    // if successful, respond with a success message and the created user data
    res.status(201).json({
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  } catch (error: unknown) {
    //if an error occurs during user creation process
    if (error instanceof Error) {
      // log the error for debugging purposes
      //   console.log(error);

      // Respond with a detailed error message indicating user not found
      res.status(500).json({
        success: false,
        description: 'User not found',
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

// get All Users controller
const getAllUsers = async (req: Request, res: Response) => {
  try {
    //get all user in the database
    const result = await userServices.getAllUsersFromDB();
    // if successful, respond with a success message and the created user data
    res.status(201).json({
      success: true,
      message: 'User fetched Successfully',
      data: result,
    });
  } catch (error: unknown) {
    //if an error occurs during user creation process
    if (error instanceof Error) {
      // log the error for debugging purposes
      //   console.log(error);

      // Respond with a detailed error message indicating user not found
      res.status(500).json({
        success: false,
        description: 'User not found',
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

export const userController = {
  createUser,
  getAllUsers,
};
