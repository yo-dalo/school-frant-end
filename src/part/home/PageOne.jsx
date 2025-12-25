import React from 'react'
import SwipeR from '../SwipeR'
import TextSwiper from '../utils/TextSwiper'

const PageOne = () => {
    return (
        <div className='w-screen overflow-hidden bg-main h-fit'>
            <SwipeR />
            <TextSwiper />
        </div>

    )
}

export default PageOne