export class Square {
    element:HTMLElement;
    private occupied:boolean;
    private ball:Ball;
    pos:Position;
    path:Position[];

    onClick(event:Event):void;
    isOccupied():boolean;
    removeBall():void;
    putBall(ball :Ball):boolean;

}

export class Position{
    x:number;
    y:number;
}

export class Ball{
    element:HTMLElement;
    private color:string;
    pos:Position;
    clicked:boolean;

    onClick(event:Event):Ball;
}