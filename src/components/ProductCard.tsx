import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "تم إضافة المنتج",
      description: `تم إضافة ${product.name} إلى السلة بنجاح`,
    });
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-card border-border hover:border-primary/20">
      <CardContent className="p-6">
        <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-2">
              {product.name}
            </h3>
            <p className="text-2xl font-bold text-primary">
              {product.price} ج.م
            </p>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-primary to-success hover:from-primary/90 hover:to-success/90 text-white font-medium shadow-sm transition-all"
            size="lg"
          >
            إضافة إلى السلة
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};