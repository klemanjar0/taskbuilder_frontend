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
import {useSelector} from "react-redux";
import MainPageComponent from "./components/Mainpage/component";
import NavbarComponent from "./components/Navbar/component";


function PageRouter(){
    const isAuth = useSelector((state) => !!state.user.user);
    return(
        <Router>
            <NavbarComponent/>
            <Switch>
                <Route path="/signin">
                    <SignInComponent/>
                </Route>
                <Route path="/signup">
                    <SignUpComponent/>
                </Route>
                <Route path="/">
                    {isAuth ?
                        <MainPageComponent/> :
                        <HomepageComponent/>
                    }
                </Route>
            </Switch>
        </Router>
    );
}
export default PageRouter;
