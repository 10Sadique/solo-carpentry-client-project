import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error');

    return (
        <div className="h-screen flex items-center justify-center flex-col gap-5">
            <div className="flex items-center gap-5 divide-x">
                <p className="font-bold text-2xl md:text-4xl">404</p>
                <p className="pl-5 font-extralight text-2xl md:text-4xl">
                    Page Not Found!
                </p>
            </div>
            <Link to={`/`} className="font-semibold text-orange underline">
                Go Back to Homepage
            </Link>
        </div>
    );
};

export default ErrorPage;
