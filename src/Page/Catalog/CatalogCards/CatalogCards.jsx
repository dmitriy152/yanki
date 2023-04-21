import React from "react";
import { Link } from "react-router-dom";
import arrowDuwn from "../../../img/catalog/arrow_duwn.svg"
import CatalogCard from "./CatalogCard";
import whitePark from "../../../img/catalog/white_park.png"
import bluepark from "../../../img/catalog/blue__park.png"
import fur from "../../../img/catalog/fur.png"
import blueCoat from "../../../img/catalog/blue__coat.png"
function CatalogCards() {
  return (
    <div className="catalog__cards">
        <ul className="cards__filter">
            <li className="filter__item"><Link>Размер</Link><img src={arrowDuwn} alt=""/></li>
            <li className="filter__item"><Link>Цвет</Link><img src={arrowDuwn} alt=""/></li>
            <li className="filter__item"><Link>Цена</Link><img src={arrowDuwn} alt=""/></li>
            <li className="filter__item"><Link>Сортировать по</Link><img src={arrowDuwn} alt=""/></li>
        </ul>
        <ul className="cards__list">
            <CatalogCard img={whitePark} title="Белая куртка" price="2900 грн" size={["xxs", "xs", "s", "m", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={blueCoat} title="Синее пальто" price="3150 грн" size={[ "xs", "m", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={fur} title="Бежевая шуба" price="4200 грн" size={[ "xs", "s", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={bluepark} title="Голубая парка" price="2900 грн" size={["xxs", "xs", "s", "m", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={whitePark} title="Белая куртка" price="2900 грн" size={["xxs", "xs", "s", "m", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={blueCoat} title="Синее пальто" price="3150 грн" size={[ "xs", "m", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={fur} title="Бежевая шуба" price="4200 грн" size={[ "xs", "s", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={bluepark} title="Голубая парка" price="2900 грн" size={["xxs", "xs", "s", "m", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={whitePark} title="Белая куртка" price="2900 грн" size={["xxs", "xs", "s", "m", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={blueCoat} title="Синее пальто" price="3150 грн" size={[ "xs", "m", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={fur} title="Бежевая шуба" price="4200 грн" size={[ "xs", "s", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
            <CatalogCard img={bluepark} title="Голубая парка" price="2900 грн" size={["xxs", "xs", "s", "m", "l"]} color={["#FFFFFF" , "#6F83A4", "#F1DDAA"]}/>
        </ul>
    </div>
  );
}

export default CatalogCards;
