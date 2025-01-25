import Container from "../Container/Container";
import photo1 from "../../assets/images/25_low_d.png";
import photo2 from "../../assets/images/25_low_d@2x.png";
import photo3 from "../../assets/images/25_low_t.png";
import photo4 from "../../assets/images/25_low_t@2x.png";
import photo5 from "../../assets/images/25_low_m.png";
import photo6 from "../../assets/images/25_low_m@2x.png";
import s from "./SectionFeatures.module.css";
import clsx from "clsx";
import FeaturesItem from "../FeaturesItem/FeaturesItem";

const SectionFeatures = () => {
  return (
    <section id="features" className={s.featuresPage}>
      <Container isFeatures>
        <h2 className={s.title}>KEY FEATURES</h2>
        <p className={s.text}>
          Get the best mobile experience with our Mobileapp. With a
          user-friendly interface, personalized recommendations, secure
          transactions, and real-time updates, our app offers everything you
          need to stay connected and productive
        </p>
        <img
          className={s.mobileImg}
          src={photo5}
          alt="A man with a phone"
          srcSet={photo6}
        />
        <ul className={s.listFirst}>
          <li className={clsx(s.imgItem, s.item1)}>
            <img
              className={s.tabletImg}
              src={photo3}
              alt="A man with a phone"
              srcSet={photo4}
            />
          </li>
          <li className={clsx(s.listItem, s.item3)}>
            <FeaturesItem
              title="User-Friendly Interface:"
              text="Intuitive and easy-to-navigate interface designed to provide a
                seamless mobile experience for users."
            />
          </li>

          <li className={clsx(s.listItem, s.item4)}>
            <FeaturesItem
              title="Personalized Recommendations:"
              text="Donec posuere augue venenatis, aliquet ligula ut, tempus quam.
                Vivamus diam a iaculis malesuada"
            />
          </li>
          <li className={clsx(s.listItem, s.item5)}>
            <FeaturesItem
              title="Real-Time Updates:"
              text=" Users receive real-time updates and notifications to stay
                informed on important news and events, and to stay up-to-date
                with changes to the app."
            />
          </li>

          <li className={clsx(s.desktopItem, s.item2)}>
            <img
              className={s.desktopImg}
              src={photo1}
              alt="A man with a phone"
              srcSet={photo2}
            />
          </li>
          <li className={clsx(s.listItem, s.item6)}>
            <FeaturesItem
              title="Integration with Other Apps:"
              text="The app integrates with other popular apps, making it easy for
                users to connect with their social media accounts, or to easily
                make in-app purchases using their preferred payment method."
            />
          </li>
          <li className={clsx(s.listItem, s.item7)}>
            <FeaturesItem
              title="Multi-Language Support:"
              text="The app is designed to be accessible to users all around the
                world, with support for multiple languages, making it easier for
                people to use the app in their native language."
            />
          </li>
          <li className={clsx(s.listItem, s.item8)}>
            <FeaturesItem
              title="Offline Capabilities:"
              text=" The app offers offline capabilities, allowing users to access
                certain features and content even when they are not connected to
                the internet."
            />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default SectionFeatures;
