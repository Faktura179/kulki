import {Square, Ball, Position,} from './square'
import {Pathfinding} from "./pathfinding"

export enum Color{
    Red="Red",
    Green="Green",
    Blue="Blue",
    Yellow="Yellow",
    Cyan="Cyan",
    Magenta="Magenta",
    Grey="Grey" 
}

function randomColor():string{
    const keys = Object.keys(Color) //.filter(v => isNaN(Number(v)))
    let val = keys[Math.floor(Math.random()*keys.length)]
    return val;
}

export class Kulki {
    clickedBall:Ball;
    squares: Square[][];
    clickedSquare:Square;
    points:number;
    nextBalls:Ball[];
    nextSqaures:HTMLElement[];

    constructor(){
        this.points=0;
        document.getElementById("pts").innerText = this.points.toString();
        let rows = document.getElementsByClassName("row")
        this.squares = new Array<Array<Square>>();
        for (let i = 0; i < rows.length; i++) {
            let row : Square[] = new Array<Square>();
            for (let j = 0; j < rows[i].children.length; j++) {
                try{
                    row.push(new Square(rows[i].children[j],new Position(j,i)));
                }catch(e){

                }
            }
            this.squares.push(row);
        }
        
        for (let i = 0; i < 5; i++) {
            let x:number = Math.floor(Math.random()*9)
            let y:number = Math.floor(Math.random()*9)
            try{
                while(!this.squares[y][x].putBall(new Ball(randomColor(),new Position(x,y)))){
                    x= Math.floor(Math.random()*9)
                    y = Math.floor(Math.random()*9)
                }
            }catch(e){

            }
        }
        this.nextSqaures = new Array<HTMLElement>();
        this.nextBalls = new Array<Ball>();
        let sqs:HTMLCollectionOf<Element> = document.getElementsByClassName("square1")
        for (let i = 0; i < sqs.length; i++) {
            this.nextSqaures.push(<HTMLElement>sqs[i]); 
        } 
        
        for (let i = 0; i < 3; i++) {
            try{
                let ball:Ball = new Ball(randomColor(),new Position(-1,-1));
                this.nextBalls.push(ball)
                this.nextSqaures[i].appendChild(this.nextBalls[i].element)
            }catch(e){

            }
                
        }       
    }

    clearPaths():void{
        for (let i = 0; i < 9; i++) { 
            for (let j = 0; j < 9; j++) {
                this.squares[j][i].path=new Array<Position>();
            }
        }
    }

    checkPoints():void{
        let deleted:boolean= false;
        //Check if there are enough of the same colors in rows
        let sameInRow:number = 0;
        let color: string = null;
        let rowStart:number = null;
        let rowLength:number = null;
        for (let i = 0; i < 9; i++) {
            sameInRow = 0;
            color=null;
            rowStart=null;
            rowLength=null;
            for (let j = 0; j < 9; j++) {
                if(this.squares[i][j].isOccupied()){
                    if(this.squares[i][j].getBallColor()==color){
                        sameInRow++;
                    }else{
                        sameInRow=0
                        color = this.squares[i][j].getBallColor();
                    }
                }else{
                    sameInRow=0;
                    color=null;
                }
                if(sameInRow>=4){
                    rowStart=j-sameInRow;
                    rowLength=sameInRow;
                    //console.log(i,j,j-sameInRow,sameInRow)
                }
            }
            if(rowStart!=null){
                for (let k = 0; k < rowLength+1; k++) {
                    console.log("delete from sqares[",i ,"][",rowStart+k,"]")
                    this.squares[i][rowStart+k].removeBall();
                    this.points++;
                }
                deleted=true;
            }
        }

        //Check if there are enough of the same colors in columns
        let sameInCol:number = 0;
        color = null;
        let ColStart:number = null;
        let ColLength:number = null;
        for (let i = 0; i < 9; i++) {
            sameInCol = 0;
            color=null;
            ColStart=null;
            ColLength=null;
            for (let j = 0; j < 9; j++) {
                if(this.squares[j][i].isOccupied()){
                    if(this.squares[j][i].getBallColor()==color){
                        sameInCol++;
                    }else{
                        sameInCol=0
                        color = this.squares[j][i].getBallColor();
                    }
                }else{
                    sameInCol=0;
                    color=null;
                }
                if(sameInCol>=4){
                    ColStart=j-sameInCol;
                    ColLength=sameInCol;
                    //console.log(i,j,j-sameInRow,sameInRow)
                }
            }
            if(ColStart!=null){
                for (let k = 0; k < ColLength+1; k++) {
                    console.log("delete from sqares[",ColStart+k ,"][",i,"]")
                    this.squares[ColStart+k][i].removeBall();
                    this.points++;
                }
                deleted=true;
            }
        }
        //Check if there are enough of the same colors in diag left-right
        for (let i = 0; i < 9; i++) {
            sameInCol = 0;
            color=null;
            ColStart=null;
            ColLength=null;
            for (let j = 0; j < 9; j++) {
                if(j+i<9){
                    if(this.squares[j][j+i].isOccupied()){
                        if(this.squares[j][j+i].getBallColor()==color){
                            sameInCol++;
                        }else{
                            sameInCol=0
                            color = this.squares[j][j+i].getBallColor();
                        }
                    }else{
                        sameInCol=0;
                        color=null;
                    }
                    if(sameInCol>=4){
                        ColStart=j-sameInCol;
                        ColLength=sameInCol;
                        //console.log(i,j,j-sameInCol,sameInCol)
                    }
                }
            }
            if(ColStart!=null){
                for (let k = 0; k < ColLength+1; k++) {
                    console.log("delete from sqares[",ColStart+k ,"][",i+k+ColStart,"]")
                    this.squares[ColStart+k][i+k+ColStart].removeBall();
                    this.points++;
                }
                deleted=true;
            }
        }
        for (let i = 0; i < 9; i++) {
            sameInCol = 0;
            color=null;
            ColStart=null;
            ColLength=null;
            for (let j = 0; j < 9; j++) {
                if(j+i<9){
                    if(this.squares[j+i][j].isOccupied()){
                        if(this.squares[j+i][j].getBallColor()==color){
                            sameInCol++;
                        }else{
                            sameInCol=0
                            color = this.squares[j+i][j].getBallColor();
                        }
                    }else{
                        sameInCol=0;
                        color=null;
                    }
                    if(sameInCol>=4){
                        ColStart=j-sameInCol;
                        ColLength=sameInCol;
                        //console.log(i,j,j-sameInCol,sameInCol)
                    }
                }
            }
            if(ColStart!=null){
                for (let k = 0; k < ColLength+1; k++) {
                    console.log("delete from sqares[", i+k+ColStart,"][", ColStart+k,"]")
                    this.squares[i+k+ColStart][ColStart+k].removeBall();
                    this.points++;
                }
                deleted=true;
            }
        }
        //Check if there are enough of the same colors in diag right-left
        for (let i = 8; i >= 0; i--) {
            sameInCol = 0;
            color=null;
            ColStart=null;
            ColLength=null;
            for (let j = 0; j < 9; j++) {
                if(i-j>=0){
                    if(this.squares[i-j][j].isOccupied()){
                        if(this.squares[i-j][j].getBallColor()==color){
                            sameInCol++;
                        }else{
                            sameInCol=0
                            color = this.squares[i-j][j].getBallColor();
                        }
                    }else{
                        sameInCol=0;
                        color=null;
                    }
                    if(sameInCol>=4){
                        ColStart=i-j;
                        ColLength=sameInCol;
                        console.log(i,j,ColStart,sameInCol)
                    }
                }
            }
            if(ColStart!=null){
                for (let k = 0; k < ColLength+1; k++) {
                    console.log("delete from sqares[",ColStart+k ,"][",i-k-ColStart,"]")
                    this.squares[ColStart+k][i-k-ColStart].removeBall();
                    this.points++;
                }
                deleted=true;
            }
        }
        for (let i = 0; i < 9; i++) {
            sameInCol = 0;
            color=null;
            ColStart=null;
            ColLength=null;
            for (let j = 0; j < 9; j++) {
                if(i+j<9){
                    if(this.squares[8-j][i+j].isOccupied()){
                        if(this.squares[8-j][i+j].getBallColor()==color){
                            sameInCol++;
                        }else{
                            sameInCol=0
                            color = this.squares[8-j][i+j].getBallColor();
                        }
                    }else{
                        sameInCol=0;
                        color=null;
                    }
                    if(sameInCol>=4){
                        ColStart=j-sameInCol;
                        ColLength=sameInCol;
                        console.log(i,j,ColStart,sameInCol)
                    }
                }
            }
            if(ColStart!=null){
                for (let k = 0; k < ColLength+1; k++) {
                    console.log("delete from sqares[",8-ColStart-k ,"][",i+k+ColStart,"]")
                    this.squares[8-ColStart-k][i+k+ColStart].removeBall();
                    this.points++;
                }
                deleted=true;
            }
        }

        //set points
        document.getElementById("pts").innerText = this.points.toString();
        if(!deleted)
            this.randomBalls();
    }

    randomBalls():void{
        let emptySquares:number = 0;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if(!this.squares[i][j].isOccupied())
                    emptySquares++;
            }
        }
        if(emptySquares<4){
            for (let i = 0; i < emptySquares; i++){
                let x:number = Math.floor(Math.random()*9)
                let y:number = Math.floor(Math.random()*9)
                while(!this.squares[y][x].putBall(this.nextBalls[i])){
                    x= Math.floor(Math.random()*9)
                    y = Math.floor(Math.random()*9)
                }
            }
            alert("Przegrałeś!")
            return;
        }
        for (let i = 0; i < 3; i++) {
            let x:number = Math.floor(Math.random()*9)
            let y:number = Math.floor(Math.random()*9)
            while(!this.squares[y][x].putBall(this.nextBalls[i])){
                x= Math.floor(Math.random()*9)
                y = Math.floor(Math.random()*9)
            }
        }
        this.nextBalls = new Array<Ball>();
        for (let i = 0; i < 3; i++) {
            this.nextBalls.push(new Ball(randomColor(),null))
            this.nextSqaures[i].appendChild(this.nextBalls[i].element)
        }
    }

    findPath(sq:Square, move:boolean):void{
        let path:Array<Array<Array<Position>>> =  new Array<Array<Array<Position>>>()
        for (let i = 0; i < 9; i++) {
            let row: Array<Array<Position>> = new Array<Array<Position>>(); 
            for (let j = 0; j < 9; j++) {
                let arr: Position[] = new Array<Position>();
                row.push(arr)
            }
            path.push(row);
        }
        let queue:Square[] = new Array<Square>();
        queue.push(sq);
        while(queue.length!=0){
            let square:Square = queue.shift();
            path[square.pos.y][square.pos.x] = square.path;

            if(square==this.clickedSquare){
                break;
            }
            if(square.pos.x+1<9)
            if(!this.squares[square.pos.y][square.pos.x+1].isOccupied() && path[square.pos.y][square.pos.x+1].length==0){
                let newPath:Position[]=square.path.slice(0)
                newPath.push(this.squares[square.pos.y][square.pos.x+1].pos)
                this.squares[square.pos.y][square.pos.x+1].path=newPath
                queue.push(this.squares[square.pos.y][square.pos.x+1])
            }
            if(square.pos.x-1>=0)
            if(!this.squares[square.pos.y][square.pos.x-1].isOccupied() && path[square.pos.y][square.pos.x-1].length==0){
                let newPath:Position[]=square.path.slice(0)
                newPath.push(this.squares[square.pos.y][square.pos.x-1].pos)
                this.squares[square.pos.y][square.pos.x-1].path=newPath
                queue.push(this.squares[square.pos.y][square.pos.x-1])
            }
            if(square.pos.y+1<9)
            if(!this.squares[square.pos.y+1][square.pos.x].isOccupied() && path[square.pos.y+1][square.pos.x].length==0){
                let newPath:Position[]=square.path.slice(0)
                newPath.push(this.squares[square.pos.y+1][square.pos.x].pos)
                this.squares[square.pos.y+1][square.pos.x].path=newPath
                queue.push(this.squares[square.pos.y+1][square.pos.x])
            }
            if(square.pos.y-1>=0)
            if(!this.squares[square.pos.y-1][square.pos.x].isOccupied() && path[square.pos.y-1][square.pos.x].length==0){
                let newPath:Position[]=square.path.slice(0)
                newPath.push(this.squares[square.pos.y-1][square.pos.x].pos)
                this.squares[square.pos.y-1][square.pos.x].path=newPath
                queue.push(this.squares[square.pos.y-1][square.pos.x])
            }
        }
        //console.log(this.clickedSquare.path)
        this.clickedSquare.path.forEach((el,i)=>{
            this.squares[el.y][el.x].element.style.backgroundColor="pink"
            if(!move)
            this.squares[el.y][el.x].element.style.backgroundColor="#e3c2e9"
        })
        var finalPath: Position[] = [...this.clickedSquare.path];
        if(move)
        setTimeout(() => {
           // console.log(finalPath)
            finalPath.forEach((el,i)=>{
                this.squares[el.y][el.x].element.style.backgroundColor="white"
            })
        }, 1000);

        if(move)
        if(this.clickedSquare.path.length!=0){
            this.squares[this.clickedBall.pos.y][this.clickedBall.pos.x].removeBall()
            this.clickedSquare.putBall(this.clickedBall);
            this.checkPoints()
        }
        this.clearPaths()
        if(move){
            this.clickedBall.element.style.width="40px";
            this.clickedBall.element.style.height="40px";
            this.clickedBall.element.style.top="10px";
            this.clickedBall.element.style.left="10px";
            this.clickedBall.element.style.border="none";
            this.clickedBall=null;
            this.clickedSquare=null;
        }
        
    }

}

export let app:Kulki = new Kulki();
(<any>window).app = app;

export function ballWrapper(target:object, key:string, descriptor:PropertyDescriptor):PropertyDescriptor{
    
    let originalMethod=descriptor.value;
    descriptor.value=function(...args:any[]):void{
        if(app.clickedBall!=null){
            app.clickedBall.element.style.width="40px";
            app.clickedBall.element.style.height="40px";
            app.clickedBall.element.style.top="10px";
            app.clickedBall.element.style.left="10px";
            app.clickedBall.element.style.border="none";
        }

        let result = originalMethod.apply(this, args)

        this.element.style.width="55px";
        this.element.style.height="55px";
        this.element.style.top="1px";
        this.element.style.left="1px";
        this.element.style.border="2px solid black";

        if(app.clickedBall==this){
            app.clickedBall.element.style.width="40px";
            app.clickedBall.element.style.height="40px";
            app.clickedBall.element.style.top="10px";
            app.clickedBall.element.style.left="10px";
            app.clickedBall.element.style.border="none";
            app.clickedBall=null;
        }else{
            app.clickedBall = this;
        }
    
    }

    return descriptor;
}
export function squareWrapper(target:object, key:string, descriptor:PropertyDescriptor):PropertyDescriptor{
    
    let originalMethod=descriptor.value;
    descriptor.value=function(...args:any[]):void{
        let result = originalMethod.apply(this, args)
        if(app.clickedBall!=null && app.clickedBall.pos!=null){
            app.clickedSquare = this;
            app.findPath(app.squares[app.clickedBall.pos.y][app.clickedBall.pos.x],true);
        }
    }

    return descriptor;
}
export function highlightPath(target:object, key:string, descriptor:PropertyDescriptor):PropertyDescriptor{
    
    let originalMethod=descriptor.value;
    descriptor.value=function(...args:any[]):void{

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                app.squares[i][j].element.style.backgroundColor="white"
            }
        }

        let result = originalMethod.apply(this, args)
        if(app.clickedBall!=null && app.clickedBall.pos!=null){
            app.clickedSquare = this;
            app.findPath(app.squares[app.clickedBall.pos.y][app.clickedBall.pos.x],false);
        }
    }

    return descriptor;
}
