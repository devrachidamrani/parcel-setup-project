import React, { useState } from 'react'
import me from '../images/me.jpeg'

const App = () => {

  const [state,setState] = useState(0)
  return (
    <div>
      <h2>Hey ! Hello React! </h2>
      <p>State : {state}</p>

      <img src={me} alt="me" />
    </div>
  )
}

export default App
