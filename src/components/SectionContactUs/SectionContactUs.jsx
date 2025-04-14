import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import Container from "../Container/Container";
import FormContact from "../FormContact/FormContact";
import s from "./SectionContactUs.module.css";

const SectionContactUs = () => {
  return (
    <section className={s.contactUsPage} id="contact">
      <Container className={s.contactUsContainer}>
        <h2 className={s.title}>CONTACT US</h2>

        <FormContact />

        <div className={s.socialBox}>
          <h3 className={s.descr}>Get in touch with us</h3>
          <p className={s.text}>
            Have a question or comment about our app? Get in touch with us using
            the contact form below and our team will respond shortly.
          </p>
          <ul className={s.list}>
            <li>
              <a
                className={s.socLink}
                href="https://uk-ua.facebook.com"
                target="_blank"
              >
                <TiSocialFacebook size={30} className={s.icon} />
              </a>
            </li>
            <li>
              <a className={s.socLink} href="https://x.com" target="_blank">
                <TiSocialTwitter size={30} className={s.icon} />
              </a>
            </li>
            <li>
              <a
                className={s.socLink}
                href="https://www.linkedin.com"
                target="_blank"
              >
                <TiSocialLinkedin size={30} className={s.icon} />
              </a>
            </li>
          </ul>
          <address className={s.address}>
            <a className={s.contacts} href="tel:+38097xxxxxxx">
              +380 (97) xxx-xx-xx
            </a>
            <a className={s.contacts} href="mailto:goIteens@gmail.com">
              goIteens@gmail.com
            </a>
          </address>
        </div>
      </Container>
    </section>
  );
};

export default SectionContactUs;
