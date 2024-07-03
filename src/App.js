
import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa';
import UltimoLancamentos from './componentes/UltimoLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
    justify-content: center;
    height: 100vh;
    background-color: #FFF;
    align-items: start;
`
function App() {
  return (
      <AppContainer>
        <Header/>
        <Pesquisa/>
        <UltimoLancamentos/>
      </AppContainer>
  )
}
export default App


  