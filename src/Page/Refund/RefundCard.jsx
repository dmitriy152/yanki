import React from "react";

function RefundCard(props) {
  return (
    <li className="refund__card__item">
        <img className="card__icon" src={props.img} alt="" />
        <p className="card__description">{props.description}</p>
    </li>
  );
}

export default RefundCard;
