import { FaApple } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import s from "./SectionWatch.module.css";
import Container from "../Container/Container";
import image1 from "../../assets/images/iPhone_X_m.png";
import image2 from "../../assets/images/iPhone_X_m@2x.png";
import decor from "../../assets/images/Shine2.png";
import decor2x from "../../assets/images/shine@2x.png";

const SectionWatch = () => {
  return (
    <section className={s.watchPage}>
      <Container className={s.watchContainer}>
       <div className={s.descrContainer}>
          <h2 className={s.title}>WATCH THE VIDEO</h2>
          <p className={s.text}>
            Watch the video below to see our mobile app in action. With a
            user-friendly interface, personalized recommendations, secure
            transactions, and real-time updates, our app is available for download
            on both Apple and Android devices and is designed to make your life
            easier.
          </p>
          <ul className={s.listIcon}>
            <li>
              <a className={s.linkIcon} href="http://" target="_blank">
                <FaApple size={30} className={s.icon} />
              </a>
            </li>
            <li>
              <a className={s.linkIcon} href="http://" target="_blank">
                <GrAndroid size={30} className={s.icon} />
              </a>
            </li>
          </ul>
       </div>

        <img
          className={s.image}
          src={image1}
          alt="iPhone"
          srcSet={image2}
          width={280}
        />
      
          <img
            className={s.decor}
            src={decor}
            alt="Shine"
            srcSet={decor2x}
            width={280}
          />
       
      </Container>
    </section>
  );
};

export default SectionWatch;
