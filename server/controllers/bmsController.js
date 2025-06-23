const prisma = require("../lib/prisma");

const bmsController = {
  getAllBms: async (req, res) => {
    try {
      const bms = await prisma.bms.findMany({
        select: {
          id: true,
          name: true,
          deviceName: true,
          mqttTopic: true,
          trailer: {
            select: {
              id: true,
              name: true,
            },
          },
          threshold: true,
          createdAt: true,
        },
      });
      res.status(200).json({
        bms,
        message: "BMS entries fetched successfully.",
      });
    } catch (error) {
      console.error("Error fetching BMS entries:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getBmsById: async (req, res) => {
    const { id } = req.params;
    try {
      const bms = await prisma.bms.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          deviceName: true,
          mqttTopic: true,
          trailer: {
            select: {
              id: true,
              name: true,
            },
          },
          threshold: true,
          createdAt: true,
        },
      });
      if (!bms) {
        return res.status(404).json({ error: "BMS not found" });
      }
      res.status(200).json({
        bms,
        message: "BMS fetched successfully.",
      });
    } catch (error) {
      console.error("Error fetching BMS:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createBms: async (req, res) => {
    const { name, deviceName, mqttTopic, trailerId, threshold } = req.body;
    try {
      const existingBms = await prisma.bms.findUnique({
        where: { deviceName },
      });
      if (existingBms) {
        return res.status(400).json({ error: "Device name already in use" });
      }
      const trailer = await prisma.trailer.findUnique({
        where: { id: trailerId },
      });
      if (!trailer) {
        return res.status(400).json({ error: "Invalid trailer ID" });
      }
      const bms = await prisma.bms.create({
        data: {
          name,
          deviceName,
          mqttTopic,
          trailerId,
          threshold,
        },
        select: {
          id: true,
          name: true,
          deviceName: true,
          mqttTopic: true,
          trailer: {
            select: {
              id: true,
              name: true,
            },
          },
          threshold: true,
          createdAt: true,
        },
      });
      res.status(201).json({
        bms,
        message: "BMS created successfully.",
      });
    } catch (error) {
      console.error("Error creating BMS:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateBmsById: async (req, res) => {
    const { id } = req.params;
    const { name, deviceName, mqttTopic, trailerId, threshold } = req.body;
    try {
      const existingBms = await prisma.bms.findFirst({
        where: { deviceName, id: { not: id } },
      });
      if (existingBms) {
        return res.status(400).json({ error: "Device name already in use" });
      }
      const trailer = await prisma.trailer.findUnique({
        where: { id: trailerId },
      });
      if (!trailer) {
        return res.status(400).json({ error: "Invalid trailer ID" });
      }
      const bms = await prisma.bms.update({
        where: { id },
        data: { name, deviceName, mqttTopic, trailerId, threshold },
        select: {
          id: true,
          name: true,
          deviceName: true,
          mqttTopic: true,
          trailer: {
            select: {
              id: true,
              name: true,
            },
          },
          threshold: true,
          createdAt: true,
        },
      });
      res.status(200).json({
        bms,
        message: "BMS updated successfully.",
      });
    } catch (error) {
      console.error("Error updating BMS:", error);
      if (error.code === "P2025") {
        return res.status(404).json({ error: "BMS not found" });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteBmsById: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.bms.delete({
        where: { id },
      });
      res.status(200).json({
        message: "BMS deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting BMS:", error);
      if (error.code === "P2025") {
        return res.status(404).json({ error: "BMS not found" });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = bmsController;
