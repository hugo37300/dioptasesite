import React from "react";
import SvgImport from "../../_svg/Importcc";

interface State {
    canvas2: HTMLElement | null | any,
    context: any,
    MAX_LEN: number,
    imgs: Array<any>,
    start: number,
    oldStart: number,
    addN: number,
    interval: number,
    leftY: number,
    curScrollY: number,
    startPos: number,
    lastPos: number,
    isStop: boolean,
    init: boolean,
    needDown: boolean,
}

interface Props {
    canvasId:number,
    canvasZindex:number,
    canvasOpacity:number,
    scroll:Function,
    right?: number | null,
}

export default class CanvasScrollable extends React.Component<Props, State>{
    constructor(Props: Props) {
        super(Props);
        this.state = {
            canvas2: document.getElementById(`scroll-picture-${Props.canvasId}`),
            context: null, //this.canvas2.getContext('2d'),
            MAX_LEN: 108,
            imgs: [],
            start: 1,
            oldStart: -1,
            addN: 1,
            interval: 5,// 控制刷新率
            leftY: 0,
            curScrollY: 0,
            startPos: 0,
            lastPos: 0,
            isStop: false,
            init: false,
            needDown: false,
        }
        this.handleResize = this.handleResize.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        const {init, MAX_LEN, context} = this.state
        const { canvasId } = this.props
        const newArrayOfImg = []
        window.scrollTo(0, 0);
        window.addEventListener("scroll", () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
        window.addEventListener("loadstart", () => this.handleLoad())
        if (!init) {
            for (let i = 0; i < MAX_LEN; i++) {
                const img = new Image();
                // img.onload = () => this.imgs[i] = img`
                const image = require(`../../_resources/laptop/laptop_${('' + i).padStart(5, '0')}.png`)
                img.src = image

                // 不管加载否 保证顺序
                newArrayOfImg.push(img);
            }
            // @ts-ignore
            this.setState({
                init: true,
                curScrollY: this.getScrollTop(),
                imgs: newArrayOfImg,
                canvas2: document.getElementById(`scroll-picture-${canvasId}`),
                startPos: canvasId === 2 ? 2500 : 0,
                // @ts-ignore
                context: document.getElementById(`scroll-picture-${canvasId}`).getContext('2d'),
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", () => this.handleScroll());
        window.removeEventListener('resize', () => this.handleResize());

    }

    getScrollTop() {
        return window.scrollY || 0;
    }

    isOver() {
        const {start, MAX_LEN} = this.state
        return start < 0 || start > MAX_LEN - 1;
    }

    handleScroll() {
        const {curScrollY, leftY, isStop, lastPos, addN, interval, start, MAX_LEN, startPos, oldStart, needDown} = this.state
        const { scroll, canvasId } = this.props
        const scrollY = this.getScrollTop();
        console.log(scrollY)
        let delta = scrollY - curScrollY;
        const isDown = delta > 0;
        let newStart = start
        scroll(scrollY, canvasId, isDown)
        delta = Math.abs(delta) + leftY;
        this.animation(scrollY, isDown)
        this.setState({
            curScrollY: scrollY,
        })

        if (
            isStop &&
            isDown === needDown &&
            ((isDown && curScrollY > lastPos) || (!isDown && curScrollY < lastPos))
        ) {
            this.setState({
                isStop: false,
            })
        }
        if (isStop) return;

        // good idea: 补偿
        const alpha = Math.floor(delta / interval) * addN || 0;
        this.setState({
            leftY: delta % interval,
        })
        isDown ? this.setState({
            start: start + alpha,
        }) : this.setState({
            start: start - alpha,
        })

        isDown ? newStart += alpha : newStart -= alpha
        if (this.isOver() && !isStop) {
            this.setState({
                isStop: true,
            })
        }

        if (newStart < 0) {
            this.setState({
                start: 0,
            })
            newStart = 0
        }

        if (newStart > MAX_LEN - 1) {
            this.setState({
                start: MAX_LEN - 1
            })
            newStart = MAX_LEN
        }

        if (startPos >= scrollY) {
            this.setState({
                start: 0
            })
            newStart = 0
        }
        if (oldStart === start) return;
        // good idea：记录
        this.setState({
            oldStart: start,
            lastPos: scrollY,
            needDown: !isDown,
        })
            console.log(newStart)

        this.drawCanvas(newStart);
    }

    animation(scrollY: number, isDown: boolean) {
        const { canvasId } = this.props
        const myCanvas = document.getElementById(`canvas${canvasId}`)
        if(myCanvas){
            if(scrollY < 500 && canvasId === 0){
                myCanvas.style.marginTop = `100px`
            }
            if(scrollY > 750 && scrollY < 1500 && isDown && canvasId === 0){
                const y = scrollY - 750
                myCanvas.style.marginTop = `${100-y}px`
            }

            if(scrollY >= 1200 && scrollY < 3150 && canvasId === 1 ){
                const y = scrollY - 1200
                myCanvas.style.marginTop = `${1020-y}px`
            }
            if(scrollY >= 2200 && scrollY < 2700 && canvasId === 2){
                const y = scrollY - 2200
                myCanvas.style.marginTop = `${620-y}px`
            }
            if(scrollY > 3150 && canvasId === 2){
                const y = scrollY - 2700
                myCanvas.style.marginTop = `${620-y}px`
            }
            if(scrollY > 3700 && scrollY < 4400 && canvasId === 3){
                const y = scrollY - 3700
                myCanvas.style.marginTop = `${920 - y}px`
            }
            if(scrollY > 4900 && canvasId === 3){
                const y = scrollY - 4900
                myCanvas.style.marginTop = `${220 - y}px`
            }
        }

    }

    drawCanvas(sequence: number) {
        const {imgs, canvas2, context, MAX_LEN} = this.state
        const { canvasId } = this.props
        // 当前序列帧
        let imgTemp
        (sequence >= 108) ? imgTemp = imgs[107] : imgTemp = imgs[sequence]
        const canvas = canvas2;
        canvas.width = imgTemp.width;
        canvas.height = imgTemp.height;
        // @ts-ignore
        document.getElementById(`canvas${canvasId}`).style.background = 'none'
        context.drawImage(imgTemp, 0, 0);

    }

    handleResize() {

        const {canvas2} = this.state
        const wScale = window.innerWidth / (canvas2.width || 1458);
        const hScale = (window.innerHeight - 52) / (canvas2.height || 1458);

        //canvas2.style.transform = `matrix(${wScale}, 0, 0, ${hScale}, 0, 0)`;

    }

    handleLoad() {
        window.scrollTo(0, 0)
    }

    render() {
        const { canvasId, canvasZindex, canvasOpacity } = this.props
        return(
            <div
                id={`canvas${canvasId}`}
                className={`canvas-wrapper wrapper-${canvasId}`}
                style={{width: "1458px", height: "820px", zIndex: canvasZindex, opacity: canvasOpacity, position:'absolute'}}
            >

                <canvas
                    id={`scroll-picture-${canvasId}`}
                    height="820"
                    style={{width: '100%'}}
                ></canvas>
            </div>
        )
    }
}