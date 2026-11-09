import logo from "../../assets/LENSS_logo_transparente.png"
import { NavLink } from "react-router-dom"

import "./Menu.css"

function Menu() {
    return (
        <div className="container-fluid menu-container">
            <img src={logo} alt="Logo Lenz" width="100px" />
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/profile" className="nav-link">Perfil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/feed" className="nav-link">Feed</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/edit" className="nav-link">Edit</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu