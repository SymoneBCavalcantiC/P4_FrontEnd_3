import React from 'react'
import { useState } from 'react'

const FormularioDeContato = () => {

    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const dadosFormulario = {
        nome: nome,
        contato: contato,
        mensagem: mensagem
    }

    const jsonToSend = JSON.stringify(dadosFormulario);

    console.log(`O seguinte JSON será enviado via HTTP POST para o backend: ${jsonToSend}`)


  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='nome'>Nome: </label>
            <input 
                type='text'
                id='nome'
                value={nome}
                onChange={(event) => setNome(event.target.value)}            
            />
        </div>
        <div>
            <label htmlFor='contato'>Contato: </label>
            <input
                type='text'
                id='contato'
                value={contato}
                onChange={(event) => setContato(event.target.value)}            
            />
        </div>
        <div>
            <label htmlFor='mensagem'>Mensagem: </label>
            <textarea 
                id='mensagem'
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}            
            ></textarea>
        </div>
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default FormularioDeContato