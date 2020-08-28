import device from "./device"

type action = {
    type:string,
    devices:Array<device>,
}

export default action