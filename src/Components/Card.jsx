import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Context/Context'

const Card = ({ name, username, id }) => {

    const  { state, dispatch } = useContextGlobal()

    const addFav = () => {
        const { favs } = state;

        const isAlreadyFav = favs.some((fav) => fav.id === id);
        if (!isAlreadyFav){
            const newFav = { id, name, username }

            dispatch({type: "ADD_FAV", payload: newFav})
        } else {
            dispatch({type: "DELETE_FAV", payload: id})
        }
    }


  return (
    <div className={`card ${state.theme}`}>
        <div className="card-image">
            <img src="/images/doctor.jpg" alt={name} className='card-img'/>
        </div>
        <Link to={`/detail/${id}`}>
            <p className='name'>{name}</p>
        </Link>
        <p className='description'>@{username}</p>
        <p className='description'>ID: {id}</p>
        <button onClick={addFav} className="favButton">
            {state.favs.some((fav) => fav.id === id) ? "Remove fav" : "Add fav"}
        </button>
    </div>
  )
}

export default Card
