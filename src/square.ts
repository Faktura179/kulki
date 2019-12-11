import {ballWrapper, squareWrapper} from "./main"

export class Square {
    element:HTMLElement;
    private occupied:boolean;
    private ball:Ball;
    pos:Position;
    path:Position[];

    constructor(element:Element,pos:Position){
        this.element = <HTMLElement>element;
        this.element.onclick = this.onClick.bind(this);
        this.occupied=false;
        this.ball = null;
        this.pos=pos;
        this.path=new Array<Position>();
    }

    @squareWrapper
    onClick(event:Event):void{
        console.log(this)
    }

    isOccupied():boolean{
        return this.occupied
    }

    removeBall():void{
        this.occupied=false;
        this.ball=null;
    }

    putBall(ball :Ball):boolean{
        if(this.occupied)
            return false;
        this.ball = ball;
        ball.pos=this.pos;
        this.occupied=true;
        this.element.appendChild(this.ball.element);
        return true;
    }

}

export class Position{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y=y;
    }
}

export class Ball{
    element:HTMLElement;
    private color:string;
    pos:Position;
    clicked:boolean;

    constructor(color:string,pos:Position){
        this.pos=pos;
        this.color = color;
        this.element = document.createElement('div') as HTMLElement
        this.element.classList.add("ball")
        this.element.style.backgroundColor = this.color;
        this.element.onclick = this.onClick.bind(this)
        this.clicked=false;
    }

    @ballWrapper
    onClick(event:Event):Ball{
        console.log(this)
        event.stopPropagation()
        this.clicked=!this.clicked;
        return this;
    }

}

export enum Color{
    Red="Red",
    Green="Green",
    Blue="Blue",
    Yellow="Yellow",
    Cyan="Cyan",
    Magenta="Magenta",
    Grey="Grey" 
}

export function randomColor():string{
    const keys = Object.keys(Color).filter(v => isNaN(Number(v)))
    let val = keys[Math.floor(Math.random()*keys.length)]
    return val;
}