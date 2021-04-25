import React from "react";
import {Container} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import HomepageComponent from "./components/Homepage/component";
import SignUpComponent from "./components/SignUp/component";
import SignInComponent from "./components/SignIn/component";


function PageRouter(){
    return(
        <Router>
            <Switch>
                <Route path="/signin">
                    <SignInComponent/>
                </Route>
                <Route path="/signup">
                    <SignUpComponent/>
                </Route>
                <Route path="/">
                    <HomepageComponent/>
                </Route>
            </Switch>
        </Router>
    );
}
export default PageRouter;
