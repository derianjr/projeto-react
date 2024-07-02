
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  background-color: lightseagreen;
  justify-content: center;
  width: 100vw;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Logo/>
      <OpcoesHeader/>
      <IconesHeader/>
   </HeaderContainer>

  )
}