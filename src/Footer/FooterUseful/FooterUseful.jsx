import React from "react";
import { Link } from "react-router-dom";

function FooterUseful() {
  return (
    <div className="footer__useful">
        <h3 className="footer__company__title">ПОЛЕЗНОЕ</h3>
        <ul className="footer__company__list">
            <li className="footer__item"><Link to="/Page/Delivery/Delivery">Оплата и доставка</Link></li>
            <li className="footer__item"><Link to="/Page/Refund/Refund">Условия возврата</Link></li>
            <li className="footer__item"><Link>Бонусная система</Link></li>
        </ul>
    </div>
  );
}

export default FooterUseful;
