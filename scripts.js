const library = []

function book(title, autor, pages, read){
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
}

function addBook(title, autor, pages, read){
    let addedBook = new book(title, autor, pages, read);
    library.push(addedBook);
} 

document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let autor = document.getElementById("autor").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    if(read === false){read = "No"}
    else {read = "Yes!"}

    addBook(title, autor, pages, read);

    document.getElementById("form").reset();
    renderBooks();
})


const bookContainer = document.querySelector(".display");

function renderBooks(){
    bookContainer.innerHTML = "";

    library.forEach(addedBook => {
    
        let bookCard = document.createElement("div");
        bookCard.classList.add("cards");

        bookCard.innerHTML = `<h4>${addedBook.title}</h4> <p>By ${addedBook.autor}</p> <p>${addedBook.pages} pages</p> <p>read?: ${addedBook.read}`;

        bookContainer.appendChild(bookCard);
})}



