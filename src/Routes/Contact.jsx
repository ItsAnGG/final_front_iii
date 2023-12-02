import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Context/Context'


/* PROFE puse lo de poder cambiar el theme y tal, pero no me quedaron del 
todo bien los estilos o no modifiqué el theme donde realmente debería 
ser, :C al poner el modo oscuro hay algunas cosas que yo
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