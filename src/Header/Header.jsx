import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import HeaderAuthorization from "./HeaderAuthorization"
import HeaderRegistration from "./HeaderRegistration";

function Header(props) {
  let loadNew = props.load
  let headerClassLoad  = !loadNew ?  " header-active": ""

  const [headerState, setHeaderState] = useState(false)
  function handleClick (){
    setHeaderState(headerState => !headerState)
  }
  let headerClassOpen = headerState ? " header-open": ""

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  let headerClassNameScroll = scroll ? " header-active": ""

  const [serachOpen, setSearchOpen] = useState(false)
  function btnSearch (){
    setSearchOpen(serachOpen => !serachOpen)
  }
  let searchClassName = serachOpen ? " search__input-active" : ""
  let headerSearchOpen = serachOpen ? " header-active": ""

  const [authorize, setAuthorize] = useState(false)
  function authorization(e){
    e.preventDefault()
    setAuthorize(authorize => !authorize)
    if (registration == true){
      setRegistration(false)
    }
  }
  let authorizationClassName = authorize ? " authorization-open" : ""

  const[registration, setRegistration] = useState(false)

  return (
    <div className={`header${headerClassLoad}${headerClassNameScroll}${headerSearchOpen}${headerClassOpen}`} >
        <button onClick={handleClick} className="header__gamburger">
          <div className="line"></div>
        </button>

        <nav className="header__navigation">
          <ul className="header__navigation__wrapper">
            <li><NavLink  className={({ isActive }) => (isActive ? 'navigation__item navigation__item-select' : 'navigation__item')} to="/Page/New/New.jsx">New</NavLink></li>
            <li><NavLink  className={({ isActive }) => (isActive ? 'navigation__item navigation__item-select' : 'navigation__item')} to="/Page/Catalog/Catalog">Каталог</NavLink></li>
            <li><NavLink  className={({ isActive }) => (isActive ? 'navigation__item navigation__item-select' : 'navigation__item')} to="/Page/AboutUs/AboutUs">О нас</NavLink></li>
            <li><NavLink  className={({ isActive }) => (isActive ? 'navigation__item navigation__item-none navigation__item-select' : 'navigation__item navigation__item-none')} to="/Page/Delivery/Delivery">Оплата и доставка</NavLink></li>
            <li><NavLink  className={({ isActive }) => (isActive ? 'navigation__item navigation__item-none navigation__item-select' : 'navigation__item navigation__item-none')} to="/Page/Refund/Refund">Условия возврата</NavLink></li>
            <li><NavLink  className={({ isActive }) => (isActive ? 'navigation__item navigation__item-none navigation__item-select' : 'navigation__item navigation__item-none')} to="/Page/Contact/Contact">Контакты</NavLink></li>
          </ul>
        </nav>
        <Link className="logo" to="/Page/New/New.jsx">
          <svg width="159" height="40" viewBox="0 0 159 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.33803 0L17.4085 21.5211L30.5915 0H34.8732L19.3803 25.1268V40H15.4366V25.0141L0 0H4.33803Z" fill="white"/>
          <path d="M48.7474 0H52.0713L68.691 40H64.522L59.3389 27.493H41.3671L36.2403 40H32.015L48.7474 0ZM58.4375 24.3944L50.3812 4.61972L42.2121 24.3944H58.4375Z" fill="white"/>
          <path d="M78.3688 7.26761V40H74.4252V0H77.6928L103.946 33.3521V0.0563369H107.89V40H104.228L78.3688 7.26761Z" fill="white"/>
          <path d="M117.944 40V0.0563369H121.888V23.2676L143.916 0H148.254L131.916 17.5775L149.099 40H144.648L129.381 19.9437L121.888 27.7183V40H117.944Z" fill="white"/>
          <path d="M154.146 40V0H158.089V40H154.146Z" fill="white"/>
          </svg>
        </Link>
        <div className="header__dialog">
          <div className="lang">
            <span className="dialog__text">RU</span>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="white"/>
            </svg>
          </div>
          <div className="currency">
            <span className="dialog__text">UAH</span>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3.88903L8.88906 -3.05661e-05L10 1.11091L5 6.1109L-4.85606e-08 1.1109L1.11094 -3.09061e-05L5 3.88903Z" fill="white"/>
            </svg>
          </div>
        </div>

        <div className="header__account">
            <div className="header__account__item account__search">
              <input className={`search__input ${searchClassName}`} type="search" name="" id="" />
              <button onClick={btnSearch} className="search__icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_100_26)">
                  <path d="M19.729 17.9888L25 23.2586L23.2586 25L17.9888 19.729C16.028 21.3009 13.5892 22.1558 11.0761 22.1522C4.9621 22.1522 0 17.1901 0 11.0761C0 4.9621 4.9621 0 11.0761 0C17.1901 0 22.1522 4.9621 22.1522 11.0761C22.1558 13.5892 21.3009 16.028 19.729 17.9888ZM17.2603 17.0757C18.8221 15.4695 19.6944 13.3165 19.6909 11.0761C19.6909 6.31584 15.8351 2.46136 11.0761 2.46136C6.31584 2.46136 2.46136 6.31584 2.46136 11.0761C2.46136 15.8351 6.31584 19.6909 11.0761 19.6909C13.3165 19.6944 15.4695 18.8221 17.0757 17.2603L17.2603 17.0757Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_100_26">
                  <rect width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <Link onClick={authorization} to="/Page/PesonalAccount/PersonalAccount" className="header__account__item account__personal">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_100_31)">
                <path d="M2.5 25C2.5 22.4741 3.5034 20.0517 5.28946 18.2656C7.07552 16.4796 9.49794 15.4762 12.0238 15.4762C14.5497 15.4762 16.9721 16.4796 18.7582 18.2656C20.5442 20.0517 21.5476 22.4741 21.5476 25H19.1667C19.1667 23.1056 18.4141 21.2888 17.0746 19.9492C15.735 18.6097 13.9182 17.8571 12.0238 17.8571C10.1294 17.8571 8.31259 18.6097 6.97305 19.9492C5.6335 21.2888 4.88095 23.1056 4.88095 25H2.5ZM12.0238 14.2857C8.07738 14.2857 4.88095 11.0893 4.88095 7.14286C4.88095 3.19643 8.07738 0 12.0238 0C15.9702 0 19.1667 3.19643 19.1667 7.14286C19.1667 11.0893 15.9702 14.2857 12.0238 14.2857ZM12.0238 11.9048C14.6548 11.9048 16.7857 9.77381 16.7857 7.14286C16.7857 4.5119 14.6548 2.38095 12.0238 2.38095C9.39286 2.38095 7.2619 4.5119 7.2619 7.14286C7.2619 9.77381 9.39286 11.9048 12.0238 11.9048Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_100_31">
                <rect width="25" height="25" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </Link>
            <div className="header__account__item account__favorite">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_100_34)">
                <path d="M12.501 3.16119C15.4372 0.524988 19.9746 0.612487 22.8033 3.44618C25.6308 6.28113 25.7283 10.796 23.0983 13.741L12.4985 24.3558L1.90122 13.741C-0.728729 10.796 -0.62998 6.27363 2.19622 3.44618C5.02741 0.616237 9.55608 0.521238 12.501 3.16119ZM21.0334 5.2124C19.1584 3.33494 16.1335 3.25869 14.171 5.02115L12.5023 6.51863L10.8323 5.0224C8.86359 3.25744 5.8449 3.33494 3.96493 5.2149C2.10247 7.07737 2.00872 10.0586 3.72494 12.0285L12.4998 20.8171L21.2746 12.0298C22.9921 10.0586 22.8983 7.08112 21.0334 5.2124Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_100_34">
                <rect width="25" height="25" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div className="header__account__item account__cart">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_100_37)">
                <path d="M3.81655 5.48063L0 1.66525L1.66525 0L5.48063 3.81655H23.4183C23.6017 3.81654 23.7826 3.85941 23.9466 3.94173C24.1105 4.02406 24.2529 4.14356 24.3624 4.2907C24.4719 4.43785 24.5456 4.60856 24.5774 4.78921C24.6092 4.96986 24.5984 5.15545 24.5457 5.33117L21.7213 14.746C21.6486 14.9886 21.4997 15.2012 21.2966 15.3524C21.0935 15.5035 20.847 15.5852 20.5938 15.5851H6.17027V17.9389H19.1157V20.2926H4.99341C4.68129 20.2926 4.38195 20.1686 4.16125 19.9479C3.94054 19.7272 3.81655 19.4278 3.81655 19.1157V5.48063ZM6.17027 6.17027V13.2314H19.7183L21.8366 6.17027H6.17027ZM5.58184 25C5.11366 25 4.66465 24.814 4.33359 24.483C4.00254 24.1519 3.81655 23.7029 3.81655 23.2347C3.81655 22.7665 4.00254 22.3175 4.33359 21.9865C4.66465 21.6554 5.11366 21.4694 5.58184 21.4694C6.05002 21.4694 6.49903 21.6554 6.83009 21.9865C7.16114 22.3175 7.34713 22.7665 7.34713 23.2347C7.34713 23.7029 7.16114 24.1519 6.83009 24.483C6.49903 24.814 6.05002 25 5.58184 25ZM19.7041 25C19.236 25 18.7869 24.814 18.4559 24.483C18.1248 24.1519 17.9388 23.7029 17.9388 23.2347C17.9388 22.7665 18.1248 22.3175 18.4559 21.9865C18.7869 21.6554 19.236 21.4694 19.7041 21.4694C20.1723 21.4694 20.6213 21.6554 20.9524 21.9865C21.2834 22.3175 21.4694 22.7665 21.4694 23.2347C21.4694 23.7029 21.2834 24.1519 20.9524 24.483C20.6213 24.814 20.1723 25 19.7041 25Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_100_37">
                <rect width="25" height="25" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
        </div>
        <HeaderAuthorization authorizationClassName={authorizationClassName} authorize={authorize} setAuthorize={setAuthorize } registration={registration} setRegistration={setRegistration}/>
        <HeaderRegistration authorize={authorize} setAuthorize={setAuthorize } registration={registration} setRegistration={setRegistration}/>
    </div>
  );
}

export default Header;
