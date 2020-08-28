import React from "react";
import SvgImport from "../../_svg/Importcc";

interface State {

}

interface Props {

}

export default class Import extends React.Component<Props, State>{
    constructor(props:any) {
        super(props);
        this.state = {

        }
        // @ts-ignore
    }

    render() {
        const setHeightImport = document.getElementById("set-height-import")
        // @ts-ignore
        const isFirefox = typeof InstallTrigger !== 'undefined';
        return(
            <section>
                <div className={"import container-fluid"}>
                    <div className={"svg-text"}>
                        <div>
                            <SvgImport height={"10vh"} fill={"#3e9f92"}/>
                            <h3><b>Import</b></h3>
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