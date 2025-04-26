import { User } from 'firebase/auth';
export type UserContextType = {
  currentUser: User | null;
};
export type UserProviderProps = {
  children: React.ReactNode;
};
