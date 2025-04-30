import * as React from "react";
import { Route, Routes } from "react-router-dom";


const LoginPage = React.lazy(() => import("../pages/login"));

export const AuthRoutes = () => {
    return (<>
        <Routes>
            <Route path="/auth/login" element={<LoginPage />} />
        </Routes>
    </>)
}