import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentista, setDentista] = useState({})
  const { id } = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(()=> {
    const fetchDentista = async () => {
      const res = await axios(url)
      setDentista(res.data)
    }

    fetchDentista()
  }, [id, url])

  console.log(dentista)


  return (
    <>
      <h1 className='subtitle'>Detail Dentist id </h1>
      <div className="table-container">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{dentista.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{dentista.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{dentista.phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
      </div>
    
    </>
  )
}

export default Detail