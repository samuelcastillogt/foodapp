import Link from 'next/link';
import React from 'react';

const PlaceCard = (props) => {
    return (
        <div className='place-card'>
            <div className="place-card-img">
                <img src={props.data.imagen} alt="" />
            </div>
            <div className="place-card-content">
                <p className='place-card-content-title'>
                    {props.data.nombre}
                </p>
                <p className='place-card-content-category'>
                    {props.data.categoria}
                </p>
            </div>
            <Link href={`/place/${props.data.placeId}`}>
                <div className="btn btn-card">
                   Conocer Menu 
                </div>
                
            </Link>
        </div>
    );
};

export default PlaceCard;