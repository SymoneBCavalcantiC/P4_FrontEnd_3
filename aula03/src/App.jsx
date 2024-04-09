import React from 'react'
import Aluno from './components/Aluno'

const App = () => {

  const alunos = [

    {id: 1, nome: 'Pilar', email: 'pilarica@gmail.com', curso: 'História da Arte', media: 9.8},
    {id: 2, nome: 'Fábio', email: 'fabinho@gmail.com', curso: 'Ciência Política', media: 9.5},
    {id: 3, nome: 'Priscila', email: 'pinto@gmail.com', curso: 'Arqueologia', media: 6.8}

  ]

  return (
    <div>
      {alunos.map((aluno) => (

        <Aluno
          key = {aluno.id}
          nome = {aluno.nome}
          email = {aluno.email}
          curso = {aluno.curso}
          media = {aluno.media}
        />  
    ))}
    </div>
  );
}

export default App