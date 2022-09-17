import Link from 'next/link';
import React from 'react';

const Menucard = (props) => {
    return (
        <div className='place-card' onClick={() => {
            window.scrollTo(0, 0)
            props.setModal(props.item)
            }}>
            <div className="place-card-img">
                <img src={props.item.imagen} alt="" />
            </div>
            <div className="place-card-content">
                <p className='place-card-content-title'>
                    {props.item.nombre}
                </p>
                <p className='place-card-content-category'>
                    {props.item.descripcion}
                </p>
                <p className='menu-card-price'>Q.{props.item.precio}</p>
            </div>

        </div>
    );
};

export default Menucard;