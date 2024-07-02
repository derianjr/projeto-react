import styled from "styled-components"
import Input from '../Input'
const Pesquisas = styled.section`
    background-color: black;
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
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
`
export default function Pesquisa() {
  return(
    <Pesquisas>
      <Titulo>Ja sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
      <Input/>
    </Pesquisas>
  )
}