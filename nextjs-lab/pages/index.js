import { useState } from 'react';
import Pessoa from '../components/Pessoa';  
import comAutorizacao from '@/hoc/comAutorizacao';

function Home() {
  const [idadeEduardo, setIdadeEduardo] = useState(15);
  const pessoas = [
    {
      nomePessoa: 'Eduardo',
      idadePessoa: 31
    },
    {
      nomePessoa: 'Ana Paula',
      idadePessoa: 35
    },
    {
      nomePessoa: 'Miguel',
      idadePessoa: 0
    },
    {
      nomePessoa: 'Carol',
      idadePessoa: 28
    }

  ]

  const incrementaIdadeEduardo = () => {
    setIdadeEduardo(idadeEduardo+1);
  };

  return (
    <>
    <h1>Olá Mundo! {process.env.NEXT_PUBLIC_TESTE}</h1>
    <Pessoa nome='Eduardo' idade={idadeEduardo}/>
    <Pessoa nome='Ana Paula' idade={35}/>

    {pessoas.map(({ nomePessoa,idadePessoa }, index) => {
      return <Pessoa 
        nome = {nomePessoa} 
        idade = {idadePessoa}
        key = {index} 
      />
    })}
    <button onClick={incrementaIdadeEduardo}>Incrementa a idade do Eduardo</button>
    </>
  )
}

export default comAutorizacao(Home);
