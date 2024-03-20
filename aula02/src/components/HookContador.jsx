import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementarContador(){
        setContador(contador + 1)
    }

  return (
    <div>
        <h1>Contador com Hook - useState</h1>
        <button onClick={incrementarContador}>CLIQUE para incrementar</button>
        <h2>O contador está em: {contador}</h2>

    </div>
  )
}

export default HookContador