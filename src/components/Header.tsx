import React from 'react';
import { Store } from 'lucide-react';
import { CartSidebar } from './CartSidebar';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-primary to-success rounded-lg">
              <Store className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">إيكو شوب</h1>
              <p className="text-sm text-muted-foreground">متجر إلكتروني صديق للبيئة</p>
            </div>
          </div>
          
          <CartSidebar />
        </div>
      </div>
    </header>
  );
};