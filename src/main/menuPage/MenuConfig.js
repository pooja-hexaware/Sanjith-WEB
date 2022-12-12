import { lazy } from "react"

const MenuPage = lazy(() => import("./MenuPage"));

const MenuConfig = [
    {
        path: "/store/:storeid/menu",
        element: <MenuPage />
    }
]

export default MenuConfig