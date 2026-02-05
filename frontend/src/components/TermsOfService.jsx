import React from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kullanım Şartları</h1>
          <p className="text-gray-400 text-lg">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              Bu Kullanım Şartları, Aspect web sitesinin ve hizmetlerinin kullanımını yönetir. 
              Web sitesini ziyaret ederek ve hizmetlerimizi kullanarak, bu koşulları kabul etmiş olursunuz. 
              Kabul etmiyorsanız, lütfen siteyi kullanmayınız.
            </p>
          </section>

          {/* Sections */}
          <div className="space-y-12">
            {/* 1. Hizmetin Kullanımı */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">1. Hizmetin Kullanımı</h2>
              </div>
              <div className="ml-9 space-y-4">
                <p className="text-gray-300">
                  Siz, hizmetlerimizi yalnızca yasal amaçlar için ve bu koşullara uygun şekilde kullanmayı kabul edersiniz. 
                  Aşağıdakiler yasaktır:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Herhangi bir yasaya veya düzenlemeye karşı hareket etmek</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Başkalarının haklarını ihlal etmek</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Zararlı yazılım veya spam göndermek</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Web sitesine yetkisiz erişim sağlamaya çalışmak</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>İçeriği başkasının izni olmadan çoğaltmak veya dağıtmak</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 2. Ürünler ve Fiyatlandırma */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">2. Ürünler ve Fiyatlandırma</h2>
              </div>
              <div className="ml-9 space-y-4 text-gray-300">
                <p>
                  Web sitesinde gösterilen ürün ve fiyatlar değiştirilmeden önce bildirim yapılabilir. 
                  Fiyatlandırma hataları durumunda, siparişi iptal etme hakkımız saklıdır.
                </p>
                <p>
                  Ürünlerin mevcudiyeti garantili değildir. Siparişiniz onaylanana kadar 
                  ürün stokta olmayabilir.
                </p>
              </div>
            </section>

            {/* 3. Sipariş ve Ödeme */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">3. Sipariş ve Ödeme</h2>
              </div>
              <div className="ml-9 space-y-3 text-gray-300">
                <p>Sipariş verirken:</p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Doğru ve eksiksiz bilgi sağlamayı kabul edersiniz</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Ödeme yöntemi geçerli ve yetkili olacaktır</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-aspect-green">•</span>
                    <span>Siparişi iptal etme hakkınız satın almadan 24 saat öncesine kadar vardır</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 4. Teslimat ve İadeler */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">4. Teslimat ve İadeler</h2>
              </div>
              <div className="ml-9 space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-2">Teslimat:</p>
                  <p>
                    Siparişler belirtilen süre içerisinde teslimat adresine teslim edilecektir. 
                    Teslimat süreleri tahmini olup, garantili değildir.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">İadeler:</p>
                  <p>
                    Ürünler, teslim alındığı tarihten itibaren 30 gün içinde geri gönderilebilir. 
                    İade edilen ürünler kullanılmamış ve orijinal durumda olmalıdır.
                  </p>
                </div>
              </div>
            </section>

            {/* 5. Fikri Mülkiyet */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">5. Fikri Mülkiyet</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Web sitesinde yer alan tüm içerik, tasarım, logolar ve metin telif hakkı 
                  tarafından korunmaktadır. Bu içeriği izinsiz kullanmak yasaktır.
                </p>
              </div>
            </section>

            {/* 6. Sorumluluk Sınırlaması */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">6. Sorumluluk Sınırlaması</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Web sitesi "olduğu gibi" sunulmaktadır. Aspect, doğrudan, dolaylı, 
                  özel veya sonuçsal zararlardan sorumlu değildir. Bu sınırlaması hakkın 
                  kullanımı konusunda geçerlidir.
                </p>
              </div>
            </section>

            {/* 7. Değişiklikler */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">7. Şartlarda Değişiklikler</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Aspect, bu Kullanım Şartlarını herhangi bir uyarı olmaksızın değiştirebilir. 
                  Değişikliklerin yayınlandığı tarihten sonra web sitesinin kullanımı, 
                  yeni şartları kabul ettiğiniz anlamına gelir.
                </p>
              </div>
            </section>

            {/* 8. Hükümsüzlük */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">8. Hükümsüzlük</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Bu şartların herhangi bir kısmı yürürlüğü olmayan durum, 
                  diğer koşulların yürürlüğünü etkilemez.
                </p>
              </div>
            </section>

            {/* 9. Yönetim Hukuku */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">9. Yönetim Hukuku</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Bu Kullanım Şartları Türkiye Hukuku'na göre yönetilecektir. 
                  Tüm anlaşmazlıklar Türkiye mahkemelerinin yargılama yetkisine tabi olacaktır.
                </p>
              </div>
            </section>

            {/* 10. İletişim */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ChevronRight className="w-6 h-6 text-aspect-green" />
                <h2 className="text-2xl font-bold text-white">10. İletişim</h2>
              </div>
              <div className="ml-9 text-gray-300">
                <p>
                  Bu Kullanım Şartları hakkında sorularınız varsa, lütfen bizimle iletişime geçiniz:
                </p>
                <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <p><strong>Email:</strong> support@aspect.com</p>
                  <p><strong>Adres:</strong> [Adresiniz]</p>
                </div>
              </div>
            </section>
          </div>

          {/* Last Updated */}
          <div className="mt-16 p-6 bg-gradient-to-r from-aspect-green/10 to-aspect-green/5 border border-aspect-green/20 rounded-lg">
            <p className="text-gray-300">
              Bu Kullanım Şartları herhangi bir uyarı olmaksızın güncellenebilir. 
              Değişiklikleri kontrol etmek için bu sayfayı zaman zaman ziyaret etmeyi öneririz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
