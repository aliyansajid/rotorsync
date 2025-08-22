"use server";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
import { loginSchema, registerSchema, updateProfileSchema } from "@/schema";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = "30d"; // 1 month

// Helper function to generate JWT token
function generateToken(userId: string, email: string, role: string) {
  return jwt.sign({ userId, email, role }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

// Helper function to verify JWT token
export async function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as {
      userId: string;
      email: string;
      role: string;
    };
  } catch (error) {
    return null;
  }
}

// Register new user
export async function registerUser(data: any) {
  try {
    // Validate input data
    const validatedData = registerSchema.parse(data);

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return {
        success: false,
        error: "An account with this email already exists",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
        role: validatedData.role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
        createdAt: true,
      },
    });

    // Generate JWT token
    const token = generateToken(user.id, user.email, user.role);

    return {
      success: true,
      message: "Account created successfully",
      data: {
        user,
        token,
      },
    };
  } catch (error) {
    console.error("Error registering user:", error);

    return {
      success: false,
      error: "Unable to create account. Please try again.",
    };
  }
}

// Login user
export async function loginUser(data: any) {
  try {
    // Validate input data
    const validatedData = loginSchema.parse(data);

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: validatedData.email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        role: true,
        image: true,
        createdAt: true,
      },
    });

    if (!user) {
      return {
        success: false,
        error: "Invalid email or password",
      };
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(
      validatedData.password,
      user.password
    );

    if (!isPasswordValid) {
      return {
        success: false,
        error: "Invalid email or password",
      };
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email, user.role);

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    return {
      success: true,
      message: "Login successful",
      data: {
        user: userWithoutPassword,
        token,
      },
    };
  } catch (error) {
    console.error("Error logging in user:", error);

    return {
      success: false,
      error: "Unable to log in. Please try again.",
    };
  }
}

// Update user profile
export async function updateUserProfile(token: string, data: any) {
  try {
    // Verify token
    const decoded = await verifyToken(token);

    if (!decoded) {
      return {
        success: false,
        error: "Session expired. Please log in again.",
      };
    }

    // Validate update data
    const validatedData = updateProfileSchema.parse(data);

    // Check if email is being changed and already exists
    if (validatedData.email && validatedData.email !== decoded.email) {
      const existingUser = await prisma.user.findUnique({
        where: {
          email: validatedData.email,
          NOT: { id: decoded.userId },
        },
      });

      if (existingUser) {
        return {
          success: false,
          error: "This email is already taken",
        };
      }
    }

    // Prepare update data
    const updateData: any = {};

    if (validatedData.name) {
      updateData.name = validatedData.name;
    }

    if (validatedData.email) {
      updateData.email = validatedData.email;
    }

    if (validatedData.image !== undefined) {
      updateData.image = validatedData.image || null;
    }

    // Handle password update
    if (validatedData.newPassword) {
      const hashedPassword = await bcrypt.hash(validatedData.newPassword, 12);
      updateData.password = hashedPassword;
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: decoded.userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        image: true,
        createdAt: true,
      },
    });

    // Generate new token if email or password changed
    let newToken = null;
    if (validatedData.email || validatedData.newPassword) {
      newToken = generateToken(
        updatedUser.id,
        updatedUser.email,
        updatedUser.role
      );
    }

    return {
      success: true,
      message: "Profile updated successfully",
      data: {
        user: updatedUser,
        ...(newToken && { token: newToken }),
      },
    };
  } catch (error) {
    console.error("Error updating user profile:", error);

    return {
      success: false,
      error: "Unable to update profile. Please try again.",
    };
  }
}
