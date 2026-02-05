import React from 'react';
import { Code, Layers, Zap, Target, User, Gift, Home, Settings, Dumbbell, CheckCircle, Instagram } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Yazılım Disiplini",
      description: "Ekibimizin profesyonel yaklaşımıyla 3D tasarım süreçlerini optimize ediyoruz."
    },
    {
      icon: Layers,
      title: "Hassas Üretim",
      description: "Mikron seviyesinde hassasiyetle her projeyi mükemmeliyete taşıyoruz."
    },
    {
      icon: Zap,
      title: "Hızlı Teslimat",
      description: "Optimize edilmiş süreçlerimizle projeleri hızla hayata geçiriyoruz."
    },
    {
      icon: Target,
      title: "Müşteri Odaklı",
      description: "Her projede müşteri memnuniyetini ve kaliteyi ön planda tutuyoruz."
    }
  ];

  const services = [
    {
      id: 1,
      title: "Kişiselleştirilmiş 3D Baskı Ürünleri",
      description: "Hayalinizdeki özel tasarımları gerçeğe dönüştürüyoruz. İsminizden özel figürlere, benzersiz aksesuarlardan kişiye özel hediyelere kadar her türlü özelleştirilmiş 3D baskı çözümü sunuyoruz.",
      icon: User,
      features: ["Özel Tasarım", "İsim & Logo Baskı", "Kişiye Özel Hediyeler", "Hızlı Teslimat"]
    },
    {
      id: 2,
      title: "Hediyelik 3D Baskı Ürünleri",
      description: "Sevdiklerinize unutulmaz hediyeler sunuyoruz. Modern tasarım anlayışı ile hazırlanmış figürler, dekoratif objeler ve özel günler için tasarlanmış benzersiz ürünler.",
      icon: Gift,
      features: ["Hazır Koleksiyonlar", "Özel Günler İçin", "Trend Tasarımlar", "Kaliteli Malzeme"]
    },
    {
      id: 3,
      title: "Ev Dekorasyon Ürünleri",
      description: "Yaşam alanlarınıza modern bir dokunuş katın. Minimalist vazolardan geometrik duvar süslerine, fonksiyonel organizerlerden sanatsal heykellere kadar geniş dekorasyon ürünü yelpazemiz.",
      icon: Home,
      features: ["Modern Tasarımlar", "Fonksiyonel Çözümler", "Özel Renkler", "Dayanıklı Üretim"]
    },
    {
      id: 4,
      title: "Endüstriyel 3D Prototipleme",
      description: "Ürün geliştirme sürecinizi hızlandırıyoruz. Fikirden fiziksel prototiplerinize hızlı ve ekonomik çözümler sunuyoruz. Yazılım altyapımız sayesinde Bambu Studio dosyalarınızı optimize ediyoruz.",
      icon: Settings,
      features: ["Hızlı Prototipleme", "Bambu Studio Optimizasyonu", "Hassas Ölçüler", "Teknik Danışmanlık"]
    },
    {
      id: 5,
      title: "Fitness ve Çocuk Aksesuarları",
      description: "Spor ve eğlence için özel çözümler. Ergonomik tasarlanmış fitness ekipmanları, ağırlık plakası tutucuları, özel spor aksesuarları ve çocuklar için güvenli, eğitici oyuncaklar.",
      icon: Dumbbell,
      features: ["Ergonomik Tasarım", "Güvenli Malzemeler", "Dayanıklı Yapı", "Özelleştirilebilir"]
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aspect-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-aspect-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-aspect-green/20">
              <img
                src="https://images.unsplash.com/photo-1612888262725-6b300edf916c"
                alt="Engineering Process"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-aspect-green text-black p-6 rounded-xl shadow-2xl">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-sm font-semibold">Yıllık Deneyim</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="text-aspect-green text-sm font-bold tracking-widest uppercase mb-4 block">Hakkımızda</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Pikselden <span className="text-aspect-green">Fiziksele</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Aspect olarak, profesyonel ekibimizle 3D baskı teknolojisini birleştirerek, 
              dijital tasarımları fiziksel ürünlere dönüştürüyoruz.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Ekibimiz, süreçlerimizi optimize etmek için en son teknolojileri ve profesyonel deneyimi bir araya getiriyoruz. 
              Bambu Studio dosyalarınızın otomatik optimizasyonundan, hassas prototip üretimine kadar 
              her adımda deneyim ve teknolojimizi kullanarak size en iyi çözümleri sunuyoruz.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:border-aspect-green/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <IconComponent className="w-8 h-8 text-aspect-green mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>

            <button 
              className="bg-aspect-green hover:bg-aspect-green-dark text-black font-bold px-8 py-4 rounded-lg shadow-lg shadow-aspect-green/30 hover:shadow-aspect-green/50 transition-all duration-300 hover:scale-105"
              onClick={() => document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' })}
            >
              Projemizi Başlatalım
            </button>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Çalışma <span className="text-aspect-green">Sürecimiz</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Fikirden üretime, her adımda sizinle birlikte ilerleyen sistematik sürecimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Tasarım & Konsept", desc: "Fikrinizi paylaşın, optimize edelim" },
              { step: "02", title: "3D Modelleme", desc: "Bambu Studio ile profesyonel modelleme" },
              { step: "03", title: "Hassas Üretim", desc: "Yüksek teknoloji ile üretim" },
              { step: "04", title: "Teslimat", desc: "Kalite kontrol ve hızlı teslimat" }
            ].map((process, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl p-6 hover:border-aspect-green/30 transition-all duration-300 group"
              >
                <div className="text-6xl font-bold text-aspect-green/20 mb-4 group-hover:text-aspect-green/30 transition-colors">
                  {process.step}
                </div>
                <h4 className="text-white font-semibold text-xl mb-2">{process.title}</h4>
                <p className="text-gray-400">{process.desc}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-aspect-green/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="mt-24">
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
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white/5 border border-white/10 hover:border-aspect-green/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-aspect-green/20 hover:scale-105 group"
              >
                <div className="w-14 h-14 bg-aspect-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-aspect-green/20 transition-colors">
                  <service.icon className="w-7 h-7 text-aspect-green" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-aspect-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {service.description}
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-aspect-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="p-8 sm:p-12 relative z-10">
              <div className="text-center">
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
        </div>
      </div>
    </section>
  );
};

export default About;
