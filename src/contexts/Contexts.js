import React, { createContext } from "react";

export const UserContext = React.createContext(null);
export const AlertContext = React.createContext(null);

export const ToastContext = createContext();