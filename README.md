# Albayrak Hukuk — statik kurumsal site

İstanbul merkezli kurgusal bir avukatlık bürosu olan **Albayrak Hukuk Bürosu** için hazırlanmış, tamamen Türkçe içerikli statik site. Next.js uygulamasının tasarımı, logosu ve metinleri HTML, CSS ve JavaScript’e aktarıldı; derleme adımı yoktur.

## Çalıştırma

Depo kökünden:

```bash
python3 -m http.server 43125
```

Tarayıcıda: [http://127.0.0.1:43125](http://127.0.0.1:43125)

Dosyaları doğrudan `file://` ile açmak yerine bir HTTP sunucusu kullanın; sayfalar kök göreli yollar (`/style.css`, `/hakkimizda.html`) kullanır.

## Sayfalar

| Dosya | İçerik |
| --- | --- |
| `index.html` | Ana sayfa: hero, büro, çalışma alanları, süreç, ekip, yorumlar, makaleler, SSS |
| `hakkimizda.html` | Büro tarihi, değerler, kilometre taşları, çalışma yöntemi |
| `calisma-alanlari.html` | Sekiz çalışma alanı |
| `calisma-alanlari/*.html` | Alan detayları, hizmetler, süreç ve SSS |
| `ekip.html` | Avukat kartları ve kariyer notu |
| `ekip/*.html` | Avukat profilleri |
| `makaleler.html` | Öne çıkan yazı, kategori filtresi ve arama |
| `makaleler/*.html` | Tam makale metinleri |
| `sss.html` | Sıkça sorulan sorular |
| `iletisim.html` | İletişim bilgileri ve ön görüşme formu |
| `kvkk.html` | KVKK aydınlatma metni, çerez politikası, yasal uyarı |
| `404.html` | Sayfa bulunamadı |

Paylaşılan stiller `style.css`, etkileşimler `script.js`, marka görselleri `images/` altındadır.

## Form

İletişim formu tarayıcıda doğrulanır (ad, e-posta, konu, en az 30 karakter açıklama, KVKK onayı). Başarılı gönderimde başvuru numarası üretilir; bu sürümde mesaj bir sunucuya iletilmez. Acil konular için sitedeki telefon ve 7/24 hat kullanılmalıdır.

## İçerik notu

Telefon, e-posta, adres ve baro sicili örnek bilgilerdir. Sitedeki yazılar genel bilgilendirme amaçlıdır; avukat–müvekkil ilişkisi doğurmaz. Müvekkil yorumları kurgusaldır ve baş harflerle yayımlanır.
