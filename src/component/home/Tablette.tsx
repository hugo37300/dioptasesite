import React from "react";
import SvgPdiList from "../../_svg/PdiList";

interface State {

}

interface Props {

}

export default class Tablette extends React.Component<Props, State>{
    constructor(props:any) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <section>
                <div className={"tablette container-fluid"}>
                    <div className={"svg-text"}>
                        <div>
                            <SvgPdiList height={"10vh"} fill={"#3e9f92"}/>
                            <h3><b>Liste PDI</b></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}