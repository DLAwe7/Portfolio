import { NavLink } from "react-router-dom";
import "./NavBarDesktop.css"
import useNavBarController from "../hooks/useNavBarController";




function NavBarDesktop() {


    const headerList = useNavBarController();

    return (<nav className="nav-bar" aria-label="Main Navigation">

        <ul className="nav-bar-ul">

            {headerList.map((item) => (

                <li key={item.id}>

                    <NavLink to={item.url} className={({ isActive }) => `header-anchor ${isActive ? "active" : ""}`}>{item.title}</NavLink>

                </li>

            ))}

        </ul>

    </nav >)




}

export default NavBarDesktop;