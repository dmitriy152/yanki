import React from "react";
import { Link } from "react-router-dom";
import arrowDuwn from "../../../img/catalog/arrow_duwn.svg"

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
            <li></li>
        </ul>
    </div>
  );
}

export default CatalogCards;
