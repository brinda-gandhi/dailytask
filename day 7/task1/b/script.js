class Movie{
constructor(title, studio, rating, p4) {   
    if (title) this.title = title;
    if (studio) this.studio =studio;
    if (rating) this.rating = rating === undefined ? "PG" : rating;
   
  }
}

const myMovie = new Movie("Iron Man","Marvel Studios");
console.log(myMovie.title + " " + myMovie.studio+" "+myMovie.rating) ;

// output:
// Iron Man Marvel Studios PG