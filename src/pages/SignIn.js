import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signin from '../assets/signin.svg';
import GoogleIcon from '../components/icons/GoogleIcon';
import Spinner from '../components/Spinner';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const SignIn = () => {
    useTitle('Sign In');
    const { googleSignIn, setLoading, signIn, loading } =
        useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const to = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email,
                };

                // jwt verfication process
                fetch(`https://solo-carpentry-server.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log(data);
                        localStorage.setItem('myReviewsToken', data.token);
                        navigate(to, { replace: true });
                    });

                setError('');
                form.reset();
            })
            .catch((err) => {
                setError(err.message);
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleGoogleAccess = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);

                const currentUser = {
                    email: user.email,
                };
                // jwt verfication process
                fetch(`https://solo-carpentry-server.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        // console.log(data);
                        localStorage.setItem('myReviewsToken', data.token);
                        navigate(to, { replace: true });
                    });

                setError('');
            })
            .catch((err) => {
                setError(err.message);
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // spinner
    if (loading) {
        return (
            <div className="flex items-center justify-center my-40">
                <Spinner />
            </div>
        );
    }

    return (
        <div>
            <div className="flex flex-col items-center justify-between gap-5 md:mx-10 md:flex-row">
                <div className="w-full">
                    <img className="w-full" src={signin} alt="" />
                </div>
                <div className="w-full">
                    <h1 className="text-2xl font-bold text-center text-orange">
                        Sign In
                    </h1>
                    <div className="mb-5" />
                    <div className="md:mx-10">
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
                            {error && (
                                <p className="font-semibold text-red-600">
                                    {error.slice(10, -1)}
                                </p>
                            )}
                            <button
                                className="px-5 py-2 text-white shadow-sm bg-orange shadow-orange"
                                type="submit"
                            >
                                Sign In
                            </button>
                            {/* <div className="mb-1" /> */}
                            <button
                                onClick={handleGoogleAccess}
                                className="flex items-center justify-center gap-1 px-5 py-2 shadow-sm text-orange bg-gray-light shadow-gray-light"
                            >
                                <GoogleIcon />
                                <span>Google</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
