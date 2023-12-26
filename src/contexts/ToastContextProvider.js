import React, { useContext, useState } from 'react'
import { ToastContext } from './Contexts'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const ToastContextProvider = ({children}) => {
    const {toastContent, setToastContent} = useContext(ToastContext);
   
    setTimeout(()=>{
      setToastContent({message:false})
    },5000)
    
  return (
    <>
    
    {toastContent.message &&  <div>
         <ToastContainer
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
               <strong className="me-auto">Erroxxr</strong>
               {/* <small>11 mins ago</small> */}
             </Toast.Header>
             <Toast.Body>{toastContent?.message}</Toast.Body>
           </Toast>
         </ToastContainer>
     </div>}
    </>
  )
}

export default ToastContextProvider