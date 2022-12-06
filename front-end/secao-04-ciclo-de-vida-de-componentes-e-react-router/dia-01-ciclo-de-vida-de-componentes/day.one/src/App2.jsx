import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState(0);
  useEffect(() => {
    document.title = `Você clicou ${data} vezes`;
  });

  return (
    <div className="App">
      <h1>Você clicou {data} vezes</h1>
        <button onClick={() => setData(data + 1)}>
          Esse é o {data}
        </button>
    </div>
  )
}

export default App
