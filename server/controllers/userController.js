const prisma = require("../lib/prisma");
const bcrypt = require("bcrypt");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      });
      res.status(200).json({
        users, // Return array of users
        message: "Users fetched successfully.",
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
        },
        message: "User fetched successfully.",
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateUserById: async (req, res) => {
    const { id } = req.params;
    const { name, email, password, role } = req.body;
    try {
      const existingUser = await prisma.user.findFirst({
        where: { email, id: { not: id } },
      });
      if (existingUser) {
        return res.status(400).json({ error: "Email already in use" });
      }
      const updateData = { name, email, role };
      if (password) {
        updateData.password = await bcrypt.hash(password, 10);
      }
      const user = await prisma.user.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          createdAt: true,
        },
      });
      res.status(200).json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
        },
        message: "User updated successfully.",
      });
    } catch (error) {
      console.error("Error updating user:", error);
      if (error.code === "P2025") {
        // Prisma's RecordNotFound error
        return res.status(404).json({ error: "User not found" });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteUserById: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.user.delete({
        where: { id },
      });
      res.status(200).json({
        message: "User deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      if (error.code === "P2025") {
        // Prisma's RecordNotFound error
        return res.status(404).json({ error: "User not found" });
      }
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = userController;
