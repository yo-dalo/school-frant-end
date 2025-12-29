import React from 'react';
import { Link } from 'react-router-dom';
import { notices } from '../pagesConfig/notices';

export const NoticeList = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-indigo-800 mb-10">
                    School Notice Board
                </h1>

                <div className="space-y-6">
                    {notices.map((notice) => (
                        <Link
                            key={notice.id}
                            to={`/notice/${notice.id}`}
                            className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-indigo-100"
                        >
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                        {notice.title}
                                    </h2>
                                    <p className="text-gray-600 mb-3">{notice.shortDesc}</p>
                                    <span className="text-sm text-indigo-600 font-medium">
                                        {new Date(notice.date).toLocaleDateString('en-GB', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </span>
                                </div>
                                <svg
                                    className="w-8 h-8 text-indigo-500 ml-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};