import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

/* PROFE puse lo de poder cambiar el theme y tal, pero no me quedaron del 
todo bien los estilos :C al poner el modo oscuro hay algunas cosas que yo
las tengo seteadas en blanco (como los inputs) y al poner el modo oscuro 
el texto se vuelve balnco también y se pierde */

const Contact = () => {

  const {state} = useContextGlobal()

  return (
    <div className={`info ${state.theme}`}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact