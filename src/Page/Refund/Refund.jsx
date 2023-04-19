import React from "react";
import PageItemSelect from "../PageItemSelect/PageItemSelect";
import tag from "../.././img/refund/tag.svg"
import clock from "../.././img/refund/clock.svg"
import handcart from "../.././img/refund/handcart.svg"
import blank from "../.././img/refund/blank.svg"
import money from "../.././img/refund/money.svg"
import card from "../.././img/refund/card.svg"
import RefundCard from "./RefundCard";

function Refund() {
  return (
    <div className="refund">
       <PageItemSelect select="Обмен и воврат"/>
       <h2 className="refund__title">Обмен и возврат</h2>
       <p className="refund__subtitle">Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат
      </p>
      <p className="refund__description">Обмен и возврат возможен в случае :</p>
      <ul className="refund__cards">
        <RefundCard img={tag} description="если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки, упаковочные материалы)"/>
        <RefundCard img={clock} description="возврат и обмен осуществляется в течение двух дней с момента получения заказа"/>
        <RefundCard img={handcart} description="возврат и обмен товара возможен только при отправке по Украине"/>
        <RefundCard img={blank} description="бланк возврата присутствует в каждой посылке"/>
        <RefundCard img={money} description="все расходы по обмену и возврату товара несет покупатель"/>
        <RefundCard img={card} description="после получения возврата мы делаем перевод денежных средств на карту клиента"/>
      </ul>
    </div>
  );
}

export default Refund;
