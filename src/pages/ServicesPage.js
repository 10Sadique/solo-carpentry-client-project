import React, { useEffect, useState } from 'react';
import Services from '../components/Services';

const ServicesPage = () => {
    const [services, setServices] = useState([]);

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
