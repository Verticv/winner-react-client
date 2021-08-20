import React, { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import { Switch, Route } from "react-router-dom";
import MyPage from "pages/MyPage";

function App() {

    const [isAuthenticated, setAuthenticated] = useState(false)

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
                <Route path="/mypage">
                    <MyPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path="*">
                    <MainPage isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
                </Route>
            </Switch>
        </>
    );
}

export default App;
