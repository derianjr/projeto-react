

import styled from 'styled-components';
import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa';

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #FFF;
    align-items: start;
`
function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}
export default App;
