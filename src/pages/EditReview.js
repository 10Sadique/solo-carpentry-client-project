import { ArrowPathIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const EditReview = () => {
    const data = useLoaderData();

    const navigate = useNavigate();

    const { _id, name, rating, review } = data;

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const rating = form.rating.value;
        const review = form.review.value;
        const name = form.name.value;

        const updatedDoc = {
            name,
            rating,
            review,
        };

        fetch(`http://localhost:5000/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedDoc),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    navigate('/my_reviews');
                }
            });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-orange mb-5">
                Edit Review
            </h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-5 font-semibold shadow-md bg-gray-dark shadow-gray-dark text-gray-light"
            >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <div className="mb-1" />
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            defaultValue={name}
                            // readOnly
                            className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="rating">Rating:</label>
                        <div className="mb-1" />
                        <input
                            id="rating"
                            type="number"
                            name="rating"
                            placeholder="Rating (0 to 5)"
                            className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                            required
                            defaultValue={rating}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label htmlFor="desc">Review:</label>
                        <div className="mb-1" />
                        <textarea
                            id="review"
                            type="text"
                            name="review"
                            placeholder="Your Review"
                            className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                            required
                            defaultValue={review}
                        />
                    </div>
                </div>

                <button
                    className="px-5 py-2 text-white shadow-sm md:self-end bg-orange shadow-orange flex items-center gap-2"
                    type="submit"
                >
                    <ArrowPathIcon className="w-5 h-5" />
                    <span>Update Review</span>
                </button>
            </form>
        </div>
    );
};

export default EditReview;