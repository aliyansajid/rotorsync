const prisma = require("../lib/prisma");

const mopekaController = {
  getAllMopeka: async (req, res) => {
    try {
      const mopekaSensors = await prisma.mopekaSensor.findMany({
        select: {
          id: true,
          name: true,
          sensorId: true,
          mqttTopic: true,
          trailer: {
            select: {
              id: true,
              name: true,
            },
          },
          threshold: true,
          tankSize: true,
          tankSizeGal: true,
          heightOffset: true,
          medium: true,
          createdAt: true,
        },
      });
      res.status(200).json({
        mopeka: mopekaSensors,
        message: "Mopeka sensors fetched successfully.",
      });
    } catch (error) {
      console.error("Error fetching Mopeka sensors:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getMopekaById: async (req, res) => {
    const { id } = req.params;
    try {
      if (!id) {
        return res.status(400).json({ error: "Mopeka sensor ID is required" });
      }
      const mopekaSensor = await prisma.mopekaSensor.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          sensorId: true,
          mqttTopic: true,
          trailer: {
            select: {
              id: true,
              name: true,
            },
          },
          threshold: true,
          tankSize: true,
          tankSizeGal: true,
          heightOffset: true,
          medium: true,
          createdAt: true,
        },
      });
      if (!mopekaSensor) {
        return res.status(404).json({ error: "Mopeka sensor not found" });
      }
      res.status(200).json({
        mopeka: mopekaSensor,
        message: "Mopeka sensor fetched successfully.",
      });
    } catch (error) {
      console.error("Error fetching Mopeka sensor:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createMopeka: async (req, res) => {
    const {
      name,
      sensorId,
      mqttTopic,
      trailerId,
      threshold,
      tankSize,
      tankSizeGal,
      heightOffset,
      medium,
    } = req.body;
    try {
      // Validate required fields
      if (!name || !sensorId || !mqttTopic || !trailerId || !medium) {
        return res
          .status(400)
          .json({ error: "All required fields must be provided" });
      }
      if (
        threshold == null ||
        tankSize == null ||
        tankSizeGal == null ||
        heightOffset == null
      ) {
        return res
          .status(400)
          .json({ error: "Numeric fields must be provided" });
      }
      if (!Number.isInteger(threshold)) {
        return res.status(400).json({ error: "Threshold must be an integer" });
      }

      // Check for existing sensorId
      const existingMopeka = await prisma.mopekaSensor.findUnique({
        where: { sensorId },
      });
      if (existingMopeka) {
        return res.status(400).json({ error: "Sensor ID already in use" });
      }

      // Validate trailerId
      const trailer = await prisma.trailer.findUnique({
        where: { id: trailerId },
      });
      if (!trailer) {
        return res.status(400).json({ error: "Invalid trailer ID" });
      }

      // Create Mopeka sensor
      const mopekaSensor = await prisma.mopekaSensor.create({
        data: {
          name,
          sensorId,
          mqttTopic,
          trailerId,
          threshold: parseInt(threshold), // Ensure integer
          tankSize: parseFloat(tankSize), // Ensure float
          tankSizeGal: parseFloat(tankSizeGal), // Ensure float
          heightOffset: parseFloat(heightOffset), // Ensure float
          medium,
        },
        select: {
          id: true,
          name: true,
          sensorId: true,
          mqttTopic: true,
          trailer: {
            select: {
              id: true,
              name: true,
            },
          },
          threshold: true,
          tankSize: true,
          tankSizeGal: true,
          heightOffset: true,
          medium: true,
          createdAt: true,
        },
      });

      res.status(201).json({
        mopeka: mopekaSensor,
        message: "Mopeka sensor created successfully.",
      });
    } catch (error) {
      console.error("Error creating Mopeka sensor:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateMopekaById: async (req, res) => {
    const { id } = req.params;
    const {
      name,
      sensorId,
      mqttTopic,
      trailerId,
      threshold,
      tankSize,
      tankSizeGal,
      heightOffset,
      medium,
    } = req.body;
    try {
      if (!name || !sensorId || !mqttTopic || !trailerId || !medium) {
        return res
          .status(400)
          .json({ error: "All required fields must be provided" });
      }
      if (
        threshold == null ||
        tankSize == null ||
        tankSizeGal == null ||
        heightOffset == null
      ) {
        return res
          .status(400)
          .json({ error: "Numeric fields must be provided" });
      }
      if (!Number.isInteger(threshold)) {
        return res.status(400).json({ error: "Threshold must be an integer" });
      }

      const existingMopeka = await prisma.mopekaSensor.findFirst({
        where: { sensorId, id: { not: id } },
      });
      if (existingMopeka) {
        return res.status(400).json({ error: "Sensor ID already in use" });
      }

      const trailer = await prisma.trailer.findUnique({
        where: { id: trailerId },
      });
      if (!trailer) {
        return res.status(400).json({ error: "Invalid trailer ID" });
      }

      const mopekaSensor = await prisma.mopekaSensor.update({
        where: { id },
        data: {
          name,
          sensorId,
          mqttTopic,
          trailerId,
          threshold: parseInt(threshold), // Ensure integer
          tankSize: parseFloat(tankSize), // Ensure float
          tankSizeGal: parseFloat(tankSizeGal), // Ensure float
          heightOffset: parseFloat(heightOffset), // Ensure float
          medium,
        },
        select: {
          id: true,
          name: true,
          sensorId: true,
          mqttTopic: true,
          trailer: {
            select: {
              id: true,
              name: true,
            },
          },
          threshold: true,
          tankSize: true,
          tankSizeGal: true,
          heightOffset: true,
          medium: true,
          createdAt: true,
        },
      });

      res.status(200).json({
        mopeka: mopekaSensor,
        message: "Mopeka sensor updated successfully.",
      });
    } catch (error) {
      console.error("Error updating Mopeka sensor:", error);
      if (error.code === "P2025") {
        return res.status(404).json({ error: "Mopeka sensor not found" });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteMopekaById: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.mopekaSensor.delete({
        where: { id },
      });
      res.status(200).json({
        message: "Mopeka sensor deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting Mopeka sensor:", error);
      if (error.code === "P2025") {
        return res.status(404).json({ error: "Mopeka sensor not found" });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = mopekaController;
