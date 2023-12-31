import { Request, Response } from 'express';
import { userServices } from './user.service';
import userValidationSchema from './user.zod.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    // user data from the request body
    const userData = req.body;
    // data validation in zod
    const zodUserData = userValidationSchema.parse(userData);

    //create a user in the database
    const result = await userServices.createUserIntoDB(zodUserData);
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
        message: 'something went wrong',
        error: {
          code: 404,
          description: error.message || 'User not found',
        },
      });
    } else {
      // if the error is of an unknown type, respond with a generic error message
      res.status(500).json({
        success: false,
        message: 'something went wrong',
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
    res.status(200).json({
      success: true,
      message: 'User fetched Successfully',
      data: result,
    });
  } catch (error: unknown) {
    //if an error occurs during user creation process
    if (error instanceof Error) {
      // log the error for debugging purposes
      // console.log(error);

      // Respond with a detailed error message indicating user not found
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
// get single User controller
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    //get single user in the database
    const result = await userServices.getSingleUserFromDB(userId);
    // if successful, respond with a success message and the created user data
    res.status(200).json({
      success: true,
      message: 'Single User fetched Successfully',
      data: result,
    });
  } catch (error: unknown) {
    //if an error occurs during user creation process
    if (error instanceof Error) {
      // log the error for debugging purposes
      // console.log(error);

      // Respond with a detailed error message indicating user not found
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
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      });
    }
  }
};
// delete single User controller
const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    //delete single user in the database
    const result = await userServices.deleteUserFromDB(userId);
    // if successful, respond with a success message and the created user data
    res.status(200).json({
      success: true,
      message: 'delete User  Successfully',
      data: result,
    });
  } catch (error: unknown) {
    //if an error occurs during user creation process
    if (error instanceof Error) {
      // log the error for debugging purposes
      // console.log(error);

      // Respond with a detailed error message indicating user not found
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
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found',
        },
      });
    }
  }
};
// update single User controller
const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const newData = req.body; // Extract 'id' directly from req.params

    // update single user in the database using the extracted 'id'
    const result = await userServices.updateUserFromDB(userId, newData);
    // if successful, respond with a success message and the created user data
    res.status(200).json({
      success: true,
      message: 'User update Successfully',
      data: result,
    });
  } catch (error: unknown) {
    //if an error occurs during user creation process
    if (error instanceof Error) {
      // log the error for debugging purposes
      // console.log(error);

      // Respond with a detailed error message indicating user not found
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
        message: 'User not found',
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
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
};
