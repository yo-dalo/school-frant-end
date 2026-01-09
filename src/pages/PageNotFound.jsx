import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
            <div className="max-w-xl w-full text-center bg-white shadow-xl rounded-2xl p-10">
                <h1 className="text-8xl font-extrabold text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                    Page Not Found
                </h2>
                <p className="text-gray-500 mb-8">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block px-6 py-3 rounded-xl bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
