import { StarIcon } from '@heroicons/react/24/solid';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({ data, handleDelete }) => {
    const {
        _id,
        name,
        img,
        rating,
        review,
        createdAt,
        reviewTitle,
        serviceId,
    } = data;

    const ratings = [];
    for (let i = 0; i < rating; i++) {
        ratings.push(<StarIcon key={i} className="w-5 h-5 text-orange" />);
    }

    const date = new Date(createdAt);
    const created = `${
        date.getMonth() + 1
    }-${date.getDate()}-${date.getFullYear()}`;

    return (
        <div className="p-5 shadow-md bg-gray-dark shadow-gray-dark flex flex-col justify-between">
            <div className="flex items-center gap-5 mb-5">
                {/* user image */}
                <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-orange">
                    <img
                        className="w-full h-full object-cover"
                        src={img}
                        alt=""
                    />
                </div>
                {/* user details */}
                <div>
                    {/* name */}
                    <h2 className="font-semibold text-sm">{name}</h2>
                    {/* date */}
                    <p className="text-xs text-gray-light">{created}</p>
                </div>
            </div>
            <div className="flex flex-col flex-1 justify-between">
                {/* review title */}
                <p className="mb-3">
                    Review on{' '}
                    <Link
                        to={`/services/${serviceId}`}
                        className="font-semibold text-orange"
                    >
                        {reviewTitle}
                    </Link>
                </p>
                {/* rating */}
                <div className="mb-3 flex items-center gap-1">{ratings}</div>
                {/* review */}
                <p className="text-gray-light mb-3 flex-1">{review}</p>
                <div className="flex items-center gap-5 justify-between">
                    {/* edit button */}
                    <Link className="w-full" to={`/my_reviews/edit/${_id}`}>
                        <button className="bg-orange font-semibold py-2  text-center w-full shadow-sm shadow-orange flex items-center gap-2 justify-center">
                            <PencilSquareIcon className="h-5 w-5" />
                            <span>Edit</span>
                        </button>
                    </Link>
                    {/* delete button */}
                    <button
                        onClick={() => handleDelete(_id)}
                        className="bg-gray-light text-orange font-semibold py-2  text-center w-full shadow-sm shadow-gray-light flex items-center gap-2 justify-center"
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
