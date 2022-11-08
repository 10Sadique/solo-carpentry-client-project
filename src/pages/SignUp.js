import React from 'react';
import useTitle from '../hooks/useTitle';
import signup from '../assets/signin.svg';
import { Link } from 'react-router-dom';

const SignUp = () => {
    useTitle('Sign Up');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        console.log(name, email, image, password);
        form.reset();
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-between gap-5 mx-10 md:flex-row">
                <div className="w-full">
                    <img className="w-full" src={signup} alt="" />
                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-bold text-center text-orange">
                        Sign Up
                    </h1>
                    <div className="mb-5" />
                    <div className="mx-10">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 p-5 font-semibold shadow-md bg-gray-dark shadow-gray-dark text-gray-light"
                        >
                            <div>
                                <label htmlFor="name">Name:</label>
                                <div className="mb-1" />
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                                    required
                                />
                            </div>
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
                                <label htmlFor="image">Photo URL:</label>
                                <div className="mb-1" />
                                <input
                                    id="image"
                                    type="text"
                                    name="image"
                                    placeholder="Photo URL"
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
                                Already have an Account?{' '}
                                <Link className="text-orange" to={`/signin`}>
                                    Sign In.
                                </Link>
                            </p>
                            <button
                                className="px-5 py-2 text-white shadow-sm bg-orange shadow-orange"
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
