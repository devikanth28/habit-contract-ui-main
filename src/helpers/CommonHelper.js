export const MESSAGE_TYPE = {
    DEFAULT : 'primary',
    SUCCESS : 'success',
    WARNING : 'warning',
    FAILURE : 'danger'
}

export const isNotEmpty = (obj) => {
    var isNotEmpty = true;
    if(obj == undefined || obj == "undefined" || obj == null || obj == "null"){
        return false;
    }
    var isNotEmpty = true;
    if (obj == undefined || obj == "undefined" || obj == null || obj == "null") {
        return false;
    }
    switch (typeof obj) {
        case "number":
            isNotEmpty = obj.toString().length > 0;
            break;
        case "string":
            isNotEmpty = obj.length > 0;
            break;
        case "object":
            if (obj instanceof Array) {
                isNotEmpty = obj.length > 0;
                break;
            } else {
                isNotEmpty = Object.keys(obj).length > 0;
                break;
            }
    }
    return isNotEmpty;

}