import React from 'react';
import { User, Gift, Home, Settings, Dumbbell, CheckCircle, Instagram } from 'lucide-react';

const ServicesSection = () => {
  const servicesData = [
    {
      id: 1,
      title: "Kişiselleştirilmiş 3D Baskı",
      desc: "Hayalinizdeki özel tasarımları gerçeğe dönüştürüyoruz. İsminizden özel figürlere, benzersiz aksesuarlardan kişiye özel hediyelere kadar her türlü özelleştirilmiş 3D baskı çözümü sunuyoruz.",
      IconComp: User,
      features: ["Özel Tasarım", "İsim & Logo Baskı", "Kişiye Özel Hediyeler"]
    },
    {
      id: 2,
      title: "Hediyelik 3D Ürünler",
      desc: "Sevdiklerinize unutulmaz hediyeler sunuyoruz. Modern tasarım anlayışı ile hazırlanmış figürler, dekoratif objeler ve özel günler için tasarlanmış benzersiz ürünler.",
      IconComp: Gift,
      features: ["Hazır Koleksiyonlar", "Özel Günler İçin", "Trend Tasarımlar"]
    },
    {
      id: 3,
      title: "Ev Dekorasyon",
      desc: "Yaşam alanlarınıza modern bir dokunuş katın. Minimalist vazolardan geometrik duvar süslerine, fonksiyonel organizerlerden sanatsal heykellere kadar geniş ürün yelpazemiz.",
      IconComp: Home,
      features: ["Modern Tasarımlar", "Fonksiyonel Çözümler", "Dayanıklı Üretim"]
    },
    {
      id: 4,
      title: "Endüstriyel Prototipleme",
      desc: "Ürün geliştirme sürecinizi hızlandırıyoruz. Fikirden fiziksel prototiplerinize hızlı ve ekonomik çözümler sunuyoruz. Bambu Studio dosyalarınızı optimize ediyoruz.",
      IconComp: Settings,
      features: ["Hızlı Prototipleme", "Bambu Studio Optimizasyonu", "Teknik Danışmanlık"]
    },
    {
      id: 5,
      title: "Fitness & Çocuk Aksesuarları",
      desc: "Spor ve eğlence için özel çözümler. Ergonomik fitness ekipmanları, ağırlık plakası tutucuları, özel spor aksesuarları ve güvenli eğitici oyuncaklar.",
      IconComp: Dumbbell,
      features: ["Ergonomik Tasarım", "Güvenli Malzemeler", "Özelleştirilebilir"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #00ff00 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-aspect-green text-sm font-bold tracking-widest uppercase mb-4 block">Hizmetlerimiz</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Kapsamlı <span className="text-aspect-green">3D Çözümler</span>
          </h2>
          <div className="h-1 w-24 bg-aspect-green mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Kişiselleştirilmiş ürünlerden endüstriyel prototiplemeye kadar her ihtiyacınız için profesyonel çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-white/5 border border-white/10 hover:border-aspect-green/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-aspect-green/20 hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-aspect-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-aspect-green/20 transition-colors">
                <service.IconComp className="w-7 h-7 text-aspect-green" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-aspect-green transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                {service.desc}
              </p>
              <ul className="space-y-2">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-aspect-green mr-2 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-aspect-green/10 to-aspect-green/5 border border-aspect-green/30 backdrop-blur-md rounded-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-aspect-green/10 rounded-full blur-3xl"></div>
          <div className="p-8 sm:p-12 relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Özel Projeniz İçin Teklif Alın
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Ekibimiz, projenizi en uygun maliyetle ve en yüksek kalitede hayata geçirmek için size özel çözüm önerileri sunar.
            </p>
            <button 
              className="bg-aspect-green hover:bg-aspect-green-dark text-black font-bold px-8 py-4 rounded-lg shadow-lg shadow-aspect-green/30 hover:shadow-aspect-green/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              onClick={() => window.open('https://www.instagram.com/3daspectshop/', '_blank')}
            >
              İletişime Geçin
              <Instagram className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
