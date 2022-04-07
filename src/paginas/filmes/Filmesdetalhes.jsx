import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import apiFilmes from '../../Serviços/apiFilmes'

const Filmesdetalhes = () => {

  const params = useParams()

  //console.log(params)
  const [filmes, setFilme] = useState([])

  useEffect(() => {
     //const promessa = apiFilmes.get('movie/popular')
     apiFilmes.get('movie/' + params.id + 'language=pt-BR').then(resultado =>{
      
      setFilme(resultado.data) 
     })
     //promessa.then(resultado=>{

    
    //})
  }, [])
  return (
    <div>
      <h1>{filmes.title}</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant='top' src= {"https://image.tmdb.org/t/p/w500/"+ filmes.poster_path} />
          </Card>
        </Col>
        <Col md={8}>
          <h2>Titulo Original:</h2>
          <p>{filmes.original_title}</p>
          <h2>Popularidade:</h2>
          <p>{filmes.popularity}</p>
          <h2>Data de lançamento:</h2>
          <p>{filmes.release_date}</p>
          <h2>Orçamento:</h2>
          <p>{filmes.budget}</p>
          <h2>Sinopse:</h2>
          <p>{filmes.overview}</p>
        </Col>
      </Row>
    </div>
  )
}

export default Filmesdetalhes