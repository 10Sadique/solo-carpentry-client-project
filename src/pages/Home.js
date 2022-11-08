import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
import NewsLetter from '../components/NewsLetter';
import Services from '../components/Services';
import useTitle from '../hooks/useTitle';

const Home = () => {
    const [services, setServices] = useState([]);
    useTitle('Home');

    useEffect(() => {
        fetch(`http://localhost:5000/services?limit=3`)
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            });
    }, []);

    return (
        <div>
            <Hero />
            <div className="my-20" />
            <div>
                <Services services={services} />
                <div className="mb-10" />
                <div className="grid place-items-center">
                    <Link to={`/services`}>
                        <button className="px-5 py-2 font-semibold shadow-sm bg-orange shadow-orange">
                            See All
                        </button>
                    </Link>
                </div>
            </div>
            <AboutUs />
            <div className="mb-20" />
            <NewsLetter />
        </div>
    );
};

export default Home;
