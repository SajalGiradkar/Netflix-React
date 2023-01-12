import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Error = () => {
  const Navigate = useNavigate();
  const goToHome = () => {
    Navigate(-1);
  }
  return (
    <Container>
      <div className="center">
        <button onClick={goToHome}>Back</button>
        <h1>Error 404</h1>
        <h4>Page Not Found 😢</h4>
      </div>
    </Container>
  )
}
// css styling using styled component 
const Container = styled.div`
  button{
    padding: 1rem;
    cursor: pointer;
    font-size: 1.6rem;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    position: absolute;
    top: 5%;
    left: 2%;
    &:hover{
      background-color: #979797;
    }
  }
  .center{
    background-color: #222222;
    color: white;
    width: 100%;
    min-height: 100vh;
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default Error