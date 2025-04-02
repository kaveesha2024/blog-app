import jwt from "jsonwebtoken";

const tokenChecker = (req, res, next) => {
  if (req.header("Authorization") != null) {
    const tokenString = req.header("Authorization");
    const token = tokenString.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (decoded != null) {
        req.user = decoded;
        next();
      } else {
        res.status(401).json({
          message: "Not authorized",
        });
      }
    });
  } else {
    next();
  }
};
export default tokenChecker;
