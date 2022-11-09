import React, { useContext, useEffect, useState } from 'react';
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
        const res = await fetch(`http://localhost:5000/reviews?email=${email}`);
        const data = await res.json();
        // console.log(data);
        setReviews(data);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-orange mb-5">
                My Reviews
            </h1>
            {/* if no reviews available */}
            <div>
                {reviews.length === 0 && (
                    <div className="text-center h-40">No Revies added yet.</div>
                )}
            </div>
            {/* if reviews available */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                    <MyReviewCard data={review} key={review._id} />
                ))}
            </div>
        </div>
    );
};

export default MyReviews;
