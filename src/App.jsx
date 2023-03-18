import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import { Fila } from './component/Fila';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Tabla editable </h1>

      <Fila product="coca" category="bebida" price="330" />
      <br />
      <Fila product="fanta" category="bebida" price="340" />
      <br />
      <Fila product="sprite" category="bebida" price="350" />

      <h6>para mauro come negros</h6>
    </div>
  );
}

export default App;
