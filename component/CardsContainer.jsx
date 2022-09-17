import React from 'react';

const CardsContainer = ({children}) => {
    return (
        <div className='cards-container'>
            {children}
        </div>
    );
};

export default CardsContainer;