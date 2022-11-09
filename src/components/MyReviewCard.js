import { StarIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

import React from 'react';

const MyReviewCard = ({ data, handleDelete }) => {
    const { _id, name, img, rating, review, createdAt, reviewTitle } = data;

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
            <div className="flex flex-col">
                <p className="mb-3">
                    Review on{' '}
                    <span className="font-semibold text-orange">
                        {reviewTitle}
                    </span>
                </p>
                <div className="mb-3 flex items-center gap-1">{ratings}</div>
                <p className="text-gray-light mb-3">{review}</p>
                <div className="flex items-center gap-5 justify-between">
                    <button className="bg-orange font-semibold py-2 px-5 text-center w-full shadow-sm shadow-orange flex items-center gap-2 justify-center">
                        <PencilSquareIcon className="h-5 w-5" />
                        <span>Edit</span>
                    </button>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="bg-gray-light text-orange font-semibold py-2 px-5 text-center w-full shadow-sm shadow-gray-light flex items-center gap-2 justify-center"
                    >
                        <TrashIcon className="h-5 w-5" />
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;
