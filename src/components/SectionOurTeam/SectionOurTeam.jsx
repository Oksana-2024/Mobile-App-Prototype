import clsx from "clsx";

import Patel from "../../assets/images/David_Patel.png";
import Patel2 from "../../assets/images/David_Patel@2x.png";
import Kim from "../../assets/images/Rachel_Kim.png";
import Kim2 from "../../assets/images/Rachel_Kim@2x.png";
import Chen from "../../assets/images/Samantha_Chen.png";
import Chen2 from "../../assets/images/Samantha_Chen@2x.png";
import Nguyen from "../../assets/images/Andrew_Nguyen.png";
import Nguyen2 from "../../assets/images/Andrew_Nguyen@2x.png";
import Container from "../Container/Container";
import s from "./SectionOurTeam.module.css";

const SectionOurTeam = () => {
  return (
    <section className={s.ourteamPages} id="team">
      <Container>
        <h2 className={s.title}>Our team</h2>
        <p className={s.descr}>
          Our team is made up of talented and passionate individuals who are
          committed to providing the best experience for our users. Each member
          brings a unique set of skills and expertise to the table, allowing us
          to work collaboratively and effectively to achieve our goals.
        </p>
        <ul className={s.list}>
          <li className={clsx(s.itemList, s.patel)}>
            <img
              className={s.img}
              src={Patel}
              alt="David Patel"
              srcSet={Patel2}
              width={248}
            />
            <h3 className={s.subtitle}>David Patel</h3>
            <p className={s.text}>Managing Director</p>
          </li>
          <li className={clsx(s.itemList, s.kim)}>
            <img
              className={s.img}
              src={Kim}
              alt="Rachel Kim"
              srcSet={Kim2}
              width={248}
            />
            <h3 className={s.subtitle}>Rachel Kim</h3>
            <p className={s.text}>Lead Designer</p>
          </li>
          <li className={clsx(s.itemList, s.chen)}>
            <img
              className={s.img}
              src={Chen}
              alt="Samantha Chen"
              srcSet={Chen2}
              width={248}
            />
            <h3 className={s.subtitle}>Samantha Chen</h3>
            <p className={s.text}>Lead Developer</p>
          </li>
          <li className={clsx(s.itemList, s.nguyen)}>
            <img
              className={s.img}
              src={Nguyen}
              alt="Andrew Nguyen"
              srcSet={Nguyen2}
              width={248}
            />
            <h3 className={s.subtitle}>Andrew Nguyen</h3>
            <p className={s.text}>Sr. UI Designer</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default SectionOurTeam;
