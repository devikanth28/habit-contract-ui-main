import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import UserService from "../../apis/UserService";
import { UserContext } from "../../contexts/Contexts";
import useChange from "../../hooks/useChange";
import Loader from "../Common/Loader";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const SignIn = () => {

    const [currentUser,onUserchange] =useChange();
    const { user, setUser } = useContext(UserContext);
    const[loader,setLoader] = useState(false);
    const [isModalOpen, setModalOpen] = useState(true);

    const onSignIn = async (e) => {
        setLoader(true);
        try {
            const { data } = await UserService().createUser(currentUser);
            if (data && data.responseStatus == 'FAILURE') {
                window.alert(data.message);
            }
            else {
                setUser(data.responseData);
                // setModalOpen(!isModalOpen)
            }
        }
        catch (err) {
            console.log(err);
        }
        setModalOpen(!isModalOpen)
        setLoader(false);
    }
    if (user != null) {
        return <Navigate to={"/"} />;
    }
    return (
        <React.Fragment>
            {<Loader loader={loader}/>}
            <Modal isOpen={isModalOpen} centered>
                <ModalHeader>Sign In</ModalHeader>
                <ModalBody>
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
            </div>} 
                </ModalBody>
                <ModalFooter className="d-flex justify-content-center border-top">
                <button className="bg-white border me-3 p-2 rounded-2 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="me-2" width="36px" height="36px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                            <span>
                                Continue With Google
                            </span> 
                            </button>
                <button onClick={(e) => onSignIn(e)} type="button" class="btn my-3 btn-dark btn-lg float-end">Sign In</button>

                </ModalFooter>
            </Modal>
        
        </React.Fragment>
    )
}

export default SignIn;