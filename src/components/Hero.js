import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.png';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const Hero = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
                <div className="flex flex-col justify-center order-2 md:col-span-3 md:order-1">
                    <h1 className="mb-5 text-4xl font-extrabold capitalize md:text-7xl text-orange">
                        Build furniture that brings people together.
                    </h1>
                    <p className="mb-5 text-gray-light md:w-3/4">
                        Good design happens from collaboration between client,
                        architect, contractor, and designer.
                    </p>
                    <Link to={`/services`}>
                        <button className="flex items-center gap-1 px-5 py-2 overflow-hidden font-semibold shadow-sm bg-orange shadow-orange">
                            <span>Get Started</span>
                            <ArrowRightCircleIcon className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
                <div className="order-1 border-[10px]  border-orange  md:col-span-2 md:order-2 overflow-hidden">
                    <img
                        className="transition-all duration-300 hover:scale-110 ease w-full"
                        src={hero}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
