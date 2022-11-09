import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-orange mb-5">
                My Blog
            </h1>
            {/* question 1 */}
            <div className="bg-gray-dark p-5 shadow-md shadow-gray-dark mb-5">
                <h2 className="font-bold text-orange mb-5 text-xl">
                    Write the difference between SQL and NoSQL.
                </h2>
                <div className="text-gray-light flex flex-col gap-5">
                    <p>
                        <span className="font-semibold">SQL: </span>
                        <span>
                            SQL is Relational Database Management System(RDBMS).
                            Data are stored in tables in SQL. These databases
                            have fixed or static or predefined schema. These
                            databases are best suited for complex queries.
                            Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server
                            etc.
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold">NoSQL: </span>
                        <span>
                            Non-relational or distributed database system. They
                            have dynamic schema. Data are stored in document
                            foramt. These databases are best suited for
                            hierarchical data storage. Horizontally scalable.
                            These databases are not so good for complex queries.
                            Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra
                            etc.
                        </span>
                    </p>
                </div>
            </div>
            {/* question 2 */}
            <div className="bg-gray-dark p-5 shadow-md shadow-gray-dark mb-5">
                <h2 className="font-bold text-orange mb-5 text-xl">
                    What is JWT, and how does it work?
                </h2>
                <div className="text-gray-light flex flex-col gap-5">
                    <p>
                        <span className="font-semibold">JWT: </span>
                        <span>
                            JSON Web Token (JWT) is an open standard that
                            defines a compact and self-contained way for
                            securely transmitting information between parties as
                            a JSON object.
                        </span>
                    </p>
                    <p>
                        In authentication, when the user successfully logs in
                        using their credentials, a JSON Web Token will be
                        returned. Since tokens are credentials, great care must
                        be taken to prevent security issues. In general, we
                        should not keep tokens longer than required. Whenever
                        the user wants to access a protected route or resource,
                        the user agent should send the JWT, typically in the
                        Authorization header using the Bearer schema.
                    </p>
                </div>
            </div>
            {/* question 3 */}
            <div className="bg-gray-dark p-5 shadow-md shadow-gray-dark mb-5">
                <h2 className="font-bold text-orange mb-5 text-xl">
                    What is the difference between JavaScript and NodeJS?
                </h2>
                <div className="text-gray-light flex flex-col gap-5">
                    <p>
                        <span className="font-semibold">JavaScript: </span>
                        <span>
                            Javascript is a Scripting language. It is mostly
                            abbreviated as JS. It can be said that Javascript is
                            the updated version of the ECMA script. Javascript
                            is a high-level programming language that uses the
                            concept of Oops but it is based on prototype
                            inheritance.{' '}
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold">NodeJS: </span>
                        <span>
                            NodeJS is a cross-platform and opensource Javascript
                            runtime environment that allows the javascript to be
                            run on the server-side. Nodejs allows Javascript
                            code to run outside the browser. Nodejs comes with a
                            lot of modules and mostly used in web development.
                        </span>
                    </p>
                </div>
            </div>
            {/* question 4 */}
            <div className="bg-gray-dark p-5 shadow-md shadow-gray-dark mb-5">
                <h2 className="font-bold text-orange mb-5 text-xl">
                    How does NodeJS handle multiple requests at the same time?
                </h2>
                <div className="text-gray-light flex flex-col gap-5">
                    <p>
                        NodeJS receives multiple client requests and places them
                        into EventQueue. NodeJS is built with the concept of
                        event-driven architecture. NodeJS has its own EventLoop
                        which is an infinite loop that receives requests and
                        processes them. EventLoop is the listener for the
                        EventQueue.
                    </p>
                    <p>
                        If NodeJS can process the request without I/O blocking
                        then the event loop would itself process the request and
                        sends the response back to the client by itself. But, it
                        is possible to process multiple requests parallelly
                        using the NodeJS cluster module or worker_threads
                        module.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
