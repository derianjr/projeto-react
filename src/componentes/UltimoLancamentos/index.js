import { livros } from "./DadosUltimoLancamentos"
import styled from "styled-components"

const UltimoLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`
const TItulo = styled.h2`
  display: flex;
  width: 100%;
  padding: 30px 0;
  background-color: lightseagreen;
  color: #FFF;
  margin: 0;
  justify-content: center;
  font-size: 36px;
`
const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  `


export default function UltimoLancamento() {
  return(
    <UltimoLancamentosContainer>
      <TItulo>ULTIMOS LANÇAMENTOS</TItulo>
        <NovosLivrosContainer>
          { livros.map ( livro => ( 
            <img src={livro.src}></img>
          ) ) }
        </NovosLivrosContainer>
    </UltimoLancamentosContainer>
  )
}