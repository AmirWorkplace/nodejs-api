import express from 'express';
import {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  userDataController,
  updateUser,
} from '../controllers/useController.js';
import verifyToken from '../middlewares/verifyToken.js';

const router = express.Router();

router.use(verifyToken);

router.route('/').post(createUser).get(getAllUsers);
router
  .route('/:id')
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser)
  .patch(updateUser);

export default router;
