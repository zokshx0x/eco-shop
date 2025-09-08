import React from 'react';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';

// Import product images
import greenShirtImage from '@/assets/green-shirt.jpg';
import handbagImage from '@/assets/handbag.jpg';
import sportsShoeImage from '@/assets/sports-shoe.jpg';
import smartWatchImage from '@/assets/smart-watch.jpg';

// Mock products data
const products = [
  {
    id: '1',
    name: 'قميص أخضر قطني',
    price: 250,
    image: greenShirtImage,
  },
  {
    id: '2',
    name: 'حقيبة يد أنيقة',
    price: 450,
    image: handbagImage,
  },
  {
    id: '3',
    name: 'حذاء رياضي عصري',
    price: 380,
    image: sportsShoeImage,
  },
  {
    id: '4',
    name: 'ساعة ذكية فضية',
    price: 620,
    image: smartWatchImage,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/30">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            مرحباً بك في إيكو شوب
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعتنا المختارة بعناية من المنتجات الصديقة للبيئة بأفضل الأسعار
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            إيكو شوب - متجر إلكتروني صديق للبيئة لأغراض العرض والتطوير
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;