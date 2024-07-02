import styled from "styled-components"
import Input from '../Input'
import { useState } from "react"


const Pesquisas = styled.section`
    background-color: black;
    color: #000;
    text-align: center;
    padding: 85px 0;
    height: 100vh;
    width: 100%;
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
export default function Pesquisa() {
  const [textoDigitado, settextoDigitado] = useState('')
  return(
    <Pesquisas>
      <Titulo>Ja sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
      <Input
        placeholder="Escreva sua proxima leitura"
        onBlur={evento => settextoDigitado(evento.target.value) }

      />
    </Pesquisas>
  )
}