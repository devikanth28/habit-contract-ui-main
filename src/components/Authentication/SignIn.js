import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import UserService from "../../apis/UserService";
import { UserContext } from "../../contexts/Contexts";
import useChange from "../../hooks/useChange";
import Loader from "../Common/Loader";

const SignIn = () => {

    const [currentUser,onUserchange] =useChange();
    const { user, setUser } = useContext(UserContext);
    const[loader,setLoader] = useState(false);

    const onSignIn = async (e) => {
        setLoader(true);
        try {
            const { data } = await UserService().createUser(currentUser);
            if (data && data.responseStatus == 'FAILURE') {
                window.alert(data.message);
            }
            else {
                setUser(data.responseData);
            }
        }
        catch (err) {
            console.log(err);
        }
        setLoader(false);
    }
    if (user != null) {
        return <Navigate to={"/"} />;
    }
    return (
        <React.Fragment>
            {<Loader loader={loader}/>}
            {!loader &&
            <div className="container">
                <h4>Sign In</h4>
                <div class="form-floating mb-3">
                    <input name="email" onChange={(e => { onUserchange(e) })} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input name="password" onChange={(e => { onUserchange(e) })} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <button onClick={(e) => onSignIn(e)} type="button" class="btn my-3 btn-dark btn-lg float-end">Sign In</button>
            </div>}
        </React.Fragment>
    )
}

export default SignIn;