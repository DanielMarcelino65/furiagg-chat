'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/services/firebase';
import { User } from 'firebase/auth';
import { UserProviderProps } from './types';

interface UserContextType {
  User: User | null;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [User, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    // Cleanup function to unsubscribe from the listener
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ User }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
