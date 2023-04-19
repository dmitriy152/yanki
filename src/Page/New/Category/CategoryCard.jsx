import React from "react";
import { Link } from "react-router-dom";


function CategoryCard(props) {
  return (
    <Link className="category__card">
        <picture>
            <img className="category__card__img" src={props.img} alt="" />
        </picture>
        <span className="category__card__label">{props.label}</span>
    </Link>
  );
}

export default CategoryCard;
