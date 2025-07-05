import { useState } from 'react';
import './index.css';

function App() {
  const [contador, setContador] = useState(0);

  const aumentar = () => setContador(contador + 1);
  const diminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }
  const zerar = () => setContador(0);

  return (
    <div className="app">
      <h1>Contador 🧮</h1>
      <h2>{contador}</h2>
      <div className="botoes">
        <button onClick={aumentar}>➕ Aumentar</button>
        <button onClick={diminuir}>➖ Diminuir</button>
        <button onClick={zerar}>🔁 Zerar</button>
      </div>
    </div>
  );
}

export default App;