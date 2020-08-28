import deviceConstants from "./device.constants";
import deviceService from "./device.service"
import device from "../../models/classes/device"

function getAll() {
    function request(){
        return { type: deviceConstants.GET_ALL_REQUEST };
    }
    function success(devices:[device]) {
        return { type: deviceConstants.GET_ALL_SUCCESS, }
    }
    function failure(error:string){
        return {type: deviceConstants.GET_ALL_FAILURE, }
    }
    return (dispatch: Function) => {
        dispatch(request());
        deviceService
            .getAll()
            .then((devices: [device]) => {
                dispatch(success(devices));
            })
            .catch((error: string) => {
                dispatch(failure(error));
            });
    };
}

function clear() {
    return {
        type: deviceConstants.CLEAR,
    };
}

const deviceAction = {
    getAll,
    clear,
}

export default deviceAction;