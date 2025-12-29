import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { notices } from '../pagesConfig/notices';
export const NoticeDetail = () => {
    const { id } = useParams();
    const notice = notices.find((n) => n.id === parseInt(id));

    if (!notice) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <p className="text-xl text-red-600">Notice not found!</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-indigo-600 text-white py-8 px-10">
                    <h1 className="text-3xl font-bold">{notice.title}</h1>
                    <p className="mt-3 text-indigo-100">
                        Posted on: {new Date(notice.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </p>
                </div>

                <div className="p-10">
                    <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-relaxed text-lg">
                        {notice.fullContent}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/"
                            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                        >
                            ← Back to Notice Board
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};