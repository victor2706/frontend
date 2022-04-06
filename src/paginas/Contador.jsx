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
  return (
      <Container>
          <div>
              <h1>Contador</h1>

                  {New}
                  <Button variant="success" onClick={mais}>+</Button>

              </div>
              <div>
              <h1>Contador</h1>

                  {New}
                  <Button variant="warning" onClick={mais}>-</Button>

              </div>
    
      </Container>
  )
}

export default Contador