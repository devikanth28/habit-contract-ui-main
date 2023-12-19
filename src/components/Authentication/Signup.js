import React, { useContext, useState } from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Navigate, useNavigate } from "react-router";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import UserService from "../../apis/UserService";
import { ToastContext, UserContext } from "../../contexts/Contexts";
import { isNotEmpty } from "../../helpers/CommonHelper";

const SignUp = () => {

    const [currentUser,setCurrentUser] = useState({});
    const [isModalOpen, setModalOpen] = useState(true);
    const [isRegister, setRegister] = useState(false);
    const [isExistedUser, setExistedUser] = useState(undefined);
    const {toastContent, setToastContent} = useContext(ToastContext);
    const userService = UserService();
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const onSignUpClick = ()=> {
      //validate data
      createUser();
      setToastContent({message:"working"})
    }

    const createUser = async()=> {
        try{
            if(isNotEmpty(currentUser)){
                console.log("error", currentUser)
                const {data} = await userService.createUser(currentUser);
                if(data && data.status =='SUCCESS'){
                //  window.alert(data.message);
                if(data.user.email == currentUser.email){
                    setExistedUser(true)
                }
                 // navigate('/signIn');
                 setRegister(!isRegister)
            }
            }
            else{
                console.log("err")
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
                        </div>
                    {
                        isRegister &&  <div>

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
                    <ModalFooter className="d-flex justify-content-end border-top">
                        <button onClick={(e)=>onSignUpClick(e)} type="button"  class="btn btn-dark btn-lg float-end">Continue</button>
                    </ModalFooter>
                </Modal>
                

                  {true &&   <ToastContainer
          className="p-3"
          position='bottom-start'
        //   style={{ zIndex: 1 }}
        >
          <Toast bg="danger">
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Error</strong>
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>Already Registred .</Toast.Body>
          </Toast>
        </ToastContainer>}
            </React.Fragment>
        </React.Fragment>
    )

}

export default SignUp;