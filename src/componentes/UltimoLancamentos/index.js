import { livros } from "./DadosUltimoLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"


const UltimoLancamentosContainer = styled.section`
  background-color: #EBECEE;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
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
      <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
        <NovosLivrosContainer>
          { livros.map ( livro => ( 
            <img src={livro.src}></img>
          ) ) }
        </NovosLivrosContainer>
    </UltimoLancamentosContainer>
  )
}