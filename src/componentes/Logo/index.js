
import logo from "../../imagens/logo.svg"
import styled from 'styled-components'

const Logos = styled.div`
    display: flex;
    align-items: center;
    margin-right: 30px;
    font-size: 30px;
    font-weight: bolder;
`

export default function Logo(){
  return(
  <Logos>
    <img src={logo} className="logo" alt="logo"></img>
    <p>DerisBooks</p>
  </Logos>
  )
}