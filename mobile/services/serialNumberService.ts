import { authService } from "./authService";

const API_BASE_URL = "http://192.168.100.17:3000";

export interface SerialNumber {
  id: string;
  assetType: string;
  name: string;
  serialNumber: string;
  createdAt: string;
  updatedAt: string;
}

export interface SerialNumberResponse {
  success: boolean;
  message?: string;
  error?: string;
  data: SerialNumber[];
}

export interface UserSerialUpdateResponse {
  success: boolean;
  message?: string;
  error?: string;
}

class SerialNumberService {
  async getSerialNumbers(): Promise<SerialNumberResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/serial-numbers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: Partial<SerialNumberResponse> = await response.json();

      return {
        success: result.success ?? false,
        message: result.message,
        error: result.error,
        data: Array.isArray(result.data) ? result.data : [],
      };
    } catch (error) {
      console.error("Error fetching serial numbers:", error);
      return {
        success: false,
        error: "Network error. Please check your connection and try again.",
        data: [],
      };
    }
  }

  async updateUserSerialNumber(
    serialNumberId: string
  ): Promise<UserSerialUpdateResponse> {
    try {
      const user = authService.getCurrentUser();

      if (!user) {
        return {
          success: false,
          error: "Please log in to continue.",
        };
      }

      const response = await fetch(`${API_BASE_URL}/api/serial-numbers`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serialNumberId,
          userId: user.id,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: UserSerialUpdateResponse = await response.json();

      return {
        success: result.success ?? false,
        message: result.message || "Serial number updated successfully",
        error: result.error,
      };
    } catch (error) {
      console.error("Error updating user serial number:", error);
      return {
        success: false,
        error: "Network error. Please check your connection and try again.",
      };
    }
  }
}

export const serialNumberService = new SerialNumberService();
