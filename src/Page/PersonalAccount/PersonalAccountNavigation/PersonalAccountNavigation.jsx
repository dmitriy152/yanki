import React, {useState} from "react"
import { NavLink, Outlet } from "react-router-dom"
function PersonalAccountNavigation (props){
    let loadHistory = props.load
    let itemBg  = loadHistory ?  " personal__account__item-select": ""
    return (
        <ul className="personal__account__list">
            <li><NavLink to="OrderHistory/OrderHistory" className={`personal__account__item ${itemBg}`}>История заказов</NavLink></li>
            <li><NavLink to="PersonalData/PersonalData" className={({ isActive }) => (isActive ? 'personal__account__item personal__account__item-select' : 'personal__account__item')}>Личные данные</NavLink></li>
            <li><NavLink to="Bonuses/Bonuses" className={({ isActive }) => (isActive ? 'personal__account__item personal__account__item-select' : 'personal__account__item')}>Мои бонусы</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'personal__account__item personal__account__item-select' : 'personal__account__item')} to="/Page/New/New.jsx">Выйти</NavLink></li>
         </ul>
    )
}
export default PersonalAccountNavigation