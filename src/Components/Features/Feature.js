import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                <h5 className='ml-5 text-white'>{feature}</h5>

            </div>
            
        </div>
    );
};

export default Feature;