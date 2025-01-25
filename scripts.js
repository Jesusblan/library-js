const library = []

function book(title, autor, pages, read){
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
    this.bookInfo = function(){
    return "Book: "+ this.title + ", written by " + this.autor + " has " + this.pages + " pages. Read = "+this.read;
    }
}

function addBook(title, autor, pages, read){
    let addedBook = new book(title, autor, pages, read);
    library.push(addedBook)
    console.log(addedBook)

} 
