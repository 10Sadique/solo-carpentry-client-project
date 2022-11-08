import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className="max-w-[360px] md:max-w-3xl lg:max-w-6xl mx-auto my-20">
                <Outlet />
                <ScrollRestoration />
            </div>
        </div>
    );
};

export default Main;
