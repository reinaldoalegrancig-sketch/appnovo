import { createContext, useContext, type ReactNode } from 'react';
import { useAuth } from './AuthContext';

interface AccessContextType {
  isUnlocked: (productId: string) => boolean;
  expiresAt: (productId: string) => Date | null | undefined;
  // null = vitalício | Date = expira nessa data | undefined = não tem acesso
}

const AccessContext = createContext<AccessContextType | undefined>(undefined);

export const AccessProvider = ({ children }: { children: ReactNode }) => {
  const { isAdmin, user } = useAuth();

  // Retorna: null = vitalício | Date = expira nessa data | undefined = sem acesso
  const expiresAt = (productId: string): Date | null | undefined => {
    if (isAdmin) return null;
    const unlockedProducts: string[] = user?.user_metadata?.unlocked_products ?? [];
    if (!unlockedProducts.includes(productId)) return undefined;
    const expiry = user?.user_metadata?.product_expiry?.[productId];
    if (!expiry) return null; // sem data = vitalício
    return new Date(expiry);
  };

  const isUnlocked = (productId: string): boolean => {
    if (isAdmin) return true;
    const expiry = expiresAt(productId);
    if (expiry === undefined) return false;  // não tem o produto
    if (expiry === null) return true;         // acesso vitalício
    return expiry > new Date();              // verifica se ainda não expirou
  };

  return (
    <AccessContext.Provider value={{ isUnlocked, expiresAt }}>
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
