import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Context/Context";


const Favs = () => {
  const { state } = useContextGlobal();

  return (
    <>
    <div className={`favs-container ${state.theme}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((fav) => (
          <Card dentista={fav} key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>
        ))}
      </div>
    </div>
    </>
  );
};

export default Favs;
