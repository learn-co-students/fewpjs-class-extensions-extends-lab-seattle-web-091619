class Polygon{

    constructor(arr){
        this.arr = arr

    }

    get countSides(){
        return this.arr.length
    }

    get perimeter(){
        let num = 0
        for(const element of this.arr){
            num += element
        }
        return num
    }



}

class Triangle extends Polygon{
    
    get isValid(){
        let a = this.arr[0]
        let b = this.arr[1]
        let c = this.arr[2]

        if(a + b > c && b + c > a && a + c > b){
            return true
        }
        else{
            return false
        }
    }

}

class Square extends Polygon{


    get isValid(){
        let a = this.arr[0]
        let b = this.arr[1]
        let c = this.arr[2]
        let d = this.arr[3]

        if(a === b && b ===c && c === d && d === a){
            return true
        }
        else{
            return false
        }
    }

    get area(){
        if (this.isValid){
        return this.arr[0]*this.arr[0]
        }
    }









}