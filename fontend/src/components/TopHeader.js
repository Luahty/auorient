import React from 'react';

export default function TopHeader() {
    return (
        <div className='bg-button w-full h-12 px-40 py-2 flex items-center justify-center relative'>
            <p className='text-sm text-text flex gap-x-2'>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  
                <a className='font-semibold underline'>Shop Now</a>
            </p>
            
            <div className='absolute right-40 top-2 flex items-center text-text'>
                English
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" fill="white" />
                </svg>
            </div>
        </div>
    );
}
