import React from "react";
import { Route, Routes } from "react-router";
import SignIn from "./components/Authentication/SignIn";
import SignUp from "./components/Authentication/Signup";
import HomePage from "./components/screens/HomePage";
import CreateContract from "./components/screens/CreateContract";

const Routing = () => {
    return (<React.Fragment>
            <Routes>
                <Route Component={HomePage} path="/home" />
                <Route Component={SignIn} path="/signIn" />
                <Route Component={SignUp} path="/signUp" />
                <Route Component={CreateContract} path="/contract" />
            </Routes>
    </React.Fragment>)
}

export default Routing;