import React from "react";
import SvgSites from "../../_svg/Sitescc";

interface State {

}

interface Props {

}

export default class Sites extends React.Component<Props, State>{
    constructor(props:any) {
        super(props);
        this.state = {

        }
    }

    render() {
        const setHeightImport = document.getElementById("set-height-sites")
        // @ts-ignore
        const isFirefox = typeof InstallTrigger !== 'undefined';
        return(
            <section>
                <div className={"sites container-fluid"}>
                    <div className={"svg-text"}>
                        <div>
                            <SvgSites height={"10vh"} fill={"#3e9f92"}/>
                            <h3><b>Sites</b></h3>
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