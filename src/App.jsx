import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Switch>
                {/*   
                Example to pass props to a route.
                <Router>
                  <Route path="/home" render={() => <Home prop={prop} />} />
                </Router> 
              */}
                <Route path="/bet">
                    <h1>Hello world</h1>
                </Route>
                <Route path="*">
                    <MainPage />
                </Route>
            </Switch>
        </>
    );
}

export default App;
