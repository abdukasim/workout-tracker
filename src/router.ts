import { Router } from "express";

const router = Router();

// workout routes
router.get("/workout", () => {});
router.get("/workout/:id", () => {});
router.post("/workout", () => {});
router.put("/workout/:id", () => {});
router.delete("/workout/:id", () => {});

// exercise routes
router.get("/exercise", () => {});
router.get("/exercise/:id", () => {});
router.post("/exercise", () => {});
router.put("/exercise/:id", () => {});
router.delete("/exercise/:id", () => {});

// router.get("/workout", () => {});
// router.get("/workout/:id", () => {});
// router.post("/workout", () => {});
// router.put("/workout/:id", () => {});
// router.delete("/workout/:id", () => {});

// router.get("/workout", () => {});
// router.get("/workout/:id", () => {});
// router.post("/workout", () => {});
// router.put("/workout/:id", () => {});
// router.delete("/workout/:id", () => {});

export default router;
