import React from "react";
import { Link } from "react-router-dom";
import PageItemSelect from "../PageItemSelect/PageItemSelect";
import NewForm from "../New/NewForm/NewForm";
import inst from "../.././img/contact/inst.svg"
import telegram from "../.././img/contact/telegram.svg"

function Contact() {
  return (
    <div className="contact">
       <PageItemSelect select="Контакты"/>
       <div className="contact__info">
          <h3 className="contact__info__title">Связаться с нами</h3>
          <ul className="info__list">
            <li className="info__item">
               <h4 className="item__title">В социальных сетях</h4>
               <Link className="item__link item__link__icon"><img src={inst} alt="" /></Link>
               <Link className="item__link item__link__icon"><img src={telegram} alt="" /></Link>
            </li>
            <li className="info__item">
               <h4 className="item__title">По телефону</h4>
               <Link className="item__link">+38(067) 158 82 66</Link>
               <Link className="item__link">+38(073) 226 39 81</Link>
            </li>
            <li className="info__item">
               <h4 className="item__title">По почте</h4>
               <Link className="item__link">example@gmail.com</Link>
            </li>
            <li className="info__item">
               <h4 className="item__title">Наш офис</h4>
               <Link className="item__link">г. Киев, улица Батумская, 18</Link>
            </li>
          </ul>
       </div>
       <NewForm/>
    </div>
  );
}

export default Contact;
