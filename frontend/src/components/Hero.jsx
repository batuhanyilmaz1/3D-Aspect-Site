import React from 'react';
import { ArrowRight, Layers, Cpu, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582879304171-8041c73bedbd"
          alt="3D Printer Technology"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90"></div>
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-aspect-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-aspect-green/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-aspect-green/10 border border-aspect-green/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-aspect-green" />
            <span className="text-aspect-green text-sm font-semibold tracking-wider">Pikselden Fiziksele</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-aspect-green">3D Tasarım</span> ve<br />
            Üretim Teknolojileri
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Yazılım disiplini ile 3D baskı teknolojisini birleştirerek, 
            <span className="text-aspect-green font-semibold"> hayalinizdeki baskıları </span>
            yüksek hassasiyetli çözümlerle fiziksel dünyaya taşıyoruz.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              className="bg-aspect-green hover:bg-aspect-green-dark text-black font-bold px-8 py-6 text-lg rounded-lg shadow-2xl shadow-aspect-green/30 hover:shadow-aspect-green/50 transition-all duration-300 hover:scale-105 group"
              onClick={() => handleScroll('#services')}
            >
              Hizmetlerimizi Keşfedin
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-aspect-green text-aspect-green hover:bg-aspect-green hover:text-black font-bold px-8 py-6 text-lg rounded-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => handleScroll('#about')}
            >
              Hakkımızda
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-aspect-green/30 transition-all duration-300 group">
              <Layers className="w-8 h-8 text-aspect-green mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">Hassas Üretim</h3>
              <p className="text-gray-400 text-sm">Mikron seviyesinde hassasiyet</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-aspect-green/30 transition-all duration-300 group">
              <Cpu className="w-8 h-8 text-aspect-green mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">Yazılım Desteği</h3>
              <p className="text-gray-400 text-sm">Bambu Studio optimizasyonu ve teknik danışmanlık</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-aspect-green/30 transition-all duration-300 group">
              <Zap className="w-8 h-8 text-aspect-green mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-semibold mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-400 text-sm">24 saat içinde prototip üretimi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-aspect-green rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-aspect-green rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
