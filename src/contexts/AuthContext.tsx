import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type Role = "admin" | "consumer";

interface User {
  email: string;
  role: Role;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: Role) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string, role: Role) => {
    // Simulate API call
    if (email && password) {
      // For demo purposes, accept any valid email/password
      setUser({
        email,
        role,
        name: email.split("@")[0],
      });
      
      toast.success("Successfully logged in!");
      navigate(role === "admin" ? "/admin" : "/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
    toast.success("Successfully logged out!");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}