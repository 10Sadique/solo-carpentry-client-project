import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';
import avatar from '../assets/avatar.svg';
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('Signed Out');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const navLinks = [
        <div
            className="flex flex-col w-full gap-5 font-medium md:items-center md:flex-row"
            key={1}
        >
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'text-orange underline underline-offset-8' : ''
                }
                to={`/`}
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? 'text-orange underline underline-offset-8' : ''
                }
                to={`/blog`}
            >
                Blog
            </NavLink>
            {user?.uid ? (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange underline underline-offset-8'
                                : ''
                        }
                        to={`/my_reviews`}
                    >
                        My Reviews
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange underline underline-offset-8'
                                : ''
                        }
                        to={`/add`}
                    >
                        Add Service
                    </NavLink>
                    <div className="cursor-pointer" onClick={handleSignOut}>
                        Sign Out
                    </div>
                    <div className="w-10 h-10 overflow-hidden rounded-full bg-orange/40">
                        {user?.photoURL && (
                            <img
                                className="object-cover w-full h-full"
                                src={user.photoURL}
                                alt=""
                            />
                        )}
                        {!user.photoURL && <img src={avatar} alt="" />}
                    </div>
                </>
            ) : (
                <>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange underline underline-offset-8'
                                : ''
                        }
                        to={`/signin`}
                    >
                        Sing In
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'text-orange underline underline-offset-8'
                                : ''
                        }
                        to={`/signup`}
                    >
                        Sign Up
                    </NavLink>
                </>
            )}
        </div>,
    ];

    return (
        <nav className="sticky top-0 z-50 w-full text-white shadow-md bg-gray-dark/70 backdrop-blur-md">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
                <div>
                    <div className="flex items-center justify-between py-3 md:block">
                        <NavLink
                            to={`/`}
                            className="flex items-center gap-2 text-2xl font-bold md:text-3xl"
                        >
                            <img className="w-10" src={logo} alt="" />
                            <p>
                                <span className="text-orange">Solo</span>
                                <span className="font-light text-gray-light">
                                    Carpentry
                                </span>
                            </p>
                        </NavLink>
                        <div className="md:hidden">
                            <button
                                className="p-2rounded-md "
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <XMarkIcon className="w-6 h-6" />
                                ) : (
                                    <Bars3Icon className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'block' : 'hidden'
                        }`}
                    >
                        {navLinks}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
