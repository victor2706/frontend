import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../Serviços/apiFilmes'

const Filmespopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
       //const promessa = apiFilmes.get('movie/popular')
       apiFilmes.get('movie/popular?language=pt-BR').then(resultado =>{
        
        setFilmes(resultado.data.results) 
       })
       //promessa.then(resultado=>{

      
      //})
    }, [])



  return (
      <div>
        <Row>
              {filmes.map(item => (
              <Col md={4} className="md-3">
                <Card>
                <Card.Body>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+ item.poster_path} />
                  <Card.Title>{item.Title}</Card.Title>
                  <Card.Text>
                    {item.original_title}
                  </Card.Text>
                  <Link className="btn btn-danger" to={"/filmes/" + item.id} >Mais Informações</Link>
                </Card.Body>
              </Card>
              </Col>
              ))}
              </Row>
      </div>
  )
}

export default Filmespopulares