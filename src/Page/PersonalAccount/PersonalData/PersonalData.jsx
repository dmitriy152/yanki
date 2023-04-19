function PerosnalData (){
    return(
        <div className="personal__data">
            <form className="data__form" action="">
                <h3 className="form__title">Персональные данные</h3>
                <div className="form__line">
                    <input className="form__input" type="text" placeholder="Елизавета"/>
                    <input className="form__input" type="text" placeholder="Станиславчук"/>
                    <input className="form__input" type="email" placeholder="ella.s97@gmail.com"/>
                    <input className="form__input form__input__tel" type="tel" placeholder="+38(067)470 20 66"/>
                </div>
                <h3 className="form__title">Адрес доставки</h3>
                <div className="form__line">
                    <input className="form__input form__input__location" type="text"  placeholder="Черновцы"/>
                    <input className="form__input form__input__location house__number" type="text"  placeholder="№4"/>
                </div>
                <input className="form__submit" type="submit" value="ОБНОВИТЬ ИНФОРМАЦИЮ" />
            </form>
        </div>
    )
}
export default PerosnalData