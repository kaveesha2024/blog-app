import UserModel from '../../models/userModel/userModel.js';
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const loginUser = async (req, res) => {
    const { email, password: loginPassword } = req.body;
    UserModel.findOne({ email }).then(data => {
        if (data != null) {
            const {password, salt} = data;
            const givePasswordWithSalt = loginPassword + salt;
            const isPasswordCorrect = bcrypt.compareSync(givePasswordWithSalt, password);
            if (isPasswordCorrect) {
                const token = jwt.sign({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    role: data.role,
                    isBlocked: data.isBlocked,
                    createdAt: data.createdAt,
                }, process.env.JWT_SECRET);
                res.json({
                    message: 'Logged in',
                    token,
                })
            } else {
                return res.status(401).json({
                    message: "password incorrect",
                });
            }
        } else {
            res.json({
                message: "Email is correct",
            })
        }
    } ).catch(() => {res.json({
        message: 'Enter you email and password',
    })});
};

export default loginUser;