
import styled from 'styled-components'

const Opcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-width: 120px;
    cursor: pointer;
    padding: 0 5px;
`
const textoOpcoes = ['CATEGORIAS', 'ESTANTE', 'FAVORITOS']

export default function OpcoesHeader () {
  return (
      <Opcoes>
        { textoOpcoes.map( (texto) => (
          <Opcao><p>{texto}</p></Opcao>
        )  )  }
      </Opcoes>
  )
}

