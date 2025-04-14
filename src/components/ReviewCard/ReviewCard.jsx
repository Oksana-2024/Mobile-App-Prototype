import s from './ReviewCard.module.css';
const ReviewCard = ({ photo1, photo2, user, company, text }) => {
  return (
    <>
     <div className={s.imgBox}>
          <img
            className={s.img}
            src={photo1}
            alt="Reviewer"
            srcSet={photo2}
            width={181}
            height={181}
          />
     </div>
      <h3 className={s.subTitle}>{user}</h3>
      <p className={s.descr}>{company}</p>
      <p className={s.text}>{text}</p>
    </>
  );
};

export default ReviewCard;
