import styled from "styled-components"
import Input from '../Input'
import { useState } from "react"
import { livros } from '../Pesquisa/dadosPesquisas'


const Pesquisas = styled.section`
    background-color: black;
    color: #FFFFFF;
    text-align: center;
    padding: 85px 0;
    height: 100vh;
    width: 100vw;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight:  500;
  margin-bottom: 40px;
  color: #FFFFFF;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    margin: 20px;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

export default function Pesquisa() {
  const [livrosPesquisados, setlivrosPesquisados ]= useState([])
  console.log(livrosPesquisados)

  return(
    <Pesquisas>
      <Titulo>Ja sabe por onde começar?</Titulo>
        <SubTitulo>Encontre seus livros em nossa estante</SubTitulo>
      <Input
        placeholder="Escreva sua proxima leitura"
        onBlur={evento => {
          const textoDigitado = evento.target.value
          const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
          setlivrosPesquisados(resultadoPesquisa)
        }}
      />
      { livrosPesquisados.map( livro => (
        <Resultado>
          <p>{livro.nome}</p>
          <img src={livro.src}/>
        </Resultado>
    )  ) }
    </Pesquisas>
  )
}