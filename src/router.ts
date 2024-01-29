import { Router } from "express";
import {
  createExercise,
  getAllExercises,
  getExercise,
} from "./handlers/exercise";
import { createWorkout } from "./handlers/workout";

const router = Router();

// workout routes
router.post("/workout", createWorkout);
router.get("/workout/:id", () => {});
router.post("/workout", () => {});
router.put("/workout/:id", () => {});
router.delete("/workout/:id", () => {});

// exercise routes
router.get("/exercise", getAllExercises);
router.get("/exercise/:id", getExercise);
router.post("/exercise", createExercise);
// router.put("/exercise/:id", () => {});
// router.delete("/exercise/:id", () => {});

// router.get("/workout", () => {});
// router.get("/workout/:id", () => {});
// router.put("/workout/:id", () => {});
// router.delete("/workout/:id", () => {});

// router.get("/workout", () => {});
// router.get("/workout/:id", () => {});
// router.post("/workout", () => {});
// router.put("/workout/:id", () => {});
// router.delete("/workout/:id", () => {});

export default router;
