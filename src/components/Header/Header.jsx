import { GrMenu } from "react-icons/gr";
import Container from "../Container/Container";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
  return (
    <>
      <section className={s.headerPage}>
        <Container isHeader={true}>
          <Logo />
          <Navigation />

          <button className={s.button} type="button">
            <GrMenu className={s.icon} size={24} />
          </button>
        </Container>
      </section>
    </>
  );
};
export default Header;
