
import './App.css';
import Card from './components/Card';
import {useState} from 'react'
import circle from './images/pattern-circles.svg'

function App() {

  const [discount, setDiscount] = useState(0)

  return (
    <div className="App">
      <div className='header'>
        <h2>Simple, traffic-based pricing</h2>
        <p>Sing-up for our 30-day trail. No credit card required</p>
        <img src={circle} alt='' />
      </div>
      <Card values={{
        discount:discount,
        setDiscount: setDiscount
      }}/>
    </div>
  );
}

export default App;
