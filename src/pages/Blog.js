import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            {/* question 1 */}
            <div className="bg-gray-dark p-5 shadow-md shadow-gray-dark">
                blog
            </div>
        </div>
    );
};

export default Blog;
