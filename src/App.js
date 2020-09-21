import React, { useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from './Home';
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {  auth } from './firebase';

function App() {

  const [ { user }, dispatchEvent ] = useStateValue();
  
  // useEffect <<<< POWERFUL
  // Piece of code with runs based on a given conditon

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // login
        dispatchEvent({
          type : 'SET_USER',
          user : authUser
        })
      }else{
        // logout
        dispatchEvent({
          type : 'SET_USER',
          user : null
        })
      }
    });

    return () => {
      // any clean up
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/* login */}
          <Route exact="true" path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Home */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
