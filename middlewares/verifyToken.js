import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

export default function (req, res, next) {
  const authorizationHeaderToken = req.headers.authorization;

  if (authorizationHeaderToken) {
    const token = authorizationHeaderToken.split(' ')[1];

    jwt.verify(
      token,
      accessTokenSecret,
      asyncHandler(async function (error, decode) {
        if (error) return res.status(400).json({ message: 'Invalid Token!' });

        const me = await User.findOne({ email: decode.email });
        req.me = me;
        next();
      })
    );

    return;
  } else {
    res.status(400).json({ message: "You're Unauthorized!" });
    return;
  }
}
