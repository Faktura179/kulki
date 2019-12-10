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


    }

}

let app:Kulki = new Kulki();
(<any>window).app = app;

export function ballWrapper(target:object, key:string, descriptor:PropertyDescriptor){
    
    let originalMethod=descriptor.value;
    descriptor.value=function(...args:any[]){
        let result = originalMethod.apply(this, args)
        app.clickedBall = this;
    }

    return descriptor;
}
export function squareWrapper(target:object, key:string, descriptor:PropertyDescriptor){
    
    let originalMethod=descriptor.value;
    descriptor.value=function(...args:any[]){
        let result = originalMethod.apply(this, args)
        if(app.clickedBall!=null){
            app.clickedSquare = this;
            app.findPath(app.squares[app.clickedBall.pos.y][app.clickedBall.pos.x]);
        }
    }

    return descriptor;
}
