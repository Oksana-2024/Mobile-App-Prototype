import Container from "../Container/Container";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={s.footerPage}>
      <Container>
        <div className={s.footerBorder}>
          <p className={s.footerText}>
            © 2025 GoIteens Template. All Rights Reserved
          </p>
        </div>
      </Container>
    </section>
  );
};
export default Footer;
