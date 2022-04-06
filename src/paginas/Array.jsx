import React from 'react'

const Array = () => {
  const carros = ['Porshe', 'Mercedes', 'Maclare', 'BMW', 'Tesla']
  const Pessoa = ['Max', 'victor', 'lazaro', 'louis', 'vitton']
  
  return (
    <div>
      <h1>Carros</h1>
      
      {
        carros.map( item => (<p>{item}</p>))
      }

      <h1>Pessoa</h1>
      {
        Pessoa.map(people => (<li>{people}</li>))
      }
      
    </div>
  )
}

export default Array