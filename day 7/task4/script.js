function UberPrice(){
    this.distance="unknown";
    this.price= function(){
       return this.distance * 12.75;
    }
}

var ride = new UberPrice();
ride.distance=27;

console.log("Your Ride Price:"+ride.price());

// output 
// Your Ride Price:344.25