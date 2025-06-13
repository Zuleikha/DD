import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';


import { 
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../config/firebase';

interface AuthContextType {
  currentUser: User | null;
  signup: (email: string, password: string, displayName: string) => Promise<any>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function signup(email: string, password: string, displayName: string) {
    try {
      // Create the user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Try to update the profile, but don't let it block the signup process
      try {
        await updateProfile(userCredential.user, { displayName });
        console.log('Profile updated successfully');
      } catch (profileError) {
        // Log the error but don't throw it - the account was still created successfully
        console.warn('Profile update failed, but account was created:', profileError);
        // The user can update their display name later if needed
      }
      
      return userCredential;
    } catch (error) {
      // Re-throw the original signup error
      console.error('Signup failed:', error);
      throw error;
    }
  }

  async function login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  }

  async function resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error('Password reset failed:', error);
      throw error;
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

