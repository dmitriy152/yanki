import React from "react";
import { Link } from "react-router-dom";

function FooterBuyer() {
  return (
    <div className="footer__buyer">
        <h3 className="footer__company__title">ПОКУПАТЕЛЮ</h3>
        <ul className="footer__company__list">
            <li className="footer__item"><Link>Избранное</Link></li>
            <li className="footer__item"><Link>Публичная оферта</Link></li>
            <li className="footer__item"><Link>Политика конфиденциальности</Link></li>
        </ul>
    </div>
  );
}

export default FooterBuyer;
