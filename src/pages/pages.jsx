import React, { useEffect, useState } from 'react'
import Yo from "../part/utils/Yo";

const Pages = ({ id }) => {

    const [pageData, setPageData] = useState(null)

    const getPageData = async (id) => {
        Yo.get("/api/client/pages/" + id).then((res) => {
            setPageData(res?.data)
        })
    }

    useEffect(() => {
        if (id) {
            getPageData(id)
            
        }
    }, [id])

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">

                <h1 className="text-3xl font-bold mb-6 border-b pb-3">
                    {pageData?.Name}
                </h1>

                <div className="prose max-w-none mb-8">
                    <div dangerouslySetInnerHTML={{ __html: pageData?.Page_Data }} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 border-t pt-4">
                    <p><span className="font-semibold">ID:</span> {pageData?.Id}</p>
                    <p><span className="font-semibold">Created:</span> {pageData?.createdAt}</p>
                    <p><span className="font-semibold">Updated:</span> {pageData?.updatedAt}</p>
                </div>

            </div>
        </div>
    )
}

export default Pages