import React, {useState} from "react"
import { Link } from "react-router-dom"
function HeaderRegistration (props){
    let registration = props.registration
    let setRegistration = props.setRegistration
    function closeRegistration(e){
        e.preventDefault()
        setRegistration(registration => !registration)
    }
    let registrationClassName = registration ? " registration-open" : ""
    return(
        <form className={`authorization ${registrationClassName}`}>
            <h3 className="authorization__title">Регистрация</h3>
            <input className="authorization__input" type="email" placeholder="Ваш e-mail*"/>
            <input className="authorization__input" type="password" name="" id="" placeholder="Ваш пароль*"/>
            <input className="authorization__submit" type="submit" value="Продолжить" />
            <button onClick={closeRegistration} className="authorization__close">
                <div className="close__line"></div>
            </button>
        </form>
    )
}
export default HeaderRegistration