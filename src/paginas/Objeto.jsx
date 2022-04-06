import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Cartao from '../components/Cartao'
import Pagina1 from './Pagina1'
const Objeto =() => {
  const carros = [
  {marca: 'porshe', modelo: 'Taycan', cor: 'Branco', ano: '2019', 
  foto:'https://upload.wikimedia.org/wikipedia/commons/4/4e/Porsche_Taycan_at_IAA_2019_IMG_0787.jpg'},
  {marca: 'Mclaren', modelo: 'P1', cor: 'Cinza', ano: '2019', 
  foto: 'https://cdn.motor1.com/images/mgl/2Y3bx/s1/mclaren-p1.jpg'},
  {marca: 'porshe', modelo: 'Macan', cor: 'preto', ano: '2020',
   foto: 'https://cdn.motor1.com/images/mgl/6nApe/s1/porsche-macan-gts-2021.webp'},
  {marca: 'ford', modelo: 'Fusion', cor: 'Branco', ano: '2018', 
  foto: 'https://cdn.motor1.com/images/mgl/m691A/s1/ford-fusion-2019-br.jpg'},
  {marca: 'Mercedes', modelo: 'A35', cor: 'Azul', ano: '2020', 
  foto:'https://4.bp.blogspot.com/-lMIsrRl9VIg/XJtRh1V9J0I/AAAAAAACu4A/sL0sJRvCJFMp0KEpQsJaFwpPnHlswvsiACLcBGAs/s1600/mercedes-A35-AMG-Sedan%2B%25286%2529.jpg'},
  {marca: 'koenigsegg', modelo: 'regera', cor: 'Branco', ano: '2019', 
  foto:'https://blog.dupontregistry.com/wp-content/uploads/2021/01/2019-Koenigsegg-Regera-_0.jpg'},
]
return (
  <div>
    <Container>
      <Row>
        {carros.map(item => (
          <Col md={4} className="md-3">
            <Card>
              <Card.Img fluid={true} variant="top" src={item.foto}/>
              <Card.Body>
                <Card.Title>{item.marca} - {item.modelo}</Card.Title>
                <Card.Text><strong>Cor : </strong> {item.cor}</Card.Text>
                <Card.Text><strong>Ano : </strong> {item.ano}</Card.Text>
                <button variant ="Danger"> INFORMAÇÕES</button>
                </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
)}
export default Objeto