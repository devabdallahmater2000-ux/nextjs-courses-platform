'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { AuthContextValue, AuthState, User } from '@/utils/types/auth';

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  setUser: () => {},
  setAuthenticated: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

interface AuthProviderProps {
  children: React.ReactNode;
  initialUser: User | null;
}

export function AuthProvider({ children, initialUser }: AuthProviderProps) {
  const [authState, setAuthState] = useState<AuthState>({
    user: initialUser,
    isAuthenticated: !!initialUser,
    isLoading: false,
  });

  useEffect(() => {
    setAuthState({
      user: initialUser,
      isAuthenticated: !!initialUser,
      isLoading: false,
    });
  }, [initialUser]);

  const contextValue = useMemo<AuthContextValue>(() => ({
    ...authState,
    setUser: (user: User | null) => {
      setAuthState((prev: AuthState) => ({ ...prev, user, isAuthenticated: !!user }));
    },
    setAuthenticated: (authenticated: boolean) => {
      setAuthState((prev: AuthState) => ({ ...prev, isAuthenticated: authenticated }));
    },
  }), [authState]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}