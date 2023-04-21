import heart from "../../../img/catalog/heart.svg"
function CatalogCard (props){
    let color = props.color.map((i) => <li className="color_circle" style={{backgroundColor: i}}></li>)
    let size = props.size.map((ind) => <li className="size__item">{ind}</li>)
    return(
        <li className="catalod__card">
            <picture>
                <img className="card__img" src={props.img} alt="" />
            </picture>
            <div className="card__info">
                <h4 className="card__title">{props.title}</h4>
                <h5 className="card__price">{props.price}</h5>
                <ul className="card__size">
                    {size}
                </ul>
                <ul className="card__color">
                    {color}
                </ul>
            </div>
            <button className="card__favorite">
                <img src={heart} alt="" />
            </button>
        </li>
    )
}
export default CatalogCard