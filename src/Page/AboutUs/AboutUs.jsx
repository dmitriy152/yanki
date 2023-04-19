import React from "react";
import PageItemSelect from "../PageItemSelect/PageItemSelect";
import yanki from "../../img/about_us/YANKI.svg"
import Marquee from 'react-double-marquee';

function AboutUs() {
  return (
    <div className="about__us">
      <PageItemSelect select="О нас"/>
      <h2 className="about__us__title">О нас</h2>
      <div className="about__us__info">
        <p>
          YANKI-украинский производитель и онлайн дистрибьютор современной женской одежды. При пошиве наших изделий мы отдаем предпочтение натуральным тканям и благородным оттенкам которые будут актуальны не один сезон.
        </p>
        <p>
          Мы хотим, чтобы каждая девушка знала, что она особенная.Не боялась себя и через нашу одежду могла проявить свою индивидуальность.
        </p>
        <p>
          Мы всегда стремимся совершенствовать наши изделия и нашу работу если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами. Нам очень важно Ваше мнение!
        </p>
        <p>
          Спасибо, что выбрали, YANKEE!
        </p>
      </div>
      <h2 className="philosophy__title">Философия YANKI</h2>
      <div className="philosophy__info">
        <p>
          Философия бренда-это то, что исходит из сердца. То что делает тебя неповторимой. Не изменяйте себе и соглашайтесь только на лучшее!
        </p>
      </div>
      <div className="about__us__marquee" style={{  width: '100%', whiteSpace: 'nowrap',}}>
        <Marquee delay={500} direction="left">
          <img className="about__us__marquee__img" src={yanki} alt="" />
          <img className="about__us__marquee__img" src={yanki} alt="" />
          <img className="about__us__marquee__img" src={yanki} alt="" />
          <img className="about__us__marquee__img" src={yanki} alt="" />
          <img className="about__us__marquee__img" src={yanki} alt="" />
          <img className="about__us__marquee__img" src={yanki} alt="" />
          <img className="about__us__marquee__img" src={yanki} alt="" />
          <img className="about__us__marquee__img" src={yanki} alt="" />
        </Marquee>
      </div>
    </div>
  );
}

export default AboutUs;
