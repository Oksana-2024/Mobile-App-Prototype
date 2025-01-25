import { Link } from "react-router-dom";
import s from "./Logo.module.css";

export const Logo = () => {
  return (
    <>
      <Link to={"/home"}>
        <span className={s.logo}>Mobileapp</span>
      </Link>
    </>
  );
};
