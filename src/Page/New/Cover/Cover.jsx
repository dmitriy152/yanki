import React from "react";
import { Link } from "react-router-dom";
import cover1 from "../../../img/cover/cover_png_1.png"
import cover2 from "../../../img/cover/cover_png_2.png"
import cover3 from "../../../img/cover/cover_png_3.png"
function Cover() {
  return (
    <div className="cover">
      <div className="cover__bg">
        <Link className="cover__bg__link">
          <picture>
            <img className="cover__bg__img" src={cover1} alt="" />
          </picture>
        </Link>
        <Link className="cover__bg__link">
          <picture>
            <img className="cover__bg__img" src={cover2} alt="" />
          </picture>
        </Link>
        <Link className="cover__bg__link">
          <picture>
            <img className="cover__bg__img" src={cover3} alt="" />
          </picture>
        </Link>
      </div>
      <div className="cover__text">
          <h2 className="cover__title">Новая коллекция</h2>
          <Link className="cover__link" to="">Смотреть Новинки</Link>
        </div>
    </div>
  );
}

export default Cover;
