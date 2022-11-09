import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

const ReviewCard = ({ data }) => {
    const { name, img, rating, review, createdAt } = data;

    const ratings = [];
    for (let i = 0; i < rating; i++) {
        ratings.push(<StarIcon key={i} className="w-5 h-5 text-orange" />);
    }

    const date = new Date(createdAt);
    const created = `${
        date.getMonth() + 1
    }-${date.getDate()}-${date.getFullYear()}`;

    return (
        <div className="p-5 shadow-md bg-gray-dark shadow-gray-dark">
            <div className="flex items-center gap-5 mb-5">
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-orange">
                    <img
                        className="w-full h-full object-cover"
                        src={img}
                        alt=""
                    />
                </div>
                <div>
                    <h2 className="font-semibold text-sm">{name}</h2>
                    <p className="text-xs text-gray-light">{created}</p>
                </div>
            </div>
            <div>
                <div className="mb-3 flex items-center gap-1">{ratings}</div>
                <p className="text-gray-light">{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
