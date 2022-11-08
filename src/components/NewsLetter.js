import React from 'react';

const NewsLetter = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-5 p-10 shadow-md md:p-20 bg-gray-dark shadow-gray-dark md:flex-row">
            <div>
                <h1 className="mb-1 text-3xl font-bold text-orange ">
                    Join My Newsletter
                </h1>
                <p className="text-gray-light md:w-3/5">
                    Receive the latest info from Corgan, download free plans,
                    and even post your own!
                </p>
            </div>
            <div className="flex items-center shadow-sm shadow-orange">
                <input
                    className="w-full px-3 py-2"
                    type="email"
                    placeholder="Your Email"
                />
                <button className="px-5 py-2 font-semibold bg-orange ">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;
