

class Movie {
    constructor(title, studio,rating) {
      this.title = title;
      this.studio= studio;
      this.rating=rating;
    }
  }
  
  const myMovie = new Movie("Iron Man","Marvel Studios","R");
//   document.getElementById("demo").innerHTML = myMovie.title + " " + myMovie.studio+" "+myMovie.rating;
 console.log(myMovie.title + " " + myMovie.studio+" "+myMovie.rating) ;

//  output
// Iron Man Marvel Studios R