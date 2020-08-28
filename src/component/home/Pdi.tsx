import React from "react";
import SvgPdi from "../../_svg/Pdicc";
interface State {

}

interface Props {

}

export default class Pdi extends React.Component<Props, State>{
    constructor(props:any) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <section style={{position:'absolute', margin:'0 auto'}}>
                <div className={"pdi container"}>
                    <div className={"svg-text"}>
                        <div>
                            <SvgPdi height={"10vh"} fill={"#3e9f92"}/>
                            <h3><b>Pdi</b></h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}