import express from "express";
import {
  createUser,
  getUsersById,
  getUsers,
  deleteUser,
  patchUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUsersById);

router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);
export default router;
