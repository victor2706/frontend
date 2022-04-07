import React from 'react'
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const Contador = () => {

    //let numero = 0;
    let [New, setnumber] = useState (0)

    function mais(){
        setnumber(++New)
        console.log(++New)
    }
    let [men, setnumber1] = useState (10000)

    function menos(){
        setnumber1(--men)
        console.log(--men)
    }
  return (
      <Container>
          <div>
              <h1>Contador</h1>
                  <p><h3>SOMA: <Button variant="success" onClick={mais}>{New}</Button></h3></p>
              </div>
              <div>
              <h1>Contador</h1>

                  <p><h3>Subtração: <Button variant="warning" onClick={menos}>{men}</Button></h3></p>
              </div>
    
      </Container>
  )
}

export default Contador