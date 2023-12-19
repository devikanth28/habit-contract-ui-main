import React from "react";

const AlertMessage = ({ message, type }) => {

    return (
        <React.Fragment>
            <div className={`alert alert-${type} d-flex align-items-center`} role="alert">
                <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill" /></svg>
                <div>
                    {message}
                </div>
            </div>
        </React.Fragment>
    );

}

export default AlertMessage;