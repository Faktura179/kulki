import {Square, Ball, Position, randomColor, Color} from './square'
import {Pathfinding} from "./pathfinding"

export class Kulki {
    clickedBall:Ball;
    squares: Square[][];
    clickedSquare:Square;

    constructor(){
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
        
        for (let i = 0; i < 10; i++) {
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
    }

    clearPaths(){
        for (let i = 0; i < 9; i++) { 
            for (let j = 0; j < 9; j++) {
                this.squares[j][i].path=new Array<Position>();
            }
        }
    }

    findPath(sq:Square){
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
        console.log(this.clickedSquare.path)
        this.clickedSquare.path.forEach((el,i)=>{
            this.squares[el.y][el.x].element.style.backgroundColor="pink"
        })
        var finalPath: Position[] = [...this.clickedSquare.path];
        setTimeout(() => {
            console.log(finalPath)
            finalPath.forEach((el,i)=>{
                this.squares[el.y][el.x].element.style.backgroundColor="white"
            })
        }, 1000);
        if(queue.length!=0){
            this.squares[this.clickedBall.pos.y][this.clickedBall.pos.x].removeBall()
            this.clickedSquare.putBall(this.clickedBall);
        }
        this.clearPaths()
    }

}

let app:Kulki = new Kulki();
(<any>window).app = app;

export function ballWrapper(target:object, key:string, descriptor:PropertyDescriptor):PropertyDescriptor{
    
    let originalMethod=descriptor.value;
    descriptor.value=function(...args:any[]):void{
        let result = originalMethod.apply(this, args)
        app.clickedBall = this;
    }

    return descriptor;
}
export function squareWrapper(target:object, key:string, descriptor:PropertyDescriptor):PropertyDescriptor{
    
    let originalMethod=descriptor.value;
    descriptor.value=function(...args:any[]):void{
        let result = originalMethod.apply(this, args)
        if(app.clickedBall!=null){
            app.clickedSquare = this;
            app.findPath(app.squares[app.clickedBall.pos.y][app.clickedBall.pos.x]);
        }
    }

    return descriptor;
}
