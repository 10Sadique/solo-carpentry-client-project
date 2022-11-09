import React, { useContext, useEffect, useState } from 'react';
import Services from '../components/Services';
import Spinner from '../components/Spinner';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(AuthContext);
    useTitle('Services');

    useEffect(() => {
        fetch(`https://solo-carpentry-server.vercel.app/services`)
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center my-40">
                <Spinner />
            </div>
        );
    }

    return (
        <div>
            <Services services={services} />
        </div>
    );
};

export default ServicesPage;
