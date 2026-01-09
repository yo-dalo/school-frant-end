import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"
import Yo from '../part/utils/Yo';





export const NoticeDetail = () => {
    // const { resToper } = useAuth();


    const { id } = useParams();




    const [resNotice, setResNotice] = useState({})
    useEffect(() => {

        Yo.get("/api/client/notification/" + id).then((res) => {
            setResNotice(res?.data)
            console.log(res?.data)
        })
    }, [])










    if (!setResNotice) {
        return (
            <div className="min-h-screen bg-mainOne flex items-center justify-center">
                <p className="text-xl text-red-600">Notice not found!</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div style={{ background: Number(resNotice?.Is_Important) ? "crimson" : "main" }} className="bg-main text-white py-8 px-10">
                    <h1 className="text-3xl font-bold">{resNotice?.Name}</h1>
                    <h3 className="text-1xl font-bold">{resNotice?.Title}</h3>
                    <p className="mt-3 text-indigo-100">
                        Posted on: {resNotice?.Date}
                    </p>
                </div>

                <div className="p-10">
                    <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-relaxed text-lg">
                        {resNotice?.Description}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/"
                            className="inline-block bg-main text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                        >
                            ← Back to Notice Board
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};