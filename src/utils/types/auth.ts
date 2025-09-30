export interface User {
    id: string;
    email: string;
    name: string;
    role: 'user' | 'admin';
    createdAt: Date;
  }
  
  export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
  }

export interface AuthContextValue extends AuthState {
  setUser: (user: User | null) => void;
  setAuthenticated: (authenticated: boolean) => void;
}
  
  export interface LoginFormData {
    email: string;
    password: string;
  }
  
  export interface SignupFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface AuthResponse {
    success: boolean;
    message: string;
    user?: User;
    errors?: Record<string, string>;
  }