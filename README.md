🎬 Film-Movie React App
Film ve dizileri keşfetmek, arama yapmak ve detaylı bilgilerine ulaşmak için geliştirilmiş modern bir web uygulamasıdır. Kullanıcılar popüler içerikleri listeleyebilir, detay sayfalarında gezinebilir ve favori içeriklerini bulabilirler.

🚀 Özellikler
🔐 Kimlik Doğrulama (Authentication):

Firebase entegrasyonu ile güvenli giriş ve kayıt işlemleri.

Google hesabı ile hızlı giriş seçeneği.

Formik ve Yup ile gelişmiş form validasyonları.

🔎 Gelişmiş Arama: Film ve Dizi arama fonksiyonları ile istediğiniz içeriğe anında ulaşın.

📈 Popüler İçerikler: TMDB API kullanılarak çekilen güncel "Popüler Filmler" ve "Popüler Diziler" listeleri.

📄 Detay Sayfaları: Seçilen film veya dizinin posteri, özeti, yayın tarihi, popülerlik puanı ve tür bilgileri.

🛡️ Korumalı Rotalar (Protected Routes): İçeriklere erişmek için giriş zorunluluğu (Sadece giriş yapmış kullanıcılar film/dizi detaylarını görebilir).

⚡ State Yönetimi: Redux Toolkit ile global state yönetimi (Arama sonuçları, listeler vb.).

📱 Responsive Tasarım: Mobil ve masaüstü uyumlu modern arayüz.

🛠️ Kullanılan Teknolojiler
Bu proje aşağıdaki teknolojiler ve kütüphaneler kullanılarak geliştirilmiştir:

Core: React, TypeScript

State Management: Redux Toolkit

Routing: React Router DOM

BaaS (Backend as a Service): Firebase (Auth)

Data Source: The Movie Database (TMDB) API

Forms & Validation: Formik, Yup

Notifications: React Toastify

Styling: CSS Modules, Custom CSS

src/
├── components/      # Tekrar kullanılabilir bileşenler (Navbar, Card, ProtectedRoute)
├── config/          # Router yapılandırması
├── css/             # Sayfa ve bileşen stilleri
├── pages/           # Sayfa görünümleri (Home, Login, Register, Details...)
├── schemas/         # Yup validasyon şemaları
├── slice/           # Redux slice'ları (API istekleri ve state)
├── types/           # TypeScript tip tanımlamaları
├── App.tsx          # Ana uygulama bileşeni
├── Firebase.tsx     # Firebase konfigürasyonu
├── main.tsx         # Giriş noktası
└── store.tsx        # Redux store yapılandırması
