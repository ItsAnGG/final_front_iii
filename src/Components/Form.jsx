import React, { useState } from 'react'
import { useContextGlobal } from '../Context/Context'

const Form = () => {

  const { state } = useContextGlobal();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleNameChange = (e) => {
      setName(e.target.value)
    }
    const handleEmailChange = (e) => {
      setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      if (name.length < 3) {
        setError("Por favor, verifique la información proprocionada es válida")
        setSuccess("")

        return
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if(!emailRegex.test(email)) {
        setError("Ingrese un correo electrónico válido")
        setSuccess("")
        
        return
      }

      setError("")
      setSuccess("Datos enviados con éxito")

      setName("")
      setEmail("")
    }

  return (
      <form onSubmit={handleSubmit}>
        <label className='label'>
          <input type="text" className='input' placeholder=' ' value={name} onChange={handleNameChange}/>
          <span className={`span ${state.theme}`}>Nombre:</span>
        </label>
        <label className='label'>
          <input type="text" className="input" placeholder=' ' value={email} onChange={handleEmailChange}/>
          <span className={`span ${state.theme}`}>Correo:</span>
        </label>

        <button type='submit' className='submit-btn'>Submit</button>
        {error && <p style={{color: "red"}}>{error}</p>}
        {success && <p style={{color: "green"}}>{success}</p>}
      </form>
  )
}

export default Form
