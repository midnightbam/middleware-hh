import express from "express";
import validateAssignment from "../middlewares/validateAssignment.mjs";

const router = express.Router();

router.post("/assignments", validateAssignment, (req, res) => {
  return res.status(201).json({ message: "Create assignment successfully" });
});

export default router;

