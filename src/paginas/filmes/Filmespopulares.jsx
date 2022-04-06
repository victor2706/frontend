import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import apiFilmes from '../../Serviços/apiFilmes'

const Filmespopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
       const promessa = apiFilmes.get('movie/popular')

       promessa.then(resultado=>{console.log(resultado.data.results) })
    }, [])



  return (
      <Container>
              <div>Filmes populares</div>
      </Container>
  )
}

export default Filmespopulares