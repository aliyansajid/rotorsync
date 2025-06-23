const express = require("express");
const router = express.Router();
const bmsController = require("../controllers/bmsController");
const authMiddleware = require("../middleware/authMiddleware");

// Protect all routes with authentication middleware
router.get("/", authMiddleware, bmsController.getAllBms);
router.get("/:id", authMiddleware, bmsController.getBmsById);
router.post("/", authMiddleware, bmsController.createBms);
router.put("/:id", authMiddleware, bmsController.updateBmsById);
router.delete("/:id", authMiddleware, bmsController.deleteBmsById);

module.exports = router;
