import React, { useContext, useState } from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Navigate, useNavigate } from "react-router";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import UserService from "../../apis/UserService";
import { ToastContext, UserContext } from "../../contexts/Contexts";
import { isNotEmpty } from "../../helpers/CommonHelper";
import { Button } from "reactstrap";

const SignUp = () => {

    const [currentUser,setCurrentUser] = useState({});
    const [isModalOpen, setModalOpen] = useState(true);
    const [isRegister, setRegister] = useState(false);
    const [isExistedUser, setExistedUser] = useState(undefined);
    const {setToastContent} = useContext(ToastContext);
    const userService = UserService();
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const onSignUpClick = ()=> {
      //validate data
      createUser();
    //   setToastContent({message:"working"})
    }

    const createUser = async () => {
        try{
            if(isNotEmpty(currentUser)){
                console.log("error", currentUser)
                const {data} = await userService.createUser(currentUser);
                if(data && data.status =='SUCCESS'){
                //  window.alert(data.message);
                if(data.user.email == currentUser.email){
                    // setExistedUser(true)
                    setToastContent({message:"already Registred"})

                }
                 // navigate('/signIn');
                 setRegister(!isRegister)
            }
            }
            else{
                console.log("err")
                setToastContent({message:"please enter user details"})
                setRegister(!isRegister)
            }
        }
        catch(err){
            console.log(err);
        }
    
    }

    const onChange =(e)=> {
        const name = e.target.name;
        const value = e.target.value;
        const tempuser = {...currentUser};
        tempuser[name]=value;
        setCurrentUser(tempuser);
    } 

    if(user!=null){
        return <Navigate to={"/"}/>;
    }

const toggle = () => {
    setModalOpen(!isModalOpen)
}
// setToastContent({message:"gdhejdjkwq"})
    return (
        <React.Fragment>
            <React.Fragment>
                <Modal  isOpen={isModalOpen}
        toggle={toggle} centered>
                    <ModalHeader>Sign Up</ModalHeader>
                    <ModalBody>
                        {!isRegister ? <div>
                        <div class="form-floating mb-3">
                            <input onChange={(e=>{onChange(e)})} type="username" name="username" class="form-control" id="floatingInput" placeholder="Enter your name..." />
                            <label for="floatingInput">UserName</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input onChange={(e=>{onChange(e)})} type="email" name ="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input onChange={(e=>{onChange(e)})} type="password" name="password" class="form-control" id="floatingInput"  />
                            <label for="floatingInput">Password</label>
                        </div></div>
                    
                        :  <div>

                        <div class="input-group mb-3">
                            <div class="form-floating mb-3">
                                <input onChange={(e => { onChange(e) })} type="date" name="dob" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Date Of Birth</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input onChange={(e => { onChange(e) })} type="text" name="country" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Country</label>
                            </div>

                        </div>
                        <div class="form-floating mb-3">
                            <textarea onChange={(e => { onChange(e) })} class="form-control" name="bio" placeholder="Writer about yourself" id="floatingTextarea" />
                            <label for="floatingTextarea">Enter your bio</label>
                        </div>
                    </div>
                    }   
                    </ModalBody>
                    <ModalFooter className="d-flex justify-content-center border-top">
                        <button className="bg-white border me-3 p-2 rounded-2 shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="me-2" width="36px" height="36px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                            <span>
                                Continue With Google
                            </span> 
                            </button>
                      {!isRegister ?  <button onClick={(e)=>onSignUpClick(e)} type="button"  class="btn btn-dark btn-lg float-end">Continue</button> : <span onClick={()=>navigate("/")} className="pointer">skip</span>}
                    </ModalFooter>
                </Modal>
                

                  
            </React.Fragment>
        </React.Fragment>
    )

}

export default SignUp;