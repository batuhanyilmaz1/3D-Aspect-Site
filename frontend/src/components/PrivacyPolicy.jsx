import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-b from-black to-black/80 border-b border-white/10 pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-aspect-green transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Ana Sayfaya Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gizlilik Politikası</h1>
          <p className="text-gray-400 text-lg">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              Aspect ("Biz", "Bizi", "Bizim" veya "Şirket") olarak, kişisel verilerinizin korunmasına önem veriyoruz. 
              Bu Gizlilik Politikası, web sitesini ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda 
              toplanan ve işlenen kişisel veriler hakkında bilgi sunmaktadır.
            </p>
          </section>

          {/* Sections */}
          <div className="space-y-12">
            {/* 1. Toplanan Veriler */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">1. Toplanan Veriler</h2>
              </div>
              <div className="ml-9 space-y-4">
                <p className="text-gray-300">
                  Aşağıdaki türde kişisel veriler toplanabilir:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span><strong>İletişim Bilgileri:</strong> Ad, soyad, e-posta adresi, telefon numarası</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span><strong>Teknik Bilgiler:</strong> IP adresi, tarayıcı türü, cihaz bilgisi</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span><strong>Kullanım Verisi:</strong> Sayfalar, tıklanan linkler, zaman bilgisi</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span><strong>Sipariş Bilgileri:</strong> Ürün seçimleri, ödeme bilgileri</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 2. Veri Kullanımı */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">2. Verileriniz Nasıl Kullanılır</h2>
              </div>
              <div className="ml-9 space-y-3 text-gray-300">
                <p>Toplanan veriler aşağıdaki amaçlar için kullanılabilir:</p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Hizmetlerimizi sağlamak ve geliştirmek</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Siparişleri işlemek ve teslimat sağlamak</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Müşteri desteği sağlamak</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Yasal yükümlülükleri yerine getirmek</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Güvenlik ve dolandırıcılık önleme</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 3. Veri Güvenliği */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">3. Veri Güvenliği</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz. 
                  Ancak, hiçbir internet iletişimi tamamen güvenli değildir. Verilerinizin 
                  gizliliğini sağlamak için makul çabalar harcıyoruz.
                </p>
              </div>
            </section>

            {/* 4. Çerezler */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">4. Çerezler</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Web sitesi deneyiminizi geliştirmek için çerezler kullanıyoruz. 
                  Çerezleri kontrol etmek için tarayıcı ayarlarını kullanabilirsiniz. 
                  Çerezleri devre dışı bırakmak, bazı site özellikleri çalışmayabilir.
                </p>
              </div>
            </section>

            {/* 5. Üçüncü Taraf Linkler */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">5. Üçüncü Taraf Linkler</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Web sitesi, üçüncü taraf web sitelerine linkler içerebilir. 
                  Bu gizlilik politikası yalnızca web sitesine uygulanır. 
                  Diğer web sitelerinin gizlilik uygulamaları için onların politikalarını inceleyiniz.
                </p>
              </div>
            </section>

            {/* 6. Haklarınız */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">6. Haklarınız</h2>
              </div>
              <div className="ml-9 space-y-3 text-gray-300">
                <p>Sizin aşağıdaki haklara sahipsiniz:</p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Verilerinize erişim hakkı</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Verilerinizi düzeltme hakkı</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Verilerinizi silme hakkı</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>İşlenmesine itiraz etme hakkı</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 7. İletişim */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">7. İletişim</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Bu gizlilik politikası hakkında sorularınız varsa, lütfen bizimle iletişime geçiniz:
                </p>
                <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <p><strong>Email:</strong> privacy@aspect.com</p>
                  <p><strong>Adres:</strong> [Adresiniz]</p>
                </div>
              </div>
            </section>
          </div>

          {/* Last Updated */}
          <div className="mt-16 p-6 bg-gradient-to-r from-aspect-green/10 to-aspect-green/5 border border-aspect-green/20 rounded-lg">
            <p className="text-gray-300">
              Bu Gizlilik Politikası herhangi bir uyarı olmaksızın güncellenebilir. 
              Değişiklikleri kontrol etmek için bu sayfayı zaman zaman ziyaret etmeyi öneririz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
