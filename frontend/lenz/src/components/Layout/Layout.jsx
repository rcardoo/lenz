import { Outlet } from "react-router-dom"
import Menu from "../Menu/Menu"

function Layout() {
    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default Layout