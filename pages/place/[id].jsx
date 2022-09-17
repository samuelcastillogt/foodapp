import React, { useEffect, useState } from "react";
import Menucard from "../../component/Menucard";
const baseURL = "https://server-food.vercel.app/";
import { FaSadTear } from "react-icons/fa";
import { AiOutlineCloseCircle, AiOutlineStar } from "react-icons/ai";
import Mapa from "../../component/mapa";
export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const response = await fetch(baseURL + "place/" + id);
  const data = await response.json();
  // const respuesta = await fetch(baseURL + "menu/" + id);
  // const datos = await respuesta.json();
  return {
    props: {
      state: data,
      menu: [],
    },
  };
};
const details = ({ state, menu }) => {
  const [loading, setLoading] = useState(true);
  // const [menu, setMenu] = useState()
  const [modal, setModal] = useState();
  const getMenu = async () => {
    const response = await fetch(baseURL + "menu/" + state[0].id);
    const data = await response.json();
    console.log(data);
    setMenu(data);
    setLoading(false);
  };
  // useEffect(()=>{
  //     getMenu()
  // }, [])
  if (!state) {
    return <h1>Loading</h1>;
  } else {
    return (
      <React.Fragment>
        <div id="main">
          <div className="cabecera">
            <img src={state[0].imagen} alt="" />
            <h1>{state[0].nombre}</h1>
          </div>
          <div className="container">
            <p>{state[0].descripcion}</p>
            <br/>
            
          </div>
          {state[0].calificacion == "null" && <p>Todavia no hay calificaciones</p>|| <p className="text-2xl"><AiOutlineStar /> {state[0].calificacion}</p>}
          <div className="container">
            {menu &&
              menu.length > 0 &&
              menu.map((item) => (
                <Menucard item={item} key={item.id} setModal={setModal} />
              ))}
            {menu && menu.length == 0 && (
              <div className="container-alert">
                <FaSadTear />
                <h2>Este local no tiene menu disponible</h2>
              </div>
            )}
          </div>
        </div>
        {modal && (
          <div className="modal">
            {document.getElementById("main").classList.add("blur")}
            <AiOutlineCloseCircle
              className="close"
              onClick={() => {
                document.getElementById("main").classList.remove("blur");
                setModal(false);
              }}
            />
            <img src={modal.imagen} alt="" />
            <div className="content-modal">
              <p>{modal.nombre}</p>
              <p>{modal.descripcion}</p>
              <p>Q.{modal.precio}</p>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
};

export default details;
