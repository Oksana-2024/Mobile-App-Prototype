import { useDispatch } from "react-redux";
import Logo from "../Logo/Logo";
import s from "./MobileMenu.module.css";
import { MdClose } from "react-icons/md";
import { toggleMenu } from "../../redux/menuSlice";

const MobileMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.isOpen}>
      <div className={s.box}>
        <Logo />
        <span onClick={() => dispatch(toggleMenu)}>
          <MdClose size={32} />
        </span>
      </div>
    </div>
  );
};
export default MobileMenu;
