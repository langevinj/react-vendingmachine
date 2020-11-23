import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine'
import Candy from './Candy'
import Popcorn from './Popcorn'
import Soda from './Soda'

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
          <VendingMachine />
      </Route>
      
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/popcorn">
          <Popcorn />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
