import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT; // Replace with your actual secret key

export const verifyToken = (token) => {
  console.log("token provided", token)
  try {
    console.log("token provided", token)
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.log(error)
    return null;
  }
};