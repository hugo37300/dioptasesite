import React from "react";

import CanvasScrollable from "./CanvasScrollable";
import Import from "./Import";
import Sites from "./Sites";
import Tablette from "./Tablette";
import Pdi from "./Pdi";

import SvgLogoCrystalcloud from "../../_svg/LogoCrystalcloud";
import SvgEarth from "../../_svg/Earth"

interface canvas {
    id: number,
    canvasOpacity: number,
    canvasIndex: number,
}

interface State {
    canvasList: Array<canvas>
}

interface Props {

}

export default class HomePage extends React.Component<Props, State> {
    constructor(Props: Props) {
        super(Props);
        this.state = {
            canvasList: [
                {id: 0, canvasOpacity: 1, canvasIndex: 11},
                {id: 1, canvasOpacity: 0, canvasIndex: 9},
                {id: 2, canvasOpacity: 0, canvasIndex: 8},
                {id: 3, canvasOpacity: 0, canvasIndex: 7},
                {id: 4, canvasOpacity: 0, canvasIndex: 6},
            ]
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(scrollY: number, canvasId: number, isDown: boolean) {
        const {canvasList} = this.state
        if (scrollY < 1500) {
            canvasList[0].canvasOpacity = 1
            canvasList[0].canvasIndex = 11
            canvasList[1].canvasOpacity = 0
            canvasList[1].canvasIndex = 9
            this.setState({
                canvasList,
            })
        }
        if (scrollY > 1500 && scrollY < 2600) {
            canvasList[1].canvasOpacity = 1
            canvasList[1].canvasIndex = 11
            canvasList[2].canvasOpacity = 0
            canvasList[2].canvasIndex = 9
            canvasList[0].canvasOpacity = 0
            canvasList[0].canvasIndex = 0
            this.setState({
                canvasList,
            })
        }
        if (scrollY > 2200) {
            canvasList[2].canvasOpacity = 1
            canvasList[2].canvasIndex = 11
            this.setState({
                canvasList,
            })
        }
        if (scrollY > 2900 && scrollY < 3800) {
            canvasList[1].canvasOpacity = 0
            canvasList[1].canvasIndex = 0
            this.setState({
                canvasList,
            })
        }

        if (scrollY > 3700) {
            canvasList[3].canvasOpacity = 1
            canvasList[3].canvasIndex = 11
            this.setState({
                canvasList,
            })
        } else {
            canvasList[3].canvasOpacity = 0
            canvasList[3].canvasIndex = 9
            this.setState({
                canvasList,
            })
        }
    }

    render() {
        const {canvasList} = this.state
        return (
            <body>
            <div className='svg-logo'>
                <SvgLogoCrystalcloud fill={'#000'}/>
            </div>
            <div
                className="scroll-sequence"
            >
                <div className="sequence-container">
                    <div className="image-sequence" id={"sequence0"}>
                        <div className="canvas-container">
                            {canvasList.map(canvas => {
                                if(canvas.id !== 4){
                                    return(
                                        <CanvasScrollable canvasId={canvas.id} right={canvas.id}
                                                          canvasZindex={canvas.canvasIndex} canvasOpacity={canvas.canvasOpacity}
                                                          scroll={this.handleScroll}/>
                                    )
                                }
                                else{
                                    return (
                                        <div style={{zIndex:canvas.canvasIndex, opacity:canvas.canvasOpacity}}>
                                            <Pdi/>
                                            <CanvasScrollable canvasId={canvas.id} canvasZindex={canvas.canvasIndex} canvasOpacity={canvas.canvasOpacity} scroll={this.handleScroll}/>
                                        </div>
                                        )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <section id={"section1"}>
                <div className={"container earth-homepage"}>
                    <img src={require("../../_resources/image/txt_connexion.png")}/>
                    <div className={"svg-text"}>
                        <SvgEarth id={"v1"} height={"15vh"} fill={"#3e9f92"}/>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        </p>
                    </div>
                </div>
            </section>
            <Import/>
            <Sites/>
            <div className={"container"} id={"tablette-image"}>
                <img src={require("../../_resources/image/dispoTablette.png")} style={{margin: '0 auto'}}/>
            </div>
            <Tablette/>
            </body>
        )
    }
}

/*
<div className='svg-logo'>
    <SvgLogoCrystalcloud fill={'#000'}/>
</div>
<div id="set-height"></div>
<video id="v0" tabIndex={0} onLoadedMetadata={() => {
    // @ts-ignore
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px"
}}>
    <source
        type='video/mp4'
        src={isFirefox ? require("../../_resources/laptop/laptop.mp4") : require("../../_resources/laptop/Laptop04.mp4")}
    ></source>
</video>
<div className={"container earth-homepage"}>
    <img src={require("../../_resources/laptop/txt_connexion.png")}/>
    <div className={"svg-text"}>
        <SvgEarth id={"v1"} height={"15vh"} fill={"#3e9f92"}/>
        <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        </p>
    </div>
</div>
<Import/>
<Sites/>



    constructor(props:any) {
        super(props);
        this.state = {
            playbackConst:50,
            vid:document.getElementById("v0"),
            earth:document.getElementById("v1"),
            init:false,
        }
        // @ts-ignore
        this.scrollPlay = this.scrollPlay.bind(this);
    }

    componentDidMount(){
        const { init } = this.state
        if(!init){
            this.setState({
                vid:document.getElementById("v0"),
                earth:document.getElementById("v1"),
                init:true,
            })
        }
        // @ts-ignore
        window.requestAnimationFrame(this.scrollPlay);
    }

    scrollPlay(){
        const { playbackConst, vid, earth } = this.state
        var frameNumber  = window.pageYOffset/playbackConst;
        // @ts-ignore
        vid.currentTime  = frameNumber;
        console.log(window.pageYOffset/2.58)
        // @ts-ignore
        earth.style.transform = `rotate(${window.pageYOffset/2.58}deg)`
        window.requestAnimationFrame(this.scrollPlay);
    }
*/
