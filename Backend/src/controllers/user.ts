import { NextFunction, Request, Response } from "express";
import { userModel } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";
// @desc create new user
//@route POST /api/v1/user/new
//@access public
export const newUser = async (
  req: Request<{}, {}, NewUserRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, photo, gender, _id, dob } = req.body;
    const user = await userModel.create({
      name,
      email,
      photo,
      gender,
      _id,
      dob,
    });
    return res.status(200).json({
      success: true,
      message: `Welcome,${user.name}`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
};
