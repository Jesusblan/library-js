const library = []

function book(title, autor, pages, read){
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
}

function addBook(title, autor, pages, read){
    let addedBook = new book(title, autor, pages, read);
    library.push(addedBook)
    console.log(addedBook)

} 

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let autor = document.getElementById("autor").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    addBook(title, autor, pages, read);
})


