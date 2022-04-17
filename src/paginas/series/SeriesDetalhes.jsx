import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiFilmes from '../../Serviços/apiFilmes'




const SeriesDetalhes = () => {

  
  
  const params = useParams()

  
  const [series, setSerie] = useState({})
  const  [atores, setAtores] = useState([])
  const [seasons, setSeasons] = useState([])

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
 useEffect(()=>{
    
  const promessa = apiFilmes.get('tv/' + params.id + '?language=pt-BR')
  
  promessa.then(resultado=>{
      console.log(resultado.data.seasons);
      setSeasons(resultado.data.seasons);
  })

}, [])
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
          <h2>Titulo:</h2>
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
        <Row style={{width: '100%', marginLeft: 'auto', marginRight: 'auto'}} className="g-4">
                <Col md={12}>
                    <Card>
                        <Card className="p-2 mx-2 my-2 btn text-dark bg-light">
                            <h1>TEMPORADAS</h1>
                        </Card>
                            <div>                                
                                <Row xs={1} md={2} xl={3} className="g-4">
                                {seasons.map(item => (
                                    <Col key={item.id}>
                                    <Card style={{ width: '340px', height: '700px' }}>
                                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+item.poster_path}/>
                                        <Card.Body>
                                        <Card.Title><h4>{item.name}</h4></Card.Title>
                                        <p>{item.overview.substring(0,100) + "..."}</p>
                                        <h5>Data de Lançamento: {item.air_date}</h5>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                ))}
                                </Row>
                            </div>
                    </Card>

                    

                </Col>
            </Row>
        <Card></Card>
         <Card className="p-2 mx-2 my-2 btn text-dark bg-light">
                  <h1>Atores</h1>
              </Card>
              <div>
              <Row xs={0} md={1} xl={5} className="g-4">
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
             </div>
            </Row>
        </Container>
      </div>
    }
    </div>
  )
}


export default SeriesDetalhes