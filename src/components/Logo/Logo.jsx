import s from "./Logo.module.css";

const Logo = ({className}) => {
  return (
    <>
      <a href="/" className={`${s.logo} ${className}`}>
       Mobileapp
      </a>
    </>
  );
};

export default Logo