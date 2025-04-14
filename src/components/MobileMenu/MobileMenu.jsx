import Logo from '../Logo/Logo';
import s from './MobileMenu.module.css';
import { MdClose } from 'react-icons/md';

const MobileMenu = ({ isMenuOpen, closeMenu }) => {
  if (!isMenuOpen) return null;
  return (
    <>
      <div className={s.wraper}>
        <div className={s.box}>
          <div className={s.mobileMenuHeader}>
            <Logo className={s.logoMobMenu} />
            <span onClick={closeMenu}>
              <MdClose size={32} className={s.icon} />
            </span>
          </div>
          <nav className={s.mobileMenu}>
            <ul className={s.list}>
              <li>
                <a className={s.link} href="/#hero" onClick={closeMenu} >
                  HOME
                </a>
              </li>
              <li>
                <a className={s.link} href="/#features" onClick={closeMenu} >
                  FEATURES
                </a>
              </li>
              <li>
                <a className={s.link} href="/#team" onClick={closeMenu} >
                  TEAM
                </a>
              </li>
              <li>
                <a className={s.link} href="/#reviews" onClick={closeMenu} >
                  TESTIMONIALS
                </a>
              </li>
              <li>
                <a className={s.link} href="/#contact" onClick={closeMenu} >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
