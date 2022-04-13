import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {Link ,useParams } from 'react-router-dom'
import apiFilmes from '../../Serviços/apiFilmes'


const Filmesdetalhes = () => {

  const params = useParams()

  //console.log(params)
  const [filmes, setFilme] = useState([])

  useEffect(() => {
     //const promessa = apiFilmes.get('movie/popular')
     apiFilmes.get('movie/' + params.id + '?language=pt-BR').then(resultado =>{
      
      setFilme(resultado.data) 
     })
     //promessa.then(resultado=>{

    
    //})
  }, [])
  return (
    <div>

    {!filmes.id && <h1>Carregando... Aguarde!</h1>}

    {filmes.id &&
        <div>
            <h1>{filmes.title}</h1>

            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + filmes.poster_path} />
                    </Card>
                </Col>
                <Col md={8}>
                    <p><strong>Título Original: </strong>{filmes.original_title}</p>
                    <p><strong>Popularidade: </strong>{filmes.popularity}</p>
                    <p><strong>Data de Lançamento: </strong>{filmes.release_date}</p>
                    <p><strong>Orçamento: </strong>{filmes.budget}</p>
                    
                    <p><strong>Gêneros: </strong>
                        {filmes.genres.map(item => (
                            <span>{item.name}, </span>
                        ))}
                    </p>

                    <p><strong>Sinopse: </strong>{filmes.overview}</p>

                    <Link className='btn btn-danger' to={-1}>Retornar</Link>

                </Col>
            </Row>
        </div>
    }
</div>
)
}

export default Filmesdetalhes