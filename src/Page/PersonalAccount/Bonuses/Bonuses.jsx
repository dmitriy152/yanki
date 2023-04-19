import BonusesItem from "./BonusesItem"

function Bonuses (){
    return(
        <div className="bonuses">
            <h2 className="bonuses__title">Бонусный счёт:</h2>
            <h3 className="bonuses__counter">
                <span className="counter">250</span> 
                <span className="currency"> грн</span>
            </h3>
            <ul className="bonuses__list">
                <BonusesItem order="№ 718 от 28.09.21" accrued="56 грн" writtenoff="-" activation="28.09.21" combustion="28.09.23"/>
                <BonusesItem order="№ 328 от 10.07.21" accrued="-" writtenoff="60 грн" activation="10.07.21" combustion="10.07.23"/>
                <BonusesItem order="№ 235 от 03.05.21" accrued="254 грн" writtenoff="-" activation="03.05.21" combustion="03.05.23"/>
            </ul>
        </div>
    )
}
export default Bonuses