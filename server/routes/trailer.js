const express = require("express");
const router = express.Router();
const trailerController = require("../controllers/trailerController");
const authMiddleware = require("../middleware/authMiddleware");

// Protect all routes with authentication middleware
router.get("/", authMiddleware, trailerController.getAllTrailers);
router.get("/:id", authMiddleware, trailerController.getTrailerById);
router.post("/", authMiddleware, trailerController.createTrailer);
router.put("/:id", authMiddleware, trailerController.updateTrailerById);
router.delete("/:id", authMiddleware, trailerController.deleteTrailerById);

module.exports = router;
