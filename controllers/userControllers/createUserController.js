import UserModel from "../../models/userModel/userModel.js";
import bcrypt from "bcrypt";
const createUser = async (req, res) => {
  const { firstName, lastName, email, password, salt } = req.body;
  const saltedPassword = password + salt;
  const hashedPassword = await bcrypt.hashSync(saltedPassword, 10);

  const user = new UserModel({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    salt,
  });

  user
    .save()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(400).json({
          email: err.errorResponse.keyValue.email,
          message: "email already exists",
      });
    });
};
export default createUser;