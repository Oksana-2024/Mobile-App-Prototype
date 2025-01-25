import clsx from "clsx";
import Container from "../Container/Container";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={clsx(s.footerPage, s.line)}>
      <Container>
        <div className={s.footerBorder}>
          <p className={s.footerText}>
            © 2019 GoIteens Template. All Rights Reserved
          </p>
        </div>
      </Container>
    </section>
  );
};
export default Footer;
