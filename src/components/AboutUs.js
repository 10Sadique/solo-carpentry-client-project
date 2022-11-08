import React from 'react';

const AboutUs = () => {
    return (
        <div className="mt-20">
            <h1 className="mb-10 text-3xl font-bold text-center text-orange">
                What I Provide?
            </h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-5 text-center shadow-lg bg-gray-dark shadow-gray-dark">
                    <h1 className="mb-3 text-2xl font-bold">Clean Design</h1>
                    <p className="text-gray-light">
                        Clean design typically means uncluttered, simple, easy
                        to parse and more “white space.” And I provide clean
                        design in all of my services.
                    </p>
                </div>
                <div className="p-5 text-center shadow-lg bg-gray-dark shadow-gray-dark">
                    <h1 className="mb-3 text-2xl font-bold">
                        Quality Materials
                    </h1>
                    <p className="text-gray-light">
                        Quality brigns more clients. This is my motto. I never
                        compromise on the quality of the product I use. My loyal
                        clients knows this very well.
                    </p>
                </div>
                <div className="p-5 text-center shadow-lg bg-gray-dark shadow-gray-dark">
                    <h1 className="mb-3 text-2xl font-bold">
                        Handmade Products
                    </h1>
                    <p className="text-gray-light">
                        All of my products are handmade. They all are made with
                        my own hand. So, you can be sure that all the products
                        are made with my proper care.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
