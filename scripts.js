function book(title, autor, pages, read){
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function(){
        console.log(
            "Book: "+ this.title + ", written by " + this.autor + " has " + this.pages + " pages. Read = "this.read
        )
    }
}