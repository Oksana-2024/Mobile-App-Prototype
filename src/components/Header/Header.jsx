import { GrMenu } from "react-icons/gr";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";
import { useMediaQuery } from "@mui/material";

const Header = () => {
  const isSmallScreen = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <section className={s.headerPage}>
        <Container className={s.headerContainer}>
          <Logo />
          {isSmallScreen ? (
            <Navigation />
          ) : (
            <button className={s.button} type="button">
              <GrMenu className={s.icon} size={24} />
            </button>
          )}
        </Container>
      </section>
    </>
  );
};
export default Header;
