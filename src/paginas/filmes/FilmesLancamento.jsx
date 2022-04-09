import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../Serviços/apiFilmes'

const FilmesLancamento = () => {
  const [lancamentos, setLancamentos] = useState([])

  useEffect(() => {
     //const promessa = apiFilmes.get('movie/popular')
     apiFilmes.get('movie/upcoming?language=pt-BR').then(resultado =>{
      
      setLancamentos(resultado.data.results) 
     })
     //promessa.then(resultado=>{

    
    //})
  }, [])


  return (
  <div>
    <Row>
    {lancamentos.map(item => (
              <Col md={3} className="md-6">
                <Card>
                <Card.Body>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+ item.poster_path} />
                  <Card.Title>{item.Title}</Card.Title>
                  <Card.Text>
                    {item.original_title}
                  </Card.Text>
                  <Link className="btn btn-danger" to={"/lancamentos/" + item.id } >Mais Informações</Link>
                </Card.Body>
              </Card>
              </Col>
              ))}
    </Row>
  </div>
)
}

export default FilmesLancamento