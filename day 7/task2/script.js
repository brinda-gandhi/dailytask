

function Circle(radius,color){
    this.radius=0;
    this.color="unknown";
    this.string=function(){
        return this.radius+" "+this.color;
    }
    this.area=function(){
        console.log(3.14*this.radius^2);
    }
    this.circumference=function(){
        console.log(2*3.14*this.radius);
    }

    Object.defineProperty(Circle, "getRadius", {
        get : function () {
            return this.radius;
        }
    })

    Object.defineProperty(Circle, "setRadius", {
        set : function (value) {
            this.radius = value;
        }
    })


    Object.defineProperty(Circle, "getColor", {
        get : function () {
            return this.color;
        }
    })

    Object.defineProperty(Circle, "setColor", {
        set : function (value) {
            this.color = value;
        }
    })

    var dig = new Circle();
    dig.radius=1.0;
    dig.color="red";
    console.log(dig.string());
    console.log(dig.area());
    console.log(dig.circumference());
    
}


// output
// 1.0 red
// 3.14159
// 6.28319