import React from 'react';
import Feature from '../Features/Feature';

const Pricelist = ({ option }) => {
    const {features} = option;      //?features has come from the Price.js file there all the list was added
    return (
        <div>
            <div>
                <h3>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl font-bold text-white'>/mon </span>
                </h3>
                <p className='text-3xl text-red-600 mt-4'>{option.name}</p>

            {
                features.map((feature, idp )=><Feature 
                    feature ={feature}
                    key = {idp}
                    ></Feature>)
            }
                
            </div>

            <button className='bg-blue-400 mt-6 p-5 rounded-md'> Buy this</button>
        </div>
    );
};

export default Pricelist;