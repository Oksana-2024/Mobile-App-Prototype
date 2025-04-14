import { useMediaQuery } from '@mui/material';
import { GrMenu } from 'react-icons/gr';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = ({ isMenuOpen, toggleMenu }) => {
  const isSmallScreen = useMediaQuery('(min-width: 768px)');
 
 
  return (
    <>
      <section className={s.headerPage}>
        <Container className={s.headerContainer}>
          <Logo />
          {isSmallScreen ? (
            <Navigation />
          ) : (
            <button
              className={s.button}
              type="button"
              onClick={toggleMenu }
            >
              <GrMenu className={s.icon} size={24} />
            </button>
          )}
        </Container>
      </section>
      {isMenuOpen && (
        <MobileMenu/>
      )}
    </>
  );
};
export default Header;
