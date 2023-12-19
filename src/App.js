import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './Routing';
import Header from './components/Common/Header';
import { ToastContext, UserContext } from "./contexts/Contexts";
import ToastContextProvider from "./contexts/ToastContextProvider";


function App() {

  const [user,setUser] = useState(null);
  const [toastContent, setToastContent] = useState({});
  return (
    <React.Fragment>
      <UserContext.Provider value={{user,setUser}}>
        <ToastContext.Provider value = {{toastContent, setToastContent}}>
      <ToastContextProvider>
      <BrowserRouter>
        <Header />
        <Routing />
      </BrowserRouter>
      </ToastContextProvider>
      </ToastContext.Provider>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
