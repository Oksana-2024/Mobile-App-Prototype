import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li>
          <a className={s.link} href="/#hero">
            HOME
          </a>
        </li>
        <li>
          <a className={s.link} href="/#features">
            FEATURES
          </a>
        </li>
        <li>
          <a className={s.link} href="/#team">
            TEAM
          </a>
        </li>
        <li>
          <a className={s.link} href="/#reviews">
            TESTIMONIALS
          </a>
        </li>
        <li>
          <a className={s.link} href="/#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
