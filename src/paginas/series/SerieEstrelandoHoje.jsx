import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../Serviços/apiFilmes'

const SerieEstrelandoHoje = () => {
    const [popular, setPopulares] = useState([])

    useEffect(() => {
       //const promessa = apiFilmes.get('movie/popular')
       apiFilmes.get('/tv/airing_today?language=pt-BR').then(resultado =>{
        
        setPopulares(resultado.data.results) 
       })
       //promessa.then(resultado=>{

      
      //})
    }, [])



  return (
      <div>
        <Row>
          <h1>Series Populares</h1>
              {popular.map(item => (
              <Col md={3} className="md-6">
                <Card>
                <Card.Body>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+ item.poster_path} />
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.original_title}
                  </Card.Text>
                  <Link className="btn btn-danger" to={"/series/" + item.id} >Mais Informações</Link>
                </Card.Body>
              </Card>
              </Col>
              ))}
              </Row>
      </div>
  )
}

export default SerieEstrelandoHoje