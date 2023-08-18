import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import bcript from 'bcrypt';

export const userDataController = asyncHandler(async function (req, res) {
  res.send({ message: "I'm form api/v1/user route!" });
});

/**
 *
 *
 * @param ---> Get all users data.
 * @route ---> api/v1/user
 * @method --> GET
 * @access public
 *
 */
export const getAllUsers = asyncHandler(async function (req, res) {
  const users = await User.find();

  return users.length
    ? res.status(200).json(users)
    : res.send({ message: "No user's data founded!" });
});

/**
 *
 *
 * @param ---> Get a user's data.
 * @route ---> api/v1/user/:id
 * @method --> GET
 * @access public
 *
 */
export const getSingleUser = asyncHandler(async function (req, res) {
  const { id } = req.params;
  const user = await User.findById(id);

  return user
    ? res.status(200).json(user)
    : res.send({ message: 'No user data founded!' });
});

/**
 *
 *
 * @param ---> Delete a user's data.
 * @route ---> api/v1/user/:id
 * @method --> DELETE
 * @access public
 *
 */
export const deleteUser = asyncHandler(async function (req, res) {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  return user
    ? res.status(200).json({ message: "User's data was deleted successfully!" })
    : res.send({ message: 'No user data founded!' });
});

/**
 *
 *
 * @param ---> Update a user's data.
 * @route ---> api/v1/user/:id
 * @method --> PUT/PATCH
 * @access public
 *
 */
export const updateUser = asyncHandler(async function (req, res) {
  const { id } = req.params;
  const { name, email, password, gender } = req.body;

  /* if (!name || !email || !password || !gender) {
    res.status(400).json({
      message: 'Please fill all the fields with correct information, Thanks.',
      name,
      email,
      password,
      gender,
    });

    return;
  } */

  const user = await User.findByIdAndUpdate(
    id,
    {
      name,
      email,
      password,
      gender,
    },
    { new: true }
  );
  // res.status(200).json(user);

  return user
    ? res.status(200).json({
        message: "User's data was updated successfully!",
        body: req.body,
        ...user,
      })
    : res.send({ message: 'No user data founded!' });
});

/**
 *
 *
 * @param ---> Create a new users.
 * @route ---> api/v1/user
 * @method --> POST
 * @access public
 *
 */
export const createUser = asyncHandler(async function (req, res) {
  const { name, email, password, gender } = req.body;

  if (!name || !email || !password || !gender) {
    res.status(400).json({
      message: 'Please fill all the fields with correct information, Thanks.',
    });

    return;
  }

  const hashedPassword = await bcript.hash(password, 10);
  const emailValidation = await User.findOne({ email });

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

    return (
      user &&
      res.status(200).json({
        message: 'User data added successfully!',
      })
    );
  }
});
