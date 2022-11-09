import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');

    const navigate = useNavigate();

    // adding service to DB
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const img = form.image.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const desc = form.desc.value;

        const service = {
            name,
            img,
            rating,
            price,
            desc,
        };

        fetch(`https://solo-carpentry-server.vercel.app/services/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast('Service Added Successfully!', {
                        icon: '✅',
                        style: {
                            borderRadius: '0px',
                            background: '#3CB35A',
                            color: '#fff',
                        },
                    });
                    navigate('/');
                }
            });
    };

    return (
        <div>
            <div className="">
                <div className="w-full">
                    <h1 className="text-2xl font-bold text-center text-orange">
                        Add Service
                    </h1>
                    <div className="mb-5" />
                    <div className="md:mx-10">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5 p-5 font-semibold shadow-md bg-gray-dark shadow-gray-dark text-gray-light"
                        >
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
                                    <label htmlFor="image">Image URL:</label>
                                    <div className="mb-1" />
                                    <input
                                        id="image"
                                        type="text"
                                        name="image"
                                        placeholder="Image URL"
                                        className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="rating">Rating:</label>
                                    <div className="mb-1" />
                                    <input
                                        id="rating"
                                        type="number"
                                        name="rating"
                                        placeholder="Rating (0 to 5)"
                                        className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="price">Price:</label>
                                    <div className="mb-1" />
                                    <input
                                        id="price"
                                        type="number"
                                        name="price"
                                        placeholder="Price (USD)"
                                        className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="desc">Description:</label>
                                    <div className="mb-1" />
                                    <textarea
                                        id="desc"
                                        type="text"
                                        name="desc"
                                        placeholder="Description"
                                        className="right-0 w-full px-5 py-2 shadow-sm bg-zinc-700"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                className="px-5 py-2 text-white shadow-sm md:self-end bg-orange shadow-orange"
                                type="submit"
                            >
                                Add Service
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;
