import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

import s from './SectionReviews.module.css';
import Container from '../Container/Container';
import ReviewCard from '../ReviewCard/ReviewCard';
import jon from '../../assets/images/Ellipse_m.png';
import jon2 from '../../assets/images/Ellipse_m@2x.png';
import anna from '../../assets/images/review1.png';
import zoi from '../../assets/images/review2.png';

const SectionReviews = () => {
  return (
    <section id="reviews" className={s.reviewsPage}>
      <Container>
        <h2 className={s.title}>WHAT OUR COSTUMER`S SAY</h2>
        <Swiper slidesPerView={1} pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <ReviewCard
              photo1={jon}
              photo2={jon2}
              user="Jon Doe"
              company="Company Inc."
              text="I've been using this app for a few weeks now and I have to
                say, I'm really impressed. It's so easy to use and the
                personalized recommendations are spot-on. Plus, the transactions
                are secure and the updates are always timely. I would definitely
                recommend this app to anyone looking for a better mobile
                experience."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              photo1={anna}
              photo2={anna}
              company="Iseelong Ltd"
              user="Anna Loily"
              text="I've been using this app for a few weeks now and I have to
                say, I'm really impressed. It's so easy to use and the
                personalized recommendations are spot-on. Plus, the transactions
                are secure and the updates are always timely. I would definitely
                recommend this app to anyone looking for a better mobile
                experience."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              photo1={zoi}
              photo2={zoi}
              company="Poland Co"
              user="Zoi Sting"
              text="I've been using this app for a few weeks now and I have to
                say, I'm really impressed. It's so easy to use and the
                personalized recommendations are spot-on. Plus, the transactions
                are secure and the updates are always timely. I would definitely
                recommend this app to anyone looking for a better mobile
                experience."
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};
export default SectionReviews;
