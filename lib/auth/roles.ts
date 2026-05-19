export type UserRole = "admin" | "editor" | "user";
export const canManageContent = (role: UserRole) => role === "admin" || role === "editor";
