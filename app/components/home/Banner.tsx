import Image from 'next/image'
import React from 'react'

function Banner() {
    return <>
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]'>
            <Image src='/airbnb-banner.png' alt='banner-image'
            className='object-cover object-left' fill />

            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className='absolute top-1/2 w-full text-center z-20'>
                <p className='text-sm sm:text-lg text-white'>Not sure where to go? Perfect.</p>
                <button
                type='button'
                className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'
                >
                I am flexible
                </button>
            </div>
        </div>
    </>
}

export default Banner