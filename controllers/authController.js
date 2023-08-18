import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import bcript from 'bcrypt';
import jwt from 'jsonwebtoken';

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const expiresIn = process.env.ACCESS_TOKEN_EXPIRE_IN;

/**
 *
 *
 * @param ---> REGISTER a user.
 * @route ---> api/v1/register
 * @method --> POST
 * @access private
 *
 */
export const register = asyncHandler(async function (req, res) {
  const { name, email, password, gender } = req.body;

  if (!name || !email || !password || !gender) {
    res.status(400).json({
      message: 'Please fill all the fields with correct information, Thanks.',
    });

    return;
  }

  const hashedPassword = await bcript.hash(password, 10);
  const emailValidation = await User.findOne({ email });

  // validation user's email, if it exist then can't register.
  if (emailValidation) {
    return res.status(400).json({
      message: 'User E-mail already exists!',
    });
  } else {
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      gender,
    });

    // if user data created successfully then he logged in automatically.
    if (user) {
      // create jwt authorization login token
      const accessToken = jwt.sign({ email }, accessTokenSecret, { expiresIn });

      // set login access token into cookie
      res.cookie('accessToken', accessToken);
      res.status(200).json({
        accessToken,
      });

      return;
    } else {
      res.status(300).json({
        message: 'Something went wrong, Please try again!',
      });

      return;
    }
  }
});

/**
 *
 *
 * @param ---> Login a user.
 * @route ---> api/v1/login
 * @method --> POST
 * @access private
 *
 */

export const login = asyncHandler(async function (req, res) {
  const { email, password } = req.body;

  // validation email and password of login user
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required!' });
  } else {
    // find existing user from our db records
    const user = await User.findOne({ email });

    // check the user's availability
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    } else {
      // if user is exist then match his/her password with our db records
      const passwordCheck = await bcript.compare(password, user.password);

      // create jwt authorization login token
      const accessToken = jwt.sign({ email }, accessTokenSecret, { expiresIn });

      // if password matched then go next.
      if (passwordCheck) {
        res.cookie('accessToken', accessToken);

        res.status(200).json({
          accessToken,
        });

        return;
      } else {
        return res.status(300).json({ message: "Password didn't match!" });
      }
    }
  }
});

/**
 *
 *
 * @param ---> LOGOUT a user.
 * @route ---> api/v1/logout
 * @method --> POST
 * @access private
 *
 */

export const logout = asyncHandler(async function (req, res) {
  res.clearCookie('accessToken').json({ message: 'Logout successful!' });
});

// 403721
