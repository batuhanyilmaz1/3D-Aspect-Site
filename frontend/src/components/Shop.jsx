import React from 'react';
import { ShoppingBag, ExternalLink, Sparkles, Instagram } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { featuredProducts } from '@/data/mockData';

const Shop = () => {
  const handleShopClick = () => {
    // This will be replaced with actual Shopier URL
    window.open('https://shopier.com', '_blank');
  };

  return (
    <section id="shop" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #00ff00 25%, transparent 25%, transparent 75%, #00ff00 75%, #00ff00), linear-gradient(45deg, #00ff00 25%, transparent 25%, transparent 75%, #00ff00 75%, #00ff00)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-aspect-green/10 border border-aspect-green/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-aspect-green" />
            <span className="text-aspect-green text-sm font-semibold tracking-wider">Öne Çıkan Ürünler</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-aspect-green">Mağazamızı</span> Keşfedin
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hazır koleksiyonlarımıza göz atın veya özel tasarım talebinizi iletin
          </p>
        </div>

        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="bg-white/5 border-white/10 hover:border-aspect-green/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-aspect-green/20 overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-aspect-green text-black px-3 py-1 rounded-full text-sm font-bold">
                  {product.price}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white group-hover:text-aspect-green transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {product.category}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  className="w-full bg-aspect-green/10 hover:bg-aspect-green text-aspect-green hover:text-black border border-aspect-green/30 font-semibold transition-all duration-300"
                  onClick={handleShopClick}
                >
                  Ürünü İncele
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-aspect-green/20 via-aspect-green/10 to-aspect-green/20 border-aspect-green/50 backdrop-blur-md overflow-hidden relative">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #00ff00 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            <CardContent className="p-8 sm:p-12 relative z-10">
              <div className="text-center">
                <ShoppingBag className="w-16 h-16 text-aspect-green mx-auto mb-6" />
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Tüm Koleksiyonu Görüntüleyin
                </h3>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                  Kişiselleştirilmiş hediyelerden ev dekorasyonuna, endüstriyel prototiplerden 
                  fitness aksesuarlarına kadar geniş ürün yelpazemizi Shopier mağazamızda keşfedin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-aspect-green hover:bg-aspect-green-dark text-black font-bold px-8 py-6 text-lg rounded-lg shadow-2xl shadow-aspect-green/30 hover:shadow-aspect-green/50 transition-all duration-300 hover:scale-105 group"
                    onClick={handleShopClick}
                  >
                    Mağazaya Git
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-aspect-green text-aspect-green hover:bg-aspect-green hover:text-black font-bold px-8 py-6 text-lg rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    onClick={() => window.open('https://www.instagram.com/3daspectshop/', '_blank')}
                  >
                    Özel Tasarım Talebi
                    <Instagram className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: "150+", label: "Tamamlanan Proje" },
            { value: "110+", label: "Mutlu Müşteri" },
            { value: "24 Saat", label: "Aktiflik" },
            { value: "%99", label: "Memnuniyet" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-aspect-green mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
