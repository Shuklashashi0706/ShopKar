import { userModel } from "../models/user.js";
// @desc create new user
//@route POST /api/v1/user/new
//@access public
export const newUser = async (req, res, next) => {
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
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error,
        });
    }
};
