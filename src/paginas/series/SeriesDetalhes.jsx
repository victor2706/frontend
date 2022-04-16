import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiFilmes from '../../Serviços/apiFilmes'




const SeriesDetalhes = () => {

  
  
  const params = useParams()

  
  const [series, setSerie] = useState({})

  const  [atores, setAtores] = useState([])

  useEffect(() => {
     
     apiFilmes.get('tv/' + params.id + '?language=pt-BR').then(resultado =>{
      
      setSerie(resultado.data) 
     })

    
  }, [])


  useEffect(()=>{

    apiFilmes.get('tv/'+ params.id + '/credits?language=pt-BR').then(resultado=>{
        setAtores(resultado.data.cast)    
    })
 
 },[])
  return (
    <div>
      {!series.id && <h1>Carregando... Aguarde!</h1>}

{series.id &&
<div>
  <Container>
  <h1>{series.title}</h1>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant='top' src= {"https://image.tmdb.org/t/p/w500/"+ series.poster_path} />
          </Card>
        </Col>
        <Col md={8}>
          <h2>Titulo Original:</h2>
          <p>{series.original_name}</p>
          <h2>Popularidade:</h2>
          <p>{series.popularity}</p>
          <h2>Data de lançamento:</h2>
          <p>{series.release_date}</p>
          

          <p><strong>Gêneros: </strong>
            {series.genres.map(item => (
            <span key={item.id}>{item.name}, </span>
            ))}
          </p>

          <h2>Orçamento:</h2>
          <p>{series.budget}</p>
          <h2>Sinopse:</h2>
          <p>{series.overview}</p>
          
          

          <Link className='btn btn-primary' to={-1}>Voltar</Link>
          
          
        </Col>
        <Col md={12} className='mt-3'>
                <h1>Temporadas</h1>
              </Col>
              <Row>
              {atores.map(item=>(
               <Col className='mb-3' md={2} key={item.id}>
                
                <Link to={'/atores/' + item.id}>
                <Card title = {item.name}>
                   <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.profile_path} />
                </Card>
                </Link>
               </Col>
              ))}
             </Row>
         <Col md={12} className='mt-3'>
                  <h1>Atores</h1>
              </Col>
              <Row>
              {atores.map(item=>(
               <Col className='mb-3' md={2} key={item.id}>
                
                <Link to={'/atores/' + item.id}>
                <Card title = {item.name}>
                   <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/" + item.profile_path} />
                </Card>
                </Link>
               </Col>
              ))}
             </Row>
            </Row>
        </Container>
      </div>
    }
    </div>
  )
}


export default SeriesDetalhes