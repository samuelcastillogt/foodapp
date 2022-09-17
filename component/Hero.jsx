import React, {useState, useEffect} from 'react';

const Hero = (props) => {
    const comidas = ["Que quieres comer hoy?","Hamburguesas", "Tacos", "Comida China", "Pollo Frito", "Comida Tipica", "Burritos"]
    return (
        <div className='hero'>
            <p className='hero-title'>Que se te antoja hoy?</p>
            <div className='hero-text'>
                <p>Encuentra cientos de opciones con su respectivo precio.</p>
                <select name="" id="" onChange={async(e)=>{
                    await props.getData(e.target.value)
                }}>
                    {
                        comidas.map(item => <option key={item} >{item}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default Hero;