import jwt from "jsonwebtoken";

const generateToken = (id, businessId) => {
  return jwt.sign({ id, businessId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

export default generateToken;
