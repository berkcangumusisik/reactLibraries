# 🚀 React Kütüphaneleri

React ekosistemindeki en iyi component, UI framework ve kütüphaneleri kategorize eden, modern ve responsive tasarıma sahip açık kaynak proje.


## ✨ Özellikler

- 🎯 **Kategorize Edilmiş**: UI Components, UI Frameworks, State Management, Development Tools gibi ana kategoriler
- 🔍 **Gelişmiş Arama**: Kütüphane adı, açıklama ve tag'lere göre arama ve filtreleme
- 📱 **Responsive Tasarım**: Mobil, tablet ve masaüstü uyumlu modern arayüz
- 🌐 **Türkçe Destek**: Tam Türkçe arayüz ve detaylı açıklamalar
- 🎨 **Modern UI**: Glassmorphism, gradient'lar ve animasyonlarla zenginleştirilmiş tasarım
- 📊 **İstatistikler**: Kategori ve kütüphane sayıları ile detaylı bilgiler
- 🔗 **Hızlı Linkler**: GitHub, Demo, Dokümantasyon ve NPM linkleri
- 📱 **Mobil Uyumlu**: Hamburger menü ile mobil cihazlarda kolay navigasyon

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/berkcangumusisik/reactLibraries.git

# Proje dizinine gidin
cd reactLibraries

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Build

```bash
# Production build oluşturun
npm run build

# Production sunucusunu başlatın
npm start
```

## 📁 Proje Yapısı

```
reactLibraries/
├── public/
│   ├── data/
│   │   └── libraries.json          # Kütüphane verileri
│   ├── favicon.ico                 # Favicon
│   └── favicon.svg                 # SVG Favicon
├── src/
│   ├── app/
│   │   ├── page.tsx               # Ana sayfa bileşeni
│   │   ├── layout.tsx             # Layout bileşeni
│   │   └── globals.css            # Global stiller
│   └── components/
│       ├── Header.tsx             # Header bileşeni (hamburger menü)
│       ├── Hero.tsx               # Hero section
│       ├── Search.tsx             # Arama ve filtreleme
│       ├── Libraries.tsx          # Ana kütüphane listesi
│       ├── CategoryCard.tsx       # Kategori kartı
│       ├── SubcategoryCard.tsx    # Alt kategori kartı
│       ├── LibraryCard.tsx        # Kütüphane kartı
│       └── Footer.tsx             # Footer bileşeni
├── package.json                   # Proje bağımlılıkları
├── tailwind.config.js            # Tailwind CSS konfigürasyonu
└── README.md                      # Bu dosya
```

## 📊 Veri Yapısı

Kütüphane verileri `public/data/libraries.json` dosyasında JSON formatında saklanır:

```json
{
  "categories": [
    {
      "id": "ui-components",
      "name": "UI Components",
      "description": "Modern web uygulamaları için temel kullanıcı arayüzü bileşenleri ve widget'ları içeren kapsamlı koleksiyon.",
      "subcategories": [
        {
          "id": "data-grid",
          "name": "Data Grid & Table",
          "description": "Büyük veri setlerini etkili şekilde görüntülemek ve yönetmek için gelişmiş tablo ve grid bileşenleri.",
          "libraries": [
            {
              "name": "AG Grid",
              "description": "Javascript, React, AngularJS ve Web Components için gelişmiş veri tablosu ve grid bileşeni.",
              "github": "https://github.com/ag-grid/ag-grid",
              "demo": "https://www.ag-grid.com/",
              "docs": "https://www.ag-grid.com/",
              "npm": "ag-grid-react",
              "tags": ["table", "grid", "enterprise", "sorting", "filtering"]
            }
          ]
        }
      ]
    }
  ]
}
```

## 🎨 Kullanılan Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **UI**: Tailwind CSS
- **Icons**: Heroicons
- **Language**: TypeScript
- **Styling**: CSS Modules + Tailwind
- **Animations**: CSS Keyframes ve Tailwind animations
- **Responsive**: Mobile-first responsive design

## 🔧 Özelleştirme

### Yeni Kategori Ekleme

1. `public/data/libraries.json` dosyasını açın
2. `categories` array'ine yeni kategori ekleyin
3. Gerekli subcategory ve library'leri tanımlayın
4. Türkçe açıklamalar ekleyin

### Yeni Kütüphane Ekleme

```json
{
  "name": "Kütüphane Adı",
  "description": "Kütüphane hakkında detaylı Türkçe açıklama. Bu kütüphane ne işe yarar ve hangi özellikleri sunar?",
  "github": "https://github.com/user/repo",
  "demo": "https://demo-url.com",
  "docs": "https://docs-url.com",
  "npm": "package-name",
  "tags": ["tag1", "tag2", "tag3"]
}
```

## 📱 Responsive Özellikler

- **Mobile First**: Tüm tasarım mobil öncelikli
- **Breakpoints**: xs (< 640px), sm (640px+), md (768px+), lg (1024px+), xl (1280px+)
- **Hamburger Menu**: Mobil cihazlarda hamburger menü ile navigasyon
- **Touch Friendly**: Mobilde dokunmatik dostu buton boyutları
- **Adaptive Layouts**: Her ekran boyutu için optimize edilmiş layout

## 🎨 Tasarım Özellikleri

- **Glassmorphism**: Backdrop blur ve şeffaf arka planlar
- **Gradient Backgrounds**: Mavi tonlarında gradient arka planlar
- **Animations**: Float, pulse, bounce ve custom animasyonlar
- **Hover Effects**: Scale, shadow ve color geçişleri
- **Modern UI**: Rounded corners, shadows ve modern spacing

## 🤝 Katkıda Bulunma

Bu proje açık kaynak olarak geliştirilmektedir. Katkılarınızı bekliyoruz!

### Katkı Süreci

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

### Katkı Alanları

- 🆕 Yeni kütüphaneler ekleme
- 📝 Mevcut kütüphane bilgilerini güncelleme
- 🐛 Hata düzeltmeleri
- ✨ Yeni özellikler
- 📚 Dokümantasyon iyileştirmeleri
- 🎨 UI/UX iyileştirmeleri
- 📱 Responsive tasarım iyileştirmeleri

## 📝 Lisans

Bu proje [MIT License](LICENSE) altında lisanslanmıştır.

## 🚀 Canlı Demo

Projeyi canlı olarak görüntülemek için:
- **Local**: `npm run dev` komutundan sonra [http://localhost:3000](http://localhost:3000)
- **Production**: Build alıp `npm start` ile çalıştırın

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi ve GitHub'da takip etmeyi unutmayın!

**Geliştirici**: [Berkcan Gümüşışık](https://github.com/berkcangumusisik)
