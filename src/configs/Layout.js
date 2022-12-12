import Navigation from "./navigationConfig/Navigation";
import RoutesAdapter from "./routeConfig/RoutesAdapter";
import { BrowserRouter } from "react-router-dom";

function Layout() {
    return (
        <>
            <Navigation />
            <BrowserRouter>
                <RoutesAdapter />
            </BrowserRouter>
        </>
    )
}

export default Layout;