import React from 'react';
import { Link } from 'react-router-dom';
import signin from '../assets/signin.svg';
import useTitle from '../hooks/useTitle';

const SignIn = () => {
    useTitle('Sign In');
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        form.reset();
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-between gap-5 mx-10 md:flex-row">
                <div className="w-full">
                    <img className="w-full" src={signin} alt="" />
                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-bold text-center text-orange">
                        Sign In
                    </h1>
                    <div className="mb-5" />
                    <div className="mx-10">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 p-5 font-semibold shadow-md bg-gray-dark shadow-gray-dark text-gray-light"
                        >
                            <div>
                                <label htmlFor="email">Email:</label>
                                <div className="mb-1" />
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <div className="mb-1" />
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                                    required
                                />
                            </div>
                            <p>
                                Don't have an Account?{' '}
                                <Link className="text-orange" to={`/signup`}>
                                    Sign Up.
                                </Link>
                            </p>
                            <button
                                className="px-5 py-2 text-white shadow-sm bg-orange shadow-orange"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </form>
                        {/* <div className="mb-5" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
