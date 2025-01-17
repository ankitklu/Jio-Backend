const express = require("express");
const app = express();
const userRouter = express.Router();
app.use("/api/user", userRouter);

const {
  createUser,
  getAllUser,
  getUserById,
  deleteUser,
} = require("../controllers/UserController");

const {
  isAdminMiddleware,
  protectRouteMiddleware,
}= require ("../controllers/AuthController");




userRouter
  .post("/", createUser)
  .get("/", protectRouteMiddleware, isAdminMiddleware, getAllUser)
  .get("/:id", getUserById)
  .delete("/:id", protectRouteMiddleware, deleteUser);

module.exports = userRouter;
