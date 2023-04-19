function BonusesItem (props){
    return (
        <li className="bonuses__item">
            <div className="order__number">
                {props.order}
            </div>
            <div className="accrued">
                <h4 className="item__title">Начислено:</h4>
                <p className="item__value">
                    {props.accrued}
                </p>
            </div>
            <div className="written__off">
                <h4 className="item__title">Списано:</h4>
                <p className="item__value">
                    {props.writtenoff}
                </p>
            </div>
            <div className="activation">
                <h4 className="item__title">Активация:</h4>
                <p className="item__value">
                    {props.activation}   
                </p>
            </div>
            <div className="combustion">
                <h4 className="item__title">Сгорание:</h4>
                <p className="item__value">
                    {props.combustion}
                </p>
            </div>
        </li>
    )
}
export default BonusesItem