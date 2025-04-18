import './App.css'
import Counter from './components/counter/counter-v4.jsx';

function App() {

  return (
    <>
      <h1>Exo 03 - Le state</h1>
      <Counter />
      <hr />
      <Counter step={3} decr={true} />
      <hr />
      <Counter step={[1, 5, 10]} decr={true} />
      <hr />
      <Counter step={[1, 3, 10]} decr={true} limit={42} />
    </>
  )
}

export default App
