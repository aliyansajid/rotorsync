import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = "http://192.168.100.17:3000";
const TOKEN_KEY = "rotorsync_auth_token";
const USER_KEY = "rotorsync_user_data";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "PILOT" | "CREW";
  image?: string | null;
  createdAt: string;
  serialNumber?: {
    id: string;
    assetType: string;
    name: string;
    serialNumber: string;
  } | null;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    user: User;
    token: string;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}

class AuthService {
  private user: User | null = null;
  private token: string | null = null;
  private isInitialized: boolean = false;

  // Initialize auth service (call this on app startup)
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Load stored token and user data
      const [storedToken, storedUser] = await Promise.all([
        AsyncStorage.getItem(TOKEN_KEY),
        AsyncStorage.getItem(USER_KEY),
      ]);

      if (storedToken && storedUser) {
        this.token = storedToken;
        this.user = JSON.parse(storedUser);

        // Verify token is still valid
        const isValid = await this.verifyToken();
        if (!isValid) {
          await this.clearAuthData();
        }
      }

      this.isInitialized = true;
    } catch (error) {
      console.error("Error initializing auth service:", error);
      await this.clearAuthData();
      this.isInitialized = true;
    }
  }

  // Register new user
  async register(data: {
    name: string;
    email: string;
    password: string;
    role: "PILOT" | "CREW";
  }): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result: AuthResponse = await response.json();

      if (result.success && result.data) {
        await this.storeAuthData(result.data.token, result.data.user);
      }

      return result;
    } catch (error) {
      console.error("Registration error:", error);
      return {
        success: false,
        error: "Network error. Please check your connection and try again.",
      };
    }
  }

  // Login user
  async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result: AuthResponse = await response.json();

      if (result.success && result.data) {
        await this.storeAuthData(result.data.token, result.data.user);
      }

      return result;
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error: "Network error. Please check your connection and try again.",
      };
    }
  }

  // Logout user
  async logout(): Promise<void> {
    await this.clearAuthData();
  }

  // Update user profile
  async updateProfile(data: {
    name?: string;
    email?: string;
    image?: string;
    newPassword?: string;
  }): Promise<ApiResponse<{ user: User; token?: string }>> {
    try {
      if (!this.token) {
        return {
          success: false,
          error: "Session expired. Please log in again.",
        };
      }

      const response = await fetch(`${API_BASE_URL}/api/auth/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success && result.data) {
        // Update stored user data
        this.user = result.data.user;
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(this.user));

        // Update token if provided (when email or password changes)
        if (result.data.token) {
          this.token = result.data.token;
          await AsyncStorage.setItem(TOKEN_KEY, this.token as string);
        }
      }

      return result;
    } catch (error) {
      console.error("Update profile error:", error);
      return {
        success: false,
        error: "Network error. Please check your connection and try again.",
      };
    }
  }

  // Verify if current token is valid
  async verifyToken(): Promise<boolean> {
    try {
      if (!this.token) return false;

      const response = await fetch(`${API_BASE_URL}/api/auth/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      return response.ok;
    } catch (error) {
      console.error("Token verification error:", error);
      return false;
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!(this.token && this.user);
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.user;
  }

  // Get current token
  getToken(): string | null {
    return this.token;
  }

  // Get authorization header
  getAuthHeader(): { Authorization: string } | {} {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {};
  }

  // Check if user has specific role
  hasRole(role: "ADMIN" | "PILOT" | "CREW"): boolean {
    return this.user?.role === role;
  }

  // Store authentication data
  private async storeAuthData(token: string, user: User): Promise<void> {
    try {
      this.token = token;
      this.user = user;

      await Promise.all([
        AsyncStorage.setItem(TOKEN_KEY, token),
        AsyncStorage.setItem(USER_KEY, JSON.stringify(user)),
      ]);
    } catch (error) {
      console.error("Error storing auth data:", error);
      throw error;
    }
  }

  // Clear authentication data
  private async clearAuthData(): Promise<void> {
    try {
      this.token = null;
      this.user = null;

      await Promise.all([
        AsyncStorage.removeItem(TOKEN_KEY),
        AsyncStorage.removeItem(USER_KEY),
      ]);
    } catch (error) {
      console.error("Error clearing auth data:", error);
    }
  }
}

export const authService = new AuthService();
