# Cansu Albayrak Hukuk

**Cansu Albayrak Hukuk**, Maltepe / İstanbul’da bağımsız avukatlık yapan **Av. Cansu Albayrak** için hazırlanmış, tamamen Türkçe içerikli statik sitedir. Okan Üniversitesi Hukuk Fakültesi mezunu; Piri Reis Üniversitesi’nde Deniz Hukuku yüksek lisansı. 2021’den bu yana ticaret, deniz ticareti, iş, gayrimenkul, aile, ceza, icra ve KVKK alanlarında şirketlere ve bireylere danışmanlık ile dava takibi sunar.

Tasarım (navy / gold), Cansu Albayrak Hukuk logosu ve metinler HTML, CSS ve JavaScript’tedir; derleme adımı yoktur.

## Çalıştırma

Depo kökünden:

```bash
python3 -m http.server 43129
```

Tarayıcıda: [http://127.0.0.1:43129](http://127.0.0.1:43129)

Dosyaları doğrudan `file://` ile açmak yerine bir HTTP sunucusu kullanın; sayfalar kök göreli yollar (`/style.css`, `/hakkimizda.html`) kullanır.

## Sayfalar

| Dosya | İçerik |
| --- | --- |
| `index.html` | Ana sayfa: hero, özgeçmiş özeti, çalışma alanları, süreç, profil, yorumlar, makaleler, SSS |
| `hakkimizda.html` | Av. Cansu Albayrak özgeçmişi, eğitim, çalışma yöntemi |
| `calisma-alanlari.html` | Sekiz çalışma alanı |
| `calisma-alanlari/*.html` | Alan detayları, hizmetler, süreç ve SSS |
| `ekip.html` | Hakkımızda sayfasına yönlendirir (eski ekip URL’si) |
| `ekip/*.html` | Hakkımızda sayfasına yönlendirir (eski avukat profilleri) |
| `makaleler.html` | Öne çıkan yazı, kategori filtresi ve arama |
| `makaleler/*.html` | Tam makale metinleri (yazar: Av. Cansu Albayrak) |
| `sss.html` | Sıkça sorulan sorular |
| `iletisim.html` | İletişim bilgileri ve ön görüşme formu |
| `kvkk.html` | KVKK aydınlatma metni, çerez politikası, yasal uyarı |
| `404.html` | Sayfa bulunamadı |

Paylaşılan stiller `style.css`, etkileşimler `script.js`, marka görselleri `images/` altındadır.

## Form

İletişim formu tarayıcıda doğrulanır (ad, e-posta, konu, en az 30 karakter açıklama, KVKK onayı). Başarılı gönderimde başvuru numarası üretilir; bu sürümde mesaj bir sunucuya iletilmez. Acil konular için sitedeki telefon ve 7/24 hat kullanılmalıdır.

## İçerik notu

Telefon, e-posta ve baro sicili örnek bilgilerdir. Adres **Maltepe / İstanbul** olarak belirtilir; sokak / kapı no yayımlanmaz. Sitedeki yazılar genel bilgilendirme amaçlıdır; avukat–müvekkil ilişkisi doğurmaz. Müvekkil yorumları kurgusaldır ve baş harflerle yayımlanır.
