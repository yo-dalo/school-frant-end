import React from 'react'
import Layout from './Layout'

const PagesLayout = ({ title, content, children }) => {
  const renderContent = () => {
    if (React.isValidElement(content)) {
      return content
    }

    if (typeof content === 'string') {
      return (
        <div
          className="text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )
    }

    return null
  }

  return (
    <Layout>
      <>
        {children}

        <div className="min-h-screen bg-gray-100 text-gray-800 px-6 py-12">
          <h1 className="text-4xl font-bold mb-6">{title}</h1>
          {renderContent()}
        </div>
      </>
    </Layout>
  )
}

export default PagesLayout
