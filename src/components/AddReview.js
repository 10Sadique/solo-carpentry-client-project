import React from 'react';

const AddReview = ({ handleSubmit, user }) => {
    return (
        <div>
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
                            // placeholder="Name"
                            defaultValue={user?.displayName}
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
                        />
                    </div>
                </div>

                <button
                    className="px-5 py-2 text-white shadow-sm md:self-end bg-orange shadow-orange"
                    type="submit"
                >
                    Add Review
                </button>
            </form>
        </div>
    );
};

export default AddReview;
