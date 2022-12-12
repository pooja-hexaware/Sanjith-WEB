import { lazy } from "react"

const StorePage = lazy(() => import("./StorePage"));

const StoreConfig = [
    {
        path: "/stores",
        element: <StorePage />
    }
]

export default StoreConfig