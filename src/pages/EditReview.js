import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const EditReview = () => {
    useTitle('Edit Review');
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

        fetch(`https://solo-carpentry-server.vercel.app/review/${_id}`, {
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

    const handleCancel = () => {
        navigate('/my_reviews');
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
                            readOnly
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

                <div className="md:self-end flex items-center gap-5 flex-col md:flex-row">
                    {/* update button */}
                    <button
                        className="px-5 py-2 text-white w-full md:w-auto justify-center shadow-sm  bg-orange shadow-orange flex items-center gap-2"
                        type="submit"
                    >
                        <ArrowPathIcon className="w-5 h-5" />
                        <span>Update Review</span>
                    </button>
                    {/* cancel button */}
                    <button
                        onClick={handleCancel}
                        className="px-5 py-2 text-orange w-full md:w-auto justify-center shadow-sm  bg-gray-light shadow-gray-light flex items-center gap-2"
                    >
                        <XMarkIcon className="w-5 h-5" />
                        <span>Cancel</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditReview;
