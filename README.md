# 🚀 React Kütüphaneleri

React ekosistemindeki en iyi component, UI framework ve kütüphaneleri kategorize eden, hem web sitesi hem de README içeren açık kaynak proje.

## ✨ Özellikler

- 🎯 **Kategorize Edilmiş**: UI Components, UI Frameworks, State Management, Development Tools gibi ana kategoriler
- 🔍 **Arama ve Filtreleme**: Kütüphane adı, açıklama ve tag'lere göre arama
- 📊 **Detaylı Bilgiler**: GitHub stars, son güncelleme tarihi, NPM paket adı
- 🔗 **Hızlı Linkler**: GitHub, Demo, Dokümantasyon ve NPM linkleri
- 📱 **Responsive Tasarım**: Mobil ve masaüstü uyumlu modern arayüz
- 🌐 **Türkçe Destek**: Tam Türkçe arayüz ve açıklamalar

## 🚀 Hızlı Başlangıç

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/yourusername/react-libraries.git

# Proje dizinine gidin
cd react-libraries

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
react-libraries/
├── public/
│   └── data/
│       └── libraries.json          # Kütüphane verileri
├── src/
│   └── app/
│       ├── page.tsx               # Ana sayfa bileşeni
│       ├── layout.tsx             # Layout bileşeni
│       └── globals.css            # Global stiller
├── package.json                   # Proje bağımlılıkları
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
      "description": "Temel UI bileşenleri ve widget'lar",
      "subcategories": [
        {
          "id": "data-grid",
          "name": "Data Grid & Table",
          "description": "Veri tabloları ve grid bileşenleri",
          "libraries": [
            {
              "name": "AG Grid",
              "description": "Advanced Data Grid / Data Table...",
              "github": "https://github.com/ag-grid/ag-grid",
              "demo": "https://www.ag-grid.com/",
              "docs": "https://www.ag-grid.com/",
              "npm": "ag-grid-react",
              "stars": 10500,
              "lastCommit": "2024-01-15",
              "tags": ["table", "grid", "enterprise"]
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

## 🔧 Özelleştirme

### Yeni Kategori Ekleme

1. `public/data/libraries.json` dosyasını açın
2. `categories` array'ine yeni kategori ekleyin
3. Gerekli subcategory ve library'leri tanımlayın

### Yeni Kütüphane Ekleme

```json
{
  "name": "Kütüphane Adı",
  "description": "Kütüphane açıklaması",
  "github": "https://github.com/user/repo",
  "demo": "https://demo-url.com",
  "docs": "https://docs-url.com",
  "npm": "package-name",
  "stars": 1000,
  "lastCommit": "2024-01-20",
  "tags": ["tag1", "tag2"]
}
```

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

## 📝 Lisans

Bu proje [MIT License](LICENSE) altında lisanslanmıştır.

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Heroicons](https://heroicons.com/) - Icon set
- Tüm katkıda bulunanlara

## 📞 İletişim

- GitHub Issues: [Proje Issues](https://github.com/yourusername/react-libraries/issues)
- Email: your-email@example.com

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
