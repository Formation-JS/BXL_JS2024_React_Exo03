import './App.css'
import Counter from './components/counter/counter-v2.jsx';

function App() {

  return (
    <>
      <h1>Exo 03 - Le state</h1>
      <Counter step={6} />
      <hr />
      <Counter step={3} decr={true} />
    </>
  )
}

export default App
