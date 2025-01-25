import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { NavHashLink } from "react-router-hash-link";


const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

export const Navigation = () => {
  return (
    <nav className={s.navlink}>
      <NavLink className={buildLinkClass} to="/">HOME</NavLink>
      <NavHashLink className={s.link} activeClassName={s.active} smooth to="/#features">FEATURES</NavHashLink>
      <NavLink className={buildLinkClass} to="/about">TEAM</NavLink>
      <NavHashLink className={s.link} activeClassName={s.active} smooth to="/#reviews">TESTIMONIALS</NavHashLink>
      <NavLink className={buildLinkClass} to="/contact">CONTACT</NavLink>
    </nav>
  );
};
