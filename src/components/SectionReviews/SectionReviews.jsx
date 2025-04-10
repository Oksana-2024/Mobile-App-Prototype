import Container from "../Container/Container";
import s from "./SectionReviews.module.css";
import photo1 from "../../assets/images/Ellipse_m.png";
import photo2 from "../../assets/images/Ellipse_m@2x.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';

const SectionReviews = () => {
  return (
    <section id="reviews" className={s.reviewsPage}>
      <Container>
        <h2 className={s.title}>WHAT OUR COSTUMER`S SAY</h2>
        <Swiper slidesPerView={1} pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <img
              className={s.img}
              src={photo1}
              alt=""
              srcSet={photo2}
              width={181}
            />
            <h3 className={s.subTitle}>Jon Doe</h3>
            <p className={s.descr}>Company Inc.</p>
            <p className={s.text}>
              I&apos;ve been using this app for a few weeks now and I have to
              say, I&apos;m really impressed. It&apos;s so easy to use and the
              personalized recommendations are spot-on. Plus, the transactions
              are secure and the updates are always timely. I would definitely
              recommend this app to anyone looking for a better mobile
              experience.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={s.img}
              src={photo1}
              alt=""
              srcSet={photo2}
              width={181}
            />
            <h3 className={s.subTitle}>Jon Doe</h3>
            <p className={s.descr}>Company Inc.</p>
            <p className={s.text}>
              I&apos;ve been using this app for a few weeks now and I have to
              say, I&apos;m really impressed. It&apos;s so easy to use and the
              personalized recommendations are spot-on. Plus, the transactions
              are secure and the updates are always timely. I would definitely
              recommend this app to anyone looking for a better mobile
              experience.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={s.img}
              src={photo1}
              alt=""
              srcSet={photo2}
              width={181}
            />
            <h3 className={s.subTitle}>Jon Doe</h3>
            <p className={s.descr}>Company Inc.</p>
            <p className={s.text}>
              I&apos;ve been using this app for a few weeks now and I have to
              say, I&apos;m really impressed. It&apos;s so easy to use and the
              personalized recommendations are spot-on. Plus, the transactions
              are secure and the updates are always timely. I would definitely
              recommend this app to anyone looking for a better mobile
              experience.
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};
export default SectionReviews