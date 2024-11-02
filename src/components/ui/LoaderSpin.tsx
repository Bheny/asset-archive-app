import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
    return (
        <div className="border-white border w-full">
                <FaSpinner className='animate-spin text-xl' />
        </div>
    );
};

export default Loader;
