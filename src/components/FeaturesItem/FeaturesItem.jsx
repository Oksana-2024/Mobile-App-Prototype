import clsx from "clsx";
import s from "./FeaturesItem.module.css";
import icon from "../../assets/images/Gear.png";
import icon2 from "../../assets/images/Gear@2x.png";

const FeaturesItem = ({ title, text}) => {
  return (
    <div className={s.list}>
      <div className={s.boxIcon}>
        <img
          className={s.icon}
          src={icon}
          alt="Icon"
          srcSet={icon2}
          width={28}
          height={28}
        />
      </div>
      <div className={clsx(s.descrBox, s.a)}>
        <h3 className={s.titleItem}>{title}</h3>
        <p className={s.textItem}>{text}</p>
      </div>
    </div>
  );
};
export default FeaturesItem;
