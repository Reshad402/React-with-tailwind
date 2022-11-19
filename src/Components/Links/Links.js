import React from 'react';

const Links = ({route}) => {
    return (
            <ul className='mr-10'>
                <a href={route.path}>{route.name}</a>
            </ul>
            
    );
};

export default Links;