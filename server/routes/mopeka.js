const express = require("express");
const router = express.Router();
const mopekaController = require("../controllers/mopekaController");
const authMiddleware = require("../middleware/authMiddleware");

// Protect all routes with authentication middleware
router.get("/", authMiddleware, mopekaController.getAllMopeka);
router.get("/:id", authMiddleware, mopekaController.getMopekaById);
router.post("/", authMiddleware, mopekaController.createMopeka);
router.put("/:id", authMiddleware, mopekaController.updateMopekaById);
router.delete("/:id", authMiddleware, mopekaController.deleteMopekaById);

module.exports = router;
