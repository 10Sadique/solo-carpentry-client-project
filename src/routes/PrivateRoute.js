import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // spinner
    if (loading) {
        return (
            <div className="flex items-center justify-center my-20">
                <Spinner />
            </div>
        );
    }

    if (!user) {
        return <Navigate to={'/signin'} state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
