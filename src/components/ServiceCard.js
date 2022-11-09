import React from 'react';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
    const { _id, name, desc, price, rating, img } = service;

    const ratings = [];
    for (let i = 0; i < rating; i++) {
        ratings.push(<StarIcon key={i} className="w-5 h-5 text-orange" />);
    }

    return (
        <div className="p-5 shadow-md bg-gray-dark shadow-gray-dark">
            <div className="w-full md:h-[200px] overflow-hidden">
                <PhotoView src={img}>
                    <img
                        className="object-cover w-full h-full transition-all duration-300 cursor-pointer ease hover:scale-110"
                        src={img}
                        alt=""
                    />
                </PhotoView>
            </div>
            <div className="my-5" />
            <div>
                {/* name */}
                <h1 className="mb-3 text-2xl font-bold">{name}</h1>
                {/* short descripiton */}
                <p className="mb-3 h-[72px] text-gray-light">
                    {desc.slice(0, 100)}...
                </p>
                {/* rating */}
                <div className="flex items-center gap-1 mb-3">{ratings}</div>
                {/* price */}
                <p className="mb-3 text-3xl font-light">$ {price}</p>
                <Link to={`/services/${_id}`} className="w-full">
                    <button className="flex items-center justify-center w-full gap-1 px-5 py-2 ml-auto font-semibold shadow-sm bg-orange shadow-orange">
                        <span>Learn More</span>
                        <ArrowRightIcon className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
