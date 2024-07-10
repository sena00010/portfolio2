import React from "react";
import styles from "./stack.module.css";

const Stack = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2>My Tech Stack</h2>
        <span className={styles.gradientText}>
          Technologies I’ve been working with recently
        </span>
      </div>

      <div className={styles.abilityContainer}>
        {" "}
        <div>
          <img src=".\vscode-icons_file-type-js-official.svg" />
        </div>
        <div>
          <img src=".\vscode-icons_file-type-vscode.svg" />
        </div>
        <div>
          <img src=".\vscode-icons_file-type-css.svg" />
        </div>
        <div>
          <img src=".\vscode-icons_file-type-html.svg" />
        </div>
        <div>
          <img src=".\akar-icons_github-fill.svg" />
        </div>
        <div>
          <img src=".\logos_bootstrap.svg" />
        </div>
        <div>
          <img src=".\logos_react.svg" />
        </div>
        <div>
          <img src=".\vscode-icons_file-type-tailwind.svg" />
        </div>
      </div>
      <div>
      <p className={styles.paragraph}>
          Merhaba, ben Sena Özyiğit. Yaratıcı ve kullanıcı dostu web arayüzleri oluşturma konusunda tutkulu bir frontend geliştiricisiyim. Hem kullanıcı deneyimi (UX) hem de kullanıcı arayüzü (UI) tasarımı konusunda güçlü bir anlayışa sahibim ve bu alanlarda en iyi uygulamaları kullanarak projeler geliştiriyorum.
        </p>
        <p className={styles.paragraph}>
          Teknik Becerilerim:
        </p>
        <ul className={styles.skillsList}>
          <li>HTML & CSS: Semantik HTML ve modern CSS ile duyarlı (responsive) ve erişilebilir web sayfaları oluşturuyorum.</li>
          <li>JavaScript: ES6 ve üzeri JavaScript ile dinamik ve etkileşimli kullanıcı deneyimleri sağlıyorum.</li>
          <li>React: React framework'ü ile bileşen tabanlı mimari kullanarak ölçeklenebilir ve yeniden kullanılabilir kodlar yazıyorum.</li>
          <li>Git & GitHub: Versiyon kontrol sistemleri ile proje yönetimi ve takım çalışması konularında deneyimliyim.</li>
          <li>Web Performansı: Web uygulamalarının hız ve performans optimizasyonlarına dikkat ediyorum.</li>
          <li>Responsive Design: Mobil öncelikli tasarım prensipleri ile çeşitli cihazlarda mükemmel görünümler elde ediyorum.</li>
        </ul>
        <p className={styles.paragraph}>
          Projelerim:
        </p>
        <ul className={styles.projectsList}>
          <li>PlanYap: Kullanıcıların günlük planlarını oluşturabilecekleri, düzenleyebilecekleri ve silebilecekleri bir React uygulaması geliştirdim. Bu projede, form validasyonu ve durum yönetimi gibi ileri düzey konularda deneyim kazandım.</li>
          <li>E-ticaret Sitesi: Modern JavaScript ve CSS kullanarak bir e-ticaret platformu tasarladım ve geliştirdim. Ürün listeleme, sepet yönetimi ve ödeme entegrasyonu gibi işlevsellikler ekledim.</li>
          <li>Blog Platformu: Kullanıcıların yazılar yazıp paylaşabileceği, yorum yapabileceği bir blog platformu geliştirdim. Bu projede, React ve Firebase kullandım.</li>
        </ul>
        <p className={styles.paragraph}>
          Eğitim: Bilgisayar Mühendisliği Lisans - [Üniversite Adı]
        </p>
        <p className={styles.contactInfo}>
          İletişim:
          <br />
          E-posta: sena.ozyigit@example.com
          <br />
          LinkedIn: linkedin.com/in/sena-ozyigit
          <br />
          GitHub: github.com/senaozyigit
        </p>
        <p className={styles.whyWork}>
          Neden Benimle Çalışmalısınız? Kullanıcı odaklı ve yenilikçi çözümler üretmeyi seven, sürekli öğrenmeyi ve kendimi geliştirmeyi ilke edinmiş bir frontend geliştiricisiyim. Takım çalışmasına yatkın, problem çözme yetenekleri gelişmiş ve detaylara önem veren biriyim. Sizinle çalışarak projelerinizi daha ileriye taşımak için sabırsızlanıyorum.
        </p>
      </div>
    </div>
  );
};

export default Stack;
