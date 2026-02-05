# Aspect 3D Baskı ve Tasarım Web Sitesi - PRD

## Tarih
Oluşturulma: 4 Şubat 2026

## Proje Özeti
Aspect için modern, teknoloji odaklı 3D baskı ve tasarım girişimi web sitesi. Siyah-yeşil (elektrik yeşili) renk paleti ile "Pikselden Fiziksele" konseptini vurgulayan, mühendislik disiplinini öne çıkaran landing page.

## Marka Mottosu
"3D tasarım ve üretim teknolojilerini yazılım disipliniyle birleştiriyoruz. Hayalinizdeki projeleri yüksek hassasiyetli çözümlerle fiziksel dünyaya taşıyoruz."

## Kullanıcı Personas
1. **B2C Müşteriler**: Kişiselleştirilmiş hediye ve dekorasyon ürünleri arayan bireyler
2. **B2B Müşteriler**: Endüstriyel prototipleme ihtiyacı olan firmalar
3. **Hobi/Spor Meraklıları**: Fitness aksesuarları ve özel tasarım talep edenler

## Temel Gereksinimler (Statik)

### Hizmet Kategorileri
1. Kişiselleştirilmiş 3D Baskı Ürünleri
2. Hediyelik 3D Baskı Ürünleri
3. Ev Dekorasyon Ürünleri
4. Endüstriyel 3D Prototipleme
5. Fitness ve Çocuk Aksesuarları

### Sayfa Yapısı
- Ana Sayfa (Hero + About + Shop + Footer)
- Hizmetler Bölümü (Ayrı sayfa gerekirse eklenecek)
- Hakkımızda Bölümü
- Mağaza (Shopier entegrasyonu)
- İletişim Bilgileri (Footer'da)

### Tasarım Özellikleri
- **Renk Paleti**: Siyah (#000000) + Elektrik Yeşili (#00ff00/#00cc00)
- **Konsept**: "Pikselden Fiziksele" - Yazılım mühendisliği + 3D baskı
- **Görsel Stil**: Modern teknolojik fotoğraflar, futuristik
- **Tipografi**: Modern, okunaklı sans-serif fontlar
- **Logo**: Müşteri tarafından sağlanan yeşil-siyah "ASPECT" göz logosu

## İmplementasyon Durumu (4 Şubat 2026)

### ✅ Tamamlanan Özellikler

#### Frontend Bileşenleri
1. **Header.jsx**
   - Sticky navigation
   - Logo + Menü (Ana Sayfa, Hizmetler, Hakkımızda, Mağaza)
   - CTA button (Mağazaya Git)
   - Mobile responsive menu

2. **Hero.jsx**
   - "Pikselden Fiziksele" badge
   - Büyük başlık: "3D Tasarım ve Üretim Teknolojileri"
   - Alt başlık: Marka mottosu
   - 2 CTA button (Hizmetlerimizi Keşfedin + Hakkımızda)
   - 3D printer arka plan görseli
   - 3 feature kartı (Hassas Üretim, Yazılım Desteği, Hızlı Teslimat)
   - Scroll indicator animasyon

3. **About.jsx**
   - "Pikselden Fiziksele" başlık
   - Şirket açıklaması
   - Mühendislik görseli
   - 4 value kartı (Yazılım Disiplini, Hassas Üretim, Hızlı Teslimat, Müşteri Odaklı)
   - "5+ Yıllık Deneyim" floating badge
   - 4 adımlı çalışma süreci timeline

4. **Shop.jsx**
   - Öne çıkan 3 ürün kartı (mock data):
     * Modern Geometrik Vazo - 249 TL
     * Bluetooth Hoparlör - 399 TL
     * Esnek TPU Aksesuar - 179 TL
   - Shopier'a yönlendirme butonları
   - Ana mağaza CTA kartı
   - Trust indicators (İstatistikler: 1000+ proje, 500+ müşteri, 24 saat teslimat, %99 memnuniyet)

5. **Footer.jsx**
   - Logo + slogan
   - Sosyal medya ikonları (Instagram, Twitter, LinkedIn, Github)
   - Hızlı erişim linkleri
   - İletişim bilgileri (email, telefon, adres)
   - Copyright bilgisi

6. **mockData.js**
   - Services data
   - Featured products
   - Stats
   - (Mock Shopier entegrasyonu için hazır)

#### Styling & Animasyonlar
- Siyah-yeşil tema (#00ff00)
- Hover effects ve transitions
- Glass-morphism effects (backdrop-blur)
- Floating animations
- Smooth scroll behavior
- Grid pattern backgrounds
- Gradient accents

### ❌ Eksik/İptal Edilen Özellikler

1. **Services Bölümü**
   - **Durum**: Babel plugin hatası nedeniyle geçici olarak devre dışı
   - **Sebep**: babel-metadata-plugin ile "Maximum call stack size exceeded" hatası
   - **Çözüm**: ServicesSection.jsx dosyası oluşturuldu ancak App.js'den kaldırıldı
   - **Sonraki Adım**: Babel plugin sorununu çözmek veya services bölümünü inline olarak oluşturmak

2. **Shopier API Entegrasyonu**
   - **Durum**: Mock data ile gösterim yapılıyor
   - **Sebep**: Kullanıcı C# backend ile entegre edecek
   - **Not**: Frontend hazır, Shopier URL'leri backend'den gelecek

### 🔄 Sonraki Görevler (Backlog)

#### P0 (Yüksek Öncelik)
1. Services bölümünü ekleme (babel hatası çözümü)
2. Shopier entegrasyonu için API endpoint'leri hazırlama
3. İletişim formu ekleme

#### P1 (Orta Öncelik)
1. SEO meta tags ekleme
2. Google Analytics entegrasyonu
3. Performance optimizasyonu (image lazy loading)
4. WhatsApp iletişim butonu
5. Türkçe dil desteği geliştirme

#### P2 (Düşük Öncelik)
1. Blog bölümü
2. Müşteri referansları/testimonials
3. Proje galerisi
4. FAQ sayfası
5. Admin paneli

## Teknik Mimari

### Frontend
- **Framework**: React 19
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React
- **Routing**: React Router DOM v7
- **State**: React Hooks (useState, useEffect)

### Backend (Gelecek)
- **Planlanan**: C# .NET (Kullanıcı tarafından geliştirilecek)
- **Database**: TBD
- **API**: RESTful API
- **Shopier Entegrasyonu**: Webhook/API

### Deployment
- **Frontend**: Emergent platform
- **Environment**: Hot reload enabled
- **URLs**: Configured via .env (REACT_APP_BACKEND_URL)

## API Contracts (Gelecek İçin Hazır)

### Services Endpoint
```
GET /api/services
Response: [
  {
    id: number,
    title: string,
    description: string,
    icon: string,
    features: string[]
  }
]
```

### Products Endpoint
```
GET /api/products
Response: [
  {
    id: number,
    name: string,
    category: string,
    price: string,
    image: string,
    shopierUrl: string
  }
]
```

### Contact Form
```
POST /api/contact
Body: {
  name: string,
  email: string,
  phone: string,
  message: string
}
```

## Mock Data Nedir?
- `mockData.js` dosyasında services, products, stats gibi veriler statik olarak tanımlanmış
- Backend hazır olduğunda bu veriler API'den çekilecek
- Frontend zaten API çağrısı yapacak şekilde hazır (axios kurulu)

## C# Backend Entegrasyonu Notları
1. CORS ayarlarını yapın (frontend origin: deployment URL)
2. Shopier webhook'larını dinleyecek endpoint'ler oluşturun
3. `/api/services`, `/api/products` endpoint'lerini oluşturun
4. Frontend'deki `REACT_APP_BACKEND_URL` .env değişkenini backend URL'inize güncelleyin

## Deployment Notları
- Frontend hot reload aktif
- Supervisor ile yönetiliyor
- Restart komutu: `sudo supervisorctl restart frontend`
- Logs: `/var/log/supervisor/frontend.*.log`

