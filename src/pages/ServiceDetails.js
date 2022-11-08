import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ServiceDetails = () => {
    const service = useLoaderData();

    const { _id, name, desc, img, price, rating } = service;
    useTitle(name);

    const ratings = [];
    for (let i = 0; i < rating; i++) {
        ratings.push(<StarIcon key={i} className="w-5 h-5 text-orange" />);
    }

    return (
        <div>
            {/* Service Details */}
            <div>
                <h1 className="text-3xl font-bold text-center text-orange">
                    Service Details
                </h1>
                <div className="mb-5" />
                <div className="p-5 shadow-md bg-gray-dark shadow-gray-dark">
                    <div className="flex flex-col justify-between gap-5 md:flex-row">
                        <div className="w-full overflow-hidden">
                            <PhotoView src={img}>
                                <img
                                    className="w-full transition-all duration-300 cursor-pointer ease hover:scale-110"
                                    src={img}
                                    alt=""
                                />
                            </PhotoView>
                        </div>
                        <div className="w-full">
                            <h1 className="mb-3 text-2xl font-bold">{name}</h1>
                            <p className="mb-3 text-gray-light">{desc}</p>
                            <div className="flex items-center gap-1 mb-3">
                                {ratings}
                            </div>
                            <p className="text-3xl font-light ">$ {price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10" />
            {/* Service Reviews */}
            <div>
                <h1 className="text-3xl font-bold text-center text-orange">
                    Service Reviews
                </h1>
                <div className="mb-5" />
                <div></div>
            </div>
        </div>
    );
};

export default ServiceDetails;
