import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = () => {
    const [services, setServices] = useState([]);

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
            <div>
                <Services services={services} />
                <div className="my-10" />
                <div className="grid place-items-center">
                    <Link to={`/services`}>
                        <button className="px-5 py-2 font-semibold shadow-sm bg-orange shadow-orange">
                            See All
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
