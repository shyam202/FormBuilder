import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Form from "./pages/Form";



export default function App() {
 return (
    <>
    <Router> 
      <Navbar /> 
      <Switch> 
          <Route exact path="/"  component={Form} />
       </Switch>
    </Router>
    </>
  );
}

