import express from 'express';
import {
  addToCart,
  getUserCart,
  updateCart,
} from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter
  .route('/')
  .get(authUser, getUserCart)
  .post(authUser, addToCart)
  .patch(authUser, updateCart);

export default cartRouter;
