import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Legal = ({ type }) => {
  const content = {
    kvkk: {
      title: "KVKK Aydınlatma Metni",
      text: (
        <>
          <p><strong>Veri Sorumlusu:</strong> Harveniq (“Şirket”)</p>
          <p><strong>İletişim:</strong> info@harveniq.com, +90 (555) 555 55 55, İstanbul</p>
          
          <h3>İşlenen Kişisel Veriler</h3>
          <p>Web sitemiz üzerinden teklif/iletişim talepleriniz kapsamında ad-soyad, şirket bilgisi, e-posta, telefon, şehir, mesaj içeriği ve sizin tarafınızdan yüklenen teknik dosyalar (çizim/ekler) işlenebilir.</p>
          
          <h3>Kişisel Verilerin İşlenme Amaçları</h3>
          <ul>
            <li>Teklif talebinizi almak, değerlendirmek ve teklif iletmek</li>
            <li>İletişim süreçlerini yürütmek</li>
            <li>Üretim/süreç planlamasını yapmak (talep sonrası)</li>
            <li>Bilgi güvenliği, suistimal ve spam önleme (sınırlı ölçüde)</li>
          </ul>

          <h3>Hukuki Sebep ve Yöntem</h3>
          <p>Verileriniz, web sitesi formları, e-posta ve telefon kanallarıyla; KVKK’da öngörülen hukuki sebeplere dayanarak (sözleşme süreçleri/iletişim ve gerekli hallerde açık rıza) elektronik ortamda toplanır.</p>

          <h3>Aktarım</h3>
          <p>Kişisel verileriniz, barındırma (hosting), e-posta gönderimi ve güvenlik hizmetleri gibi hizmetlerin sağlanması amacıyla, yalnızca gerekli olduğu ölçüde hizmet sağlayıcılar ile paylaşılabilir.</p>

          <h3>Saklama Süresi</h3>
          <p>Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı/saklama süreleri kapsamında saklanır; süre sonunda silinir, yok edilir veya anonim hale getirilir.</p>

          <h3>Haklarınız</h3>
          <p>KVKK kapsamında, kişisel verilerinizle ilgili olarak bilgi talep etme, düzeltilmesini isteme, silinmesini isteme, işleme faaliyetlerine itiraz etme gibi haklara sahipsiniz. Başvurularınızı info@harveniq.com üzerinden iletebilirsiniz.</p>
        </>
      )
    },
    cerez: {
      title: "Çerez Politikası",
      text: (
        <>
          <p>Web sitemizde, sitenin çalışması için zorunlu çerezler kullanılabilir. Analitik çerezler (ziyaretçi istatistikleri) yalnızca tercihinize bağlı olarak etkinleştirilir.</p>
          <p>Çerez tercihlerinizi sitemizin alt bölümünde yer alan "Tercihleri Yönet" bölümünden değiştirebilirsiniz.</p>
          <p>Zorunlu çerezler oturum yönetimi ve form güvenliğini sağlamak amacıyla cihazınızda tutulur.</p>
        </>
      )
    },
    kullanim: {
      title: "Kullanım Şartları",
      text: (
        <>
          <p>Bu siteyi kullanarak harveniq.com genel kullanım şartlarını kabul etmiş olursunuz.</p>
          <p>Sitemize yüklediğiniz teknik çizimler gizlilik ilkelerine bağlı kalınarak yalnızca teklif ve üretim değerlendirme amacıyla saklanır ve incelenir.</p>
          <p>Site içeriğinin izinsiz kullanımı ve kopyalanması yasaktır.</p>
        </>
      )
    }
  };

  const pageData = content[type];

  return (
    <div className="page legal-page">
      <div className="container" style={{ paddingTop: '160px', paddingBottom: '100px', maxWidth: '800px' }}>
        <h1 className="mb-8">{pageData.title}</h1>
        <div className="glass-panel" style={{ padding: '48px', lineHeight: 1.8 }}>
          <div className="legal-content">
            {pageData.text}
          </div>
        </div>
        <div className="mt-8">
          <Link to="/" className="btn btn-secondary"><ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} /> Ana Sayfaya Dön</Link>
        </div>
      </div>
    </div>
  );
};

export default Legal;
