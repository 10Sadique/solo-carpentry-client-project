import React, { useEffect, useState } from 'react';
import Services from '../components/Services';
import useTitle from '../hooks/useTitle';

const ServicesPage = () => {
    const [services, setServices] = useState([]);
    useTitle('Services');

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    }, []);

    return (
        <div>
            <Services services={services} />
        </div>
    );
};

export default ServicesPage;
