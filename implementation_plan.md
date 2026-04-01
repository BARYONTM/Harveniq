# Gerçek Zamanlı ve Güvenli Dosya Teklif Altyapısının Kurulumu

Müşterilerinizden 25MB'a kadar STEP, DWG gibi teknik ve hassas dosyaları güvenle alabilmek ve bu bilgileri e-postanıza düşürmek için sitemizi statik bir tasarımdan çıkarıp "Tam Fonksiyonel (Full-Stack)" bir uygulamaya dönüştüreceğiz.

## ⚠️ User Review Required

Bu yapıyı kurabilmemiz için tamamen **Ücretsiz** ve endüstri standardı olan 2 farklı servisin birbirine bağlanması planlanmıştır. Bu servislerin sizin tarafınızdan açılıp bana güvenlik anahtarlarını vermeniz gerekecektir (Sırasıyla nasıl açacağınızı söyleyeceğim). Şifrelerinizi asla istemeyeceğim, sadece bana kodları vereceksiniz.

1.  **Supabase:** Dosyalarınızı (CAD, PDF) şifreli ve güvenli bir şekilde depolayacak dünyanın en popüler ücretsiz bulut kasası.
2.  **EmailJS:** Form doldurulduğunda bilgileri toparlayıp "Yeni Teklif Var!" başlığı ile info@harveniq.com (veya kişisel) adresinize e-posta olarak fırlatacak roketimiz.

---

## Önerilen Değişiklikler ve Mimarisi

Bu yapı, Vercel üzerindeki sitemizi yormamak ve tamamen güvenli kalmasını sağlamak amacıyla **"Serverless" (Sunucusuz)** bir düzende kurulacaktır. Projedeki değişiklikler ağırlıklı olarak Frontend'in (React) içindeki servis dosyalarına eklenecektir.

### Paket Yöneticisi (Dependencies)
*   **[NEW]** `@supabase/supabase-js`: Supabase Bulutuna dosya göndermek için.
*   **[NEW]** `@emailjs/browser`: E-posta tetiklemesi için.

### Proje Dosyaları

#### [NEW] `src/services/supabase.js`
Supabase kütüphanesinin kurulacağı ve bağlantı ayarlarının yapılacağı yepyeni bir "Servis" katmanı oluşturulacak. Tek görevi 25MB dosyayı hızlıca alıp güvenli bulut deposuna yüklemek ve bize indirme linkini (URL) teslim etmek olacak.

#### [NEW] `.env`
Sizin bana vereceğiniz API Güvenlik Anahtarlarını, kodun içine gömmek yerine güvenli bir ortam kasasına kilitleyeceğiz (`VITE_SUPABASE_URL`, vb.). Böylelikle GitHub'da kodlar gözükse bile kimse şifrelerinizi göremeyecek.

#### [MODIFY] `src/pages/Quote.jsx`
Şu anda sadece görsel olarak çalışan "Dosya Seçme" ve "Gönder" butonlarını gerçek bir sisteme bağlayacağız:
1.  **Yükleme Animasyonu:** Dev CAD dosyalarının yüklenmesi internet hızına bağlı olarak 10-30 saniye sürebilir, kullanıcının sayfanın donduğunu sanmaması için özel bir "Yükleniyor... Lütfen Bekleyiniz" animasyonu eklenecek.
2.  **Dosya Yönlendirmesi:** "Devam" tuşuna basıldığında dosya yakalanıp Supabase'e yollanacak.
3.  **Mail Yönlendirmesi:** Tüm form verileri (isim, telefon vb.) ve dosyanın hazır edilen İndirme Linki, EmailJS'e aktarılıp direkt posta kutunuza fırlatılacak.
4.  Eğer her şey hatasız biterse, daha önceden yaptığımız "Onay (Başarılı)" ekranı açılacak.

---

## 🛑 Open Questions

Planlanan altyapı hakkında onayınız gerekiyor. 
Bu kuruluma başlamaya hazırsanız, size hemen sırasıyla "Supabase ve EmailJS'den şu kodları bana getirin" diyeceğim ve kodları aldığım gibi tüm altyapıyı sisteme öreceğim.

1.  Plana onay veriyor musunuz? İlerleyelim mi?
2.  Gelecek teklif e-postalarının hangi e-posta adresine düşmesini istersiniz? (`info@harveniq.com` henüz kurulmadıysa şimdilik kişisel e-posta adresinize bağlayabiliriz, sonradan 2 saniyede değiştirebilmekteyiz).

---

## Doğrulama Planı (Verification Plan)
Değişiklikleri kodladıktan sonra sistemi şöyle test edeceğiz:
1.  Yerel sunucuda (bilgisayarımızda) sayfayı açacağız.
2.  Formu örnek verilerle ve gerçek bir 5-10MB'lık uydurma `PDF/ZIP` dosyası ile dolduracağız.
3.  Gönder'e basınca:
    *   Ekranda yükleme (spinner) çıkacak.
    *   Sizin e-posta kutunuza başarıyla veri düşüp düşmediğini kontrol edeceğiz.
    *   E-postadaki bağlantıya tıkladığınızda kendi yüklediğimiz o uydurma paketi başarıyla indirebildiğimizi teyit edeceğiz.
