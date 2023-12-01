import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* Este componente debe consumir los destacados del localStorage */}
        {/* Deberán renderizar una Card por cada uno de ellos */}
        {state.favs.map((fav) => (
          <Card dentista={fav} key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
