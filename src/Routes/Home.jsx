import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

    const { state } = useContextGlobal()


  return (
    <div className={`app ${state.theme}`}>
      <h1 className='subtitle'>Nuestros especialistas</h1>
      <div className='card-grid'>
        {state.data.map((dentista)=> (
            <Card
                key ={dentista.id}
                id = {dentista.id}
                name = {dentista.name}
                username = {dentista.username}
            />
        ))}
      </div>
    </div>
  )
}

export default Home