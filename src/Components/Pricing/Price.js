import React from 'react';
import Pricelist from '../Pricelist/Pricelist';

const Price = () => {
    const pricingOptions = [
    {id:1, name:'Almost Free',price:9.99, features:[
        'Awesome Services',
        'Every think premium',
        'Business Services',
        'Added Services',
        'Value services',
        'Knowing services',
    
]
    },
    {id:2, name:'Better Service ',price:29.99 , features:[
        'Pretty Services',
        'Every think premium',
        'Business Services',
        'Adjustable Services',
        'Ajaira services',
        'Hudai services',
    ]
    },
    {id:3, name:'Premium',price:49.99 , features:[
        'Good Services',
        'Every think premium',
        'Business Services',
        'Added Services',
        'Value services',
        'Knowing services',
    ]
    },
    ]
    return (
        <div>
            <h3 className='text-2xl font-bold bg-indigo-800 p-12 h-48 text-white flex justify-center items-center '>Best deal in the town</h3>
        
        <div className='grid grid-cols-3 gap-3 bg-indigo-800 mt-4 m-5 p-12 border-8'>
            {
                pricingOptions.map(option => <Pricelist
                    key={option.id}
                    option = {option}>
                </Pricelist>)
            }
        </div>
        
            
        </div>
    );
};

export default Price;

