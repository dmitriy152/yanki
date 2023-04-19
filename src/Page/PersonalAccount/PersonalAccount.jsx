import React, {useState} from "react"
import PageItemSelect from "../PageItemSelect/PageItemSelect"
import { NavLink,
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom"
import PersonalAccountNavigation from "./PersonalAccountNavigation/PersonalAccountNavigation"
import OrderHistory from "./OrderHistory/OrderHistory"
import PersonalData from "./PersonalData/PersonalData"
import Bonuses from "./Bonuses/Bonuses"


function PersonalAccount (){
    const [load,setLoad] = useState(false)

    return (
        <div className="personal__account">
            <PageItemSelect select="Личный кабинет"/>
            <PersonalAccountNavigation load={load} setLoad={setLoad}/>
            <Routes>
                <Route path="*" element={<OrderHistory load={load} setLoad={setLoad}  to="/" replace />}/>
                <Route exact path="OrderHistory/OrderHistory" element={<OrderHistory load={load} setLoad={setLoad}/>}/>
                <Route path="PersonalData/PersonalData" element={<PersonalData/>}/>
                <Route path="Bonuses/Bonuses" element={<Bonuses/>}/>
            </Routes>
        </div>
    )
}
export default PersonalAccount