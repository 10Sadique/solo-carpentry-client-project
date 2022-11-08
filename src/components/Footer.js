import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className="p-20 bg-gray-dark">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                <div>
                    <div className="flex items-center gap-2 text-3xl font-bold">
                        <img className="w-10" src={logo} alt="" />
                        <p>
                            <span className="text-orange">Solo</span>
                            <span className="font-light text-gray-light">
                                Carpentry
                            </span>
                        </p>
                    </div>
                    <p className="mt-3 text-center capitalize text-gray-light">
                        I can make anything for you!!
                    </p>
                </div>
                <div className="md:block hidden h-[80px] border-l border-gray-light" />
                <div>
                    <p className="text-center text-gray-light md:text-left">
                        Coypritht &copy; 2022. Jafar Sadiqu Jahan. All Rights
                        Reseved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
