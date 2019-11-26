import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import observableBase, { IObserver } from './observables/observable.hook';
import Home from './components/Home';
import Dashboard from './components/Dashboard';




const App: React.FC = () => {
  const [data, setData] = useState<number>(99999)
  const [data2, setData2] = useState<number>(0)
  const [isHome, setIsHome] = useState<boolean>(true)


  const onUpdate: IObserver = (data: number) => {
  }

  const handleSwitch =() => {
    setIsHome(!isHome)
  }

  

  return (
    <div className="App">
      <h1>Observer Pattern</h1>
      <button onClick={handleSwitch} > Switch!</button>
       {isHome ? <Home></Home> : <Dashboard></Dashboard>}
    </div>
  );
}

export default App;
