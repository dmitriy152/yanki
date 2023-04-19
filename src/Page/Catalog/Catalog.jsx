import React from "react";
import CatalogAside from "./CatalogAside/CatalogAside";
import CatalogCards from "./CatalogCards/CatalogCards";
import PageItemSelect from "../PageItemSelect/PageItemSelect";

function Catalog() {
  return (
    <div className="catalog">
        <PageItemSelect select="Каталог"/>
        <div className="catalog__wrapper">
          <CatalogAside/>
          <CatalogCards/>
        </div>
    </div>
  );
}

export default Catalog;
