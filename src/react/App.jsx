import React, { useState } from 'react'
import me from '../images/me.jpeg'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
flex-direction: column;
place-items: center;
background-color: midnightblue;
color: #f1f1f1;
padding: 1rem;
font-family: Ubuntu;

h2 {
  font-size: 50px;
  color: darkorange;
}
`

const App = () => {
  const [state,setState] = useState(0)
  return (
    <Container>
      <h2>Hey ! Hello React! </h2>
      <p>State : {state}</p>
      <img src={me} alt="me" width="300" />
    </Container>
  )
}

export default App
