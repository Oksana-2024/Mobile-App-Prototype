import Container from "../Container/Container";
import s from "./SectionHero.module.css";
import { MdArrowForwardIos } from "react-icons/md";
import phoneDesktop from "../../assets/images/iPhone_d.png";
import phoneDesktop2 from "../../assets/images/iPhone_d@2x.png";
import phoneTablet from "../../assets/images/iPhone_t.png";
import phoneTablet2 from "../../assets/images/iPhone_t@2x.png";
import phoneMobile from "../../assets/images/iPhone_m.png";
import phoneMobile2 from "../../assets/images/iPhone_m@2x.png";
import decorD from "../../assets/images/decor_d.png";
import decorD2 from "../../assets/images/decor_d@2x.png";
import decorT from "../../assets/images/decor_t.png";
import decorT2 from "../../assets/images/decor_t@2x.png"


const SectionHero = () => {
  return (
    <section className={s.heroPage}>
      <Container isHero={true}>
        <h1 className={s.title}>Introducing Mobileapp</h1>
        <h3 className={s.subtitle}>Download our mobile app today!</h3>
        <ul className={s.list}>
          <li className={s.listItem}>
            <MdArrowForwardIos className={s.icon} size={16} />
            <p className={s.text}>
              Real-time updates and notifications for timely information
            </p>
          </li>
          <li className={s.listItem}>
            <MdArrowForwardIos className={s.icon} size={16} />
            <p className={s.text}>
              Robust analytics and reporting for data-driven insights
            </p>
          </li>
          <li className={s.listItem}>
            <MdArrowForwardIos className={s.icon} size={16} />
            <p className={s.text}>Offline capabilities for uninterrupted use</p>
          </li>
        </ul>
        <button className={s.button} type="button">
          Download
        </button>
        <picture className={s.decorImages}>
        <source media="(min-width:1280px )" srcSet={`${decorD} 1x, ${decorD2} 2x`} />
            <source media="(min-width: 768px)" srcSet={`${decorT} 1x, ${decorT2} 2x`} />
            <img src={decorT} alt="iPhone" sizes="336" srcSet={decorT2} />
        </picture>
        <picture className={s.phoneImages}>
          <source
            media="(min-width:1280px )"
            srcSet={`${phoneDesktop} 1x, ${phoneDesktop2} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${phoneTablet} 1x, ${phoneTablet2} 2x`}
          />
          <img
            src={phoneMobile}
            alt="iPhone"
            sizes="475"
            srcSet={phoneMobile2}
          />
        </picture>
      </Container>
    </section>
  );
};
export default SectionHero;
