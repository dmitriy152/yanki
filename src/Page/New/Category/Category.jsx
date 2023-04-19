import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import CategoryCard from "./CategoryCard";
import jacket from "../../../img/category/jacket.png"
import coat from "../../../img/category/coat.png"
import fur from "../../../img/category/fur.png"
import park from "../../../img/category/park.png"

function Category() {
  
  return (
    <div className="category">
      <h2 className="category__title">Категории</h2>
      <Swiper spaceBetween={0} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="category__slide">
          <CategoryCard label="Куртки" img={jacket}/>
          <CategoryCard label="Пальто" img={coat}/>
          <CategoryCard label="Шубы" img={fur}/>
          <CategoryCard label="Парки" img={park}/>
        </SwiperSlide>
        <SwiperSlide className="category__slide">
          <CategoryCard label="Куртки" img={jacket}/>
          <CategoryCard label="Пальто" img={coat}/>
          <CategoryCard label="Шубы" img={fur}/>
          <CategoryCard label="Парки" img={park}/>
        </SwiperSlide>
        <SwiperSlide className="category__slide">
          <CategoryCard label="Куртки" img={jacket}/>
          <CategoryCard label="Пальто" img={coat}/>
          <CategoryCard label="Шубы" img={fur}/>
          <CategoryCard label="Парки" img={park}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Category;
