import React from "react"
import { Link } from "react-router-dom"
function HeaderAuthorization (props){
    let setAuthorize = props.setAuthorize
    function closeAutorization (e){
        e.preventDefault()
        setAuthorize(authorize => !authorize)
    }
    let setRegistration = props.setRegistration
    function registrationAccount(e){
        e.preventDefault()
        setAuthorize(authorize => !authorize);
        setRegistration(registration => !registration)
    }
    return(
        <form className={`authorization ${props.authorizationClassName}`}>
            <h3 className="authorization__title">Авторизация</h3>
            <input className="authorization__input" type="email" placeholder="Ваш e-mail*"/>
            <input className="authorization__input" type="password" name="" id="" placeholder="Ваш пароль*"/>
            <ul className="authorization__link">
                <li><Link>Забыли пароль?</Link></li>
                <li><Link onClick={registrationAccount}>Нет аккаунта?</Link></li>
            </ul>
            <input className="authorization__submit" type="submit" value="Войти" />
            <button className="authorization__close">
                <div onClick={closeAutorization} className="close__line"></div>
            </button>
        </form>
    )
}
export default HeaderAuthorization