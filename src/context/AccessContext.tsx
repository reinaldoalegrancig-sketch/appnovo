import { createContext, useContext, type ReactNode } from 'react';
import { useAuth } from './AuthContext';

interface AccessContextType {
  isUnlocked: (productId: string) => boolean;
}

const AccessContext = createContext<AccessContextType | undefined>(undefined);

export const AccessProvider = ({ children }: { children: ReactNode }) => {
  const { isAdmin, user } = useAuth();

  const isUnlocked = (productId: string) => {
    if (isAdmin) return true;
    const unlockedProducts: string[] = user?.user_metadata?.unlocked_products ?? [];
    return unlockedProducts.includes(productId);
  };

  return (
    <AccessContext.Provider value={{ isUnlocked }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => {
  const context = useContext(AccessContext);
  if (context === undefined) {
    throw new Error('useAccess must be used within an AccessProvider');
  }
  return context;
};
