import React from 'react'
import Layout from './Layout'

const PagesLayout = ({ title, content, children }) => {
  return (
    <Layout>
      <>

        {children}

        <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
          {/* Title and Content Paragraph */}
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          <p className="text-lg leading-relaxed">
            {content}
         
          </p>
        </div>



      </>






    </Layout>
  )
}

export default PagesLayout