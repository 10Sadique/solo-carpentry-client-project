import { CalendarIcon, CircleStackIcon } from '@heroicons/react/24/outline';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import MyReviewCard from '../components/MyReviewCard';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const MyReviews = () => {
    useTitle('My Reviews');

    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user.email;

    useEffect(() => {
        loadData(email);
    }, [email]);

    const loadData = async (email) => {
        const res = await fetch(
            `https://solo-carpentry-server.vercel.app/reviews?email=${email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        'myReviewsToken'
                    )}`,
                },
            }
        );
        const data = await res.json();
        // console.log(data);
        setReviews(data);
    };

    // handle delete action
    const handleDelete = (id) => {
        fetch(`https://solo-carpentry-server.vercel.app/reviews/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    loadData(email);
                    toast('Review Deleted!!', {
                        icon: '⛔',
                        style: {
                            borderRadius: '0px',
                            background: '#e34a32',
                            color: '#fff',
                        },
                    });
                }
            });
    };

    const handleDateSort = () => {
        fetch(
            `https://solo-carpentry-server.vercel.app/reviews?email=${email}&sort=Date`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        'myReviewsToken'
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                console.log('Date Sort');
            });
    };

    // sort by default
    const handleDefaultSort = () => {
        loadData(email);
        console.log('Default Sort');
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-orange mb-10">
                My Reviews
            </h1>
            {reviews.length > 0 && (
                <div className="flex items-center gap-3 mb-5">
                    <span>Sort By: </span>
                    {/* date sort */}
                    <button
                        onClick={handleDateSort}
                        className="font-semibold text-orange flex items-center gap-1"
                    >
                        <CalendarIcon className="w-5 h-5" />
                        <span>Date</span>
                    </button>
                    {/* default sort */}
                    <button
                        onClick={handleDefaultSort}
                        className="font-semibold text-orange flex items-center gap-1"
                    >
                        <CircleStackIcon className="w-5 h-5" />
                        <span>Default</span>
                    </button>
                </div>
            )}
            {/* if no reviews available */}
            <div>
                {reviews.length === 0 && (
                    <div className="text-center h-40">
                        No reviews added yet.
                    </div>
                )}
            </div>
            {/* if reviews available */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                    <MyReviewCard
                        handleDelete={handleDelete}
                        data={review}
                        key={review._id}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyReviews;
