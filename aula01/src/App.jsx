import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <>
      <Adicao num1={5} num2={4}/>
      <Subtracao num1={5} num2={4} />
      <Multiplicacao num1={5} num2={4} />
      <Divisao num1={5} num2={4} />
      <PrecisoEstudar nomeDaTecnologia={"REACT"} />
    </>
  )
}

export default App