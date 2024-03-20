import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

    const [numSort, setNumSort] = useState('')
    const [numeroSorteado, setNumeroSorteado] = useState([])

    function sortearNumero(){

        if (numeroSorteado.length === 6) {
            alert("Já temos 6 números sorteados!")
        }

        const novoNumero = Math.floor(Math.random() * 60) + 1
        setNumSort(novoNumero)
        setNumeroSorteado([...numeroSorteado, novoNumero])

    }

  return (
    <div>
        <h1>Sorteador da Mega em React! :)</h1>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h1>Último número sorteado: {numSort}</h1>
        <h1>Sorteados: {numeroSorteado.join('- ')}</h1>
    </div>
  )
}

export default HookMegaSena