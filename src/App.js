
import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa';
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
      </AppContainer>
  )
}
export default App

