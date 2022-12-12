import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routeConfig from "./routeConfig";

function RoutesAdapter() {
    return (
        <>
            <Routes>
                {routeConfig.map((route, index) => (
                    <Route key={index} path={route.path}
                        element={
                            <React.Suspense>
                                {route.element}
                            </React.Suspense>
                        } />
                )
                )}
                <Route path="/" element={<Navigate to="/stores" />} />
                <Route path="*" element={<Navigate to="/stores" />} />
            </Routes>
        </>
    )
}

export default RoutesAdapter;