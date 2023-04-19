import React from "react";
import { Link } from "react-router-dom";

function FooterCompany() {
  return (
    <div className="footer__company">
        <h3 className="footer__company__title">КОМПАНИЯ</h3>
        <ul className="footer__company__list">
            <li className="footer__item"><Link to="/Page/AboutUs/AboutUs">О нас</Link></li>
            <li className="footer__item"><Link to="/Page/Contact/Contact">Контакты</Link></li>
        </ul>
    </div>
  );
}

export default FooterCompany;
