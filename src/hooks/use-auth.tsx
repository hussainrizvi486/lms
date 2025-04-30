import { Navigate, Outlet } from 'react-router-dom';

export const useAuth = () => {
    const authenticated = true

    if (!authenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}