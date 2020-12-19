import {useState} from 'react' 

import List from './List'

import data from './data'

import logo from './logo.svg';
import './App.css';

function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="App">
      <p>{people.length} Birthday Today</p>
      {
        people.map((person) => {
          return (
            <List key={person.id} {...person} />
          )
        })
      }
      <button onClick={() => {
        setPeople([])
      }}>Clear</button>
    </div>
  );
}

export default App;
