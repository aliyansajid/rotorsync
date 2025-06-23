const prisma = require("../lib/prisma");

const trailerController = {
  getAllTrailers: async (req, res) => {
    try {
      const trailers = await prisma.trailer.findMany({
        select: {
          id: true,
          name: true,
          serialNumber: true,
          createdAt: true,
        },
      });
      res.status(200).json({
        trailers,
        message: "Trailers fetched successfully.",
      });
    } catch (error) {
      console.error("Error fetching trailers:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getTrailerById: async (req, res) => {
    const { id } = req.params;
    try {
      const trailer = await prisma.trailer.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          serialNumber: true,
          createdAt: true,
        },
      });
      if (!trailer) {
        return res.status(404).json({ error: "Trailer not found" });
      }
      res.status(200).json({
        trailer,
        message: "Trailer fetched successfully.",
      });
    } catch (error) {
      console.error("Error fetching trailer:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createTrailer: async (req, res) => {
    const { name, serialNumber } = req.body;
    try {
      const existingTrailer = await prisma.trailer.findUnique({
        where: { serialNumber },
      });
      if (existingTrailer) {
        return res.status(400).json({ error: "Serial number already in use" });
      }
      const trailer = await prisma.trailer.create({
        data: { name, serialNumber },
        select: {
          id: true,
          name: true,
          serialNumber: true,
          createdAt: true,
        },
      });
      res.status(201).json({
        trailer,
        message: "Trailer created successfully.",
      });
    } catch (error) {
      console.error("Error creating trailer:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateTrailerById: async (req, res) => {
    const { id } = req.params;
    const { name, serialNumber } = req.body;
    try {
      const existingTrailer = await prisma.trailer.findFirst({
        where: { serialNumber, id: { not: id } },
      });
      if (existingTrailer) {
        return res.status(400).json({ error: "Serial number already in use" });
      }
      const trailer = await prisma.trailer.update({
        where: { id },
        data: { name, serialNumber },
        select: {
          id: true,
          name: true,
          serialNumber: true,
          createdAt: true,
        },
      });
      res.status(200).json({
        trailer,
        message: "Trailer updated successfully.",
      });
    } catch (error) {
      console.error("Error updating trailer:", error);
      if (error.code === "P2025") {
        return res.status(404).json({ error: "Trailer not found" });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteTrailerById: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.trailer.delete({
        where: { id },
      });
      res.status(200).json({
        message: "Trailer deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting trailer:", error);
      if (error.code === "P2025") {
        return res.status(404).json({ error: "Trailer not found" });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = trailerController;
