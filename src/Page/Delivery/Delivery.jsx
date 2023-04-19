import React from "react";
import PageItemSelect from "../PageItemSelect/PageItemSelect";
import step1 from "../.././img/delivery/step1.svg"
import step2 from "../.././img/delivery/step2.svg"
import step3 from "../.././img/delivery/step3.svg"


function Delivery() {
  return (
    <div className="delivery">
        <PageItemSelect select="Оплата и доставка"/>
        <h2 className="delivery__title">Оплата и доставка</h2>
        <div className="delivery__info">
          <div className="info__card">
            <h4 className="card__subtitle">Вы можете оплатить покупку одним из ниже перечисленных способов:</h4>
            <ul className="card__list">
              <li className="card__item">наложенным платежом в отделении Новой Почты</li>
              <li className="card__item">денежным переводом  Visa/MasterCard</li>
              <li className="card__item">полная предоплата через Приват 24</li>
            </ul>
          </div>
          <div className="info__card">
            <h4  className="card__subtitle">Мы готовы предложить несколько вариантов доставки: </h4>
            <ul className="card__list">
              <li className="card__item">отправка по всей Украине в отделение Новой Почты(1-2 дня)</li>
              <li className="card__item">международные сервисы доставки для жителей зарубежья: Укрпочта( 1-3 недели ,DHL(3-7 дней))</li>
              <li className="card__item">Срок доставки: 1–2 дня с момента  заказа</li>
            </ul>
          </div>
        </div>
        <div className="delivery__steps">Процесс оформления заказа с помощью LIQPAY:</div>
        <ul className="steps__list">
          <li className="steps__item step__one">
            <img className="step__item__icon" src={step1} alt="" />
            <span>Выбрать в корзине способ оплаты "LIQPAY";</span>
          </li>
          <li className="steps__item step__two">
            <img className="step__item__icon" src={step2} alt="" />
            <span>Подтвердить заказ;</span>
          </li>
          <li className="steps__item step__three">
            <img className="step__item__icon" src={step3} alt="" />
            <span>После этого Вас перенаправит на сайт LIQPAY, где вы выбираете удобный для вас способ оплаты: через Приват24, или с помощью карты Mastercard/VISA со всего мира.</span>
          </li>
        </ul>
    </div>
  );
}

export default Delivery;
