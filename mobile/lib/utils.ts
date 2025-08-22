import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Get user initials from full name
 */
export const getUserInitials = (name: string): string => {
  if (!name || !name.trim()) return "U";

  const names = name.trim().split(" ");
  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }

  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
};

/**
 * Get greeting based on current time
 */
export const getGreeting = (): string => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning,";
  if (hour < 17) return "Good afternoon,";
  return "Good evening,";
};

/**
 * Format role for display
 */
export const formatRole = (role: string): string => {
  switch (role) {
    case "ADMIN":
      return "Admin";
    case "PILOT":
      return "Pilot";
    case "CREW":
      return "Crew Member";
    default:
      return role;
  }
};

/**
 * Format date to "Month Year" format
 */
export const formatMemberSince = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

/**
 * Format date to readable format
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
