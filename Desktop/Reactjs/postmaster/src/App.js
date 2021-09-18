import './App.css';
import Component2 from './Component2';
import Navbar from './components/Navbar.js';
import Data from './components/3_compo';
import About from './components/4_compo'
import React, { useState } from 'react'
import Hello from './components/5_alert'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


function App() {

  const toggle = (e) => {
    if (color === 'dark') {
      setcolor('light');
      document.body.style.backgroundColor = 'white'
      show('your light theme hasbeen changed', 'success')
      setFont('black')

    } else {
      setcolor('dark')
      document.body.style.backgroundColor = '#1d296d'
      show('the dark theme hasbeen changed', 'success')
      setFont('white')
    }
  }


  const [alert, setAlert] = useState(null)
  const show = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      show(null)
    }, 3000);
  }
  const ourTarget1 = (e) => {
    document.body.style.backgroundColor = 'red'

  }
  const ourTarget2 = (e) => {
    document.body.style.backgroundColor = 'yellow'

  }
  const ourTarget3 = (e) => {
    document.body.style.backgroundColor = 'green'

  }
  const [color, setcolor] = useState('light');
  const [font, setFont] = useState('black');

  return (
    <>
    
      <Router>
        
      <Navbar fontColor={font} value1={ourTarget1} value2={ourTarget2} value3={ourTarget3} send={color} mode={color === 'dark' ? 'light' : 'dark'} title="Home" toggleMode={toggle} />
      <Hello alert={alert} />
      <Component2 />


        <Switch>
          <Route exact path='/form'>

            <div id='black' className="container">
              <Data bhejna={show} className="btn btn-primary mx-2 my-2" send={color} data="hello guys" />
            </div>

          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

        </Switch>

       
     


      </Router>
    </>

  );
}
export default App;
