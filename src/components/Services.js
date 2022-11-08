import React from 'react';
import ServiceCard from './ServiceCard';

const Services = ({ services }) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-orange">
                My Services
            </h1>
            <div className="my-5" />
            <p className="font-semibold text-center text-gray-light">
                Never get behind on experience. Explore all services I provide.
            </p>
            <div className="my-10" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <ServiceCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
