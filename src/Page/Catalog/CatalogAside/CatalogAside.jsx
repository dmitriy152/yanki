import React from "react";
import { Link } from "react-router-dom";

function CatalogAside() {
  return (
    <div className="catalog__aside">
        <h2 className="catalog__aside__title">Каталог</h2>
        <ul>
            <li className="catalog__aside__item"><Link>New</Link></li>
            <li className="catalog__aside__item"><Link>Bestsellers</Link></li>
            <li className="catalog__aside__item"><Link>Верхняя одежда</Link></li>
            <li className="catalog__aside__item"><Link>Шубы</Link></li>
            <li className="catalog__aside__item"><Link>Тренчи</Link></li>
            <li className="catalog__aside__item"><Link>Пальто</Link></li>
            <li className="catalog__aside__item"><Link>Пуховики и жилеты</Link></li>
            <li className="catalog__aside__item"><Link>Костюмы</Link></li>
            <li className="catalog__aside__item"><Link>Жакеты</Link></li>
            <li className="catalog__aside__item"><Link>Платья</Link></li>
            <li className="catalog__aside__item"><Link>Рубашки и блузы</Link></li>
            <li className="catalog__aside__item"><Link>Юбки</Link></li>
            <li className="catalog__aside__item"><Link>Футболки и топы</Link></li>
            <li className="catalog__aside__item"><Link>Аксессуары</Link></li>
            <li className="catalog__aside__item"><Link>Sale</Link></li>
            <li className="catalog__aside__item"><Link>Summer</Link></li>
            <li className="catalog__aside__item"><Link>Посмотреть всё</Link></li>
        </ul>
    </div>
  );
}

export default CatalogAside;
