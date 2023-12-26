import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/Contexts";

const Header = () => {

    const { user, setUser } = useContext(UserContext);

    
    return (
        <React.Fragment>
            <nav class="navbar navbar-light bg-danger bg-gradient">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/home" >
                        <h3 className="btn  btn-lg text-white bg-dark">Habit Contract </h3>
                    </Link>
                    <div className="float-right">
                        {!user && <Link className="mx-3" to='/signUp'>
                            <button type="button" class="btn btn-dark btn-lg">SignUp</button>
                        </Link>}
                        { !user && <span> Welcome errtytyutyutu{user?.userName}</span>}
                        <Link className="mx-3" to={`${user ? 'signOut' : '/signIn'}`}>
                            <button type="button" class="btn btn-dark btn-lg">{`${user ? 'SignOut' : 'SignIn'}`}</button>
                        </Link>
                    </div>
                </div>
        {/* {toastContent.message} */}
            </nav>
        </React.Fragment>
    )
}

export default Header;