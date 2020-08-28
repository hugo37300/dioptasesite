import device from "./device"

export type state = {
    error:string,
    loading:boolean,
    devices:Array<device>,
}

export default state