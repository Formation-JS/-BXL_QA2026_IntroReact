import './App.css'
import Welcome from './components/Welcome/Welcome';
import Counter from './components/Counter/Counter';

function App() {

  return (
    <>
      <Welcome firstname='Della' lastname='Duck' />
      <Counter />
    </>
  )
}

export default App;
