import { useState } from "react";

const useChange = () => {

    const [obj, setObj] = useState({});

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const tempuser = { ...obj };
        if (e.target.type == 'checkbox' && !e.target.checked) {
            tempuser[name] = "";
        }
        else {
            tempuser[name] = value;
        }
        setObj(tempuser);
    }

    return [obj, onChange];

}

export default useChange;