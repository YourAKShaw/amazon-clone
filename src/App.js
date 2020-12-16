import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
// import Payment from "./Payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import { ToastContainer } from "react-toastify";
// import Orders from "./Orders";

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <div className="app">    
      <Router>      
        <Switch> 
          <Route path="/login">
            <Header />
            <Login />
          </Route> 
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route> 
          {/* <Route path="/orders">
            <Header />
            <Orders />
          </Route>        */}
          <Route path="/">
            <Header />          
            <Home />        
          </Route>      
        </Switch>    
      </Router>  
    </div>
  );
}

export default App;
