import React, { useEffect, useState } from 'react';
import CardsContainer from '../component/CardsContainer';
import Hero from '../component/Hero';
import PlaceCard from '../component/PlaceCard';
import { useApi } from '../hooks/useApi';
const index = () => {
    const [places, setPalces] = useState()
    const getData = async(categoria)=>{
        if(categoria == "Que quieres comer hoy?"){
            const data = await useApi()
            setPalces(data)
        }else{
           const data = await useApi(categoria) 
           setPalces(data)
        }
        
        
    }
    useEffect(()=>{
        getData()
        },[])
    return (
        <React.Fragment>
            <Hero getData={getData}/>
            <CardsContainer>
             {
                places && places.map(place => <PlaceCard data={place} key={place.id}/>)
            }   
            </CardsContainer>
            
        </React.Fragment>
    );
};

export default index;