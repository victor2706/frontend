import React, { useEffect, useState } from 'react'
import { Container, NavItem, Card, Button, Row, Col, link } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiFilmes from '../../Serviços/apiFilmes'

const SeriesPopulares = () => {
    const [popular, setPopulares] = useState([])
    const [query, setQuery] = useState([])

    useEffect(() => {
       //const promessa = apiFilmes.get('movie/popular')
       apiFilmes.get('/tv/popular?language=pt-BR').then(resultado =>{
        
        setPopulares(resultado.data.results) 
       })
       //promessa.then(resultado=>{

      
      //})
    }, [])
    function pesquisar (event) {
      setQuery(event.target.value) 
    }
    function pesquisarBotao (event) {
      apiFilmes.get('search/tv?language=pt-BR&query=' + query).then(resultado =>{
        setPopulares(resultado.data.results) 
       })
    }

  return (
      <div>
        <Row>
          <h1 class="text-center">Series Populares</h1>
          <input type="Text" onChange={pesquisar}></input>
        <button onClick={pesquisarBotao}>Pesquisar</button>
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

export default SeriesPopulares