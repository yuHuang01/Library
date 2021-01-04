//Theme switcher
document.querySelector("#light").addEventListener("click", () =>{
    document.body.classList.toggle("brigth")
});


//Library and the functions

let myLibrary = [];
let bookShelf = document.getElementById("bookShelf");

let Book = function(title, author, genres, date, pages){
    this.title = title;
    this.author = author;
    this.genres = genres;
    this.date = date;
    this.pages = pages;
};
function pushToLibrary(book){
    myLibrary.push(book);
};

let counter = 0;
function changeStatus(e){
    let readBtn = e.target;
    if(counter === 0){
        readBtn.textContent = "Not read";
        readBtn.style.backgroundColor = "red";
        counter++
    }else{
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "rgb(211, 156, 18)";
        counter--
    }
};
function deleteSelf(e){
    let targetDiv = e.target.parentNode;
    bookShelf.removeChild(targetDiv);
};

//Form
let title = document.getElementById("title");
let author = document.getElementById("author");
let genres = document.getElementById("genres");
let release = document.getElementById("release");
let pages = document.getElementById("pages");

let submit = document.querySelector("#submit").addEventListener("click", () => {
    if(title.value !== "" && author.value !== "" && pages.value !== ""){
        addNewBook();
    }else{
        alert("You have to fill out all the datas!")
    }
});

//Searchbar
let searchBar = document.getElementById("searchBar");
searchBar.addEventListener("change", (e) => {
    let bookShelf = document.getElementById("bookShelf");
    let books = bookShelf.querySelectorAll("div");
    for(let i = 0; i < books.length; i ++){
        if(books[i].querySelector("p").textContent.includes(e.target.value)){
            books[i].style.border = "solid red 2px";
        }else{
            books[i].style.border = "none";
        }
    }
})

let numOfBooks = document.createElement("p");
numOfBooks.textContent = `Number of books you have on your bookshelf : ${myLibrary.length}`;
numOfBooks.id = "numOfBooks"
numOfBooks.style.color = "rgb(228, 120, 31)";
document.getElementById("books").insertBefore(numOfBooks, document.getElementById("bookShelf"));

function addNewBook(){
    let newBookTitle = title.value;
    let newBook = new Book(title.value, author.value, genres.value, release.value, pages.value);
        pushToLibrary(newBook);
    let newBookDiv = document.createElement("div");
        newBookDiv.className = "book";
    let bookP = document.createElement("p");
        bookP.id = "bookText";
        bookP.textContent = `${title.value} | ${author.value} | ${genres.value} | released date: ${release.value} | ${pages.value} pages`;
    let read = document.createElement("button");
        read.className = "bookBtn read";
        read.textContent = "Read"
        read.addEventListener("click", changeStatus);
    let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "bookBtn delete";
        deleteBtn.addEventListener("click", deleteSelf);
    newBookDiv.appendChild(bookP);
    newBookDiv.appendChild(read);
    newBookDiv.appendChild(deleteBtn);
    bookShelf.appendChild(newBookDiv);
    updateBookNum(); 
}

function updateBookNum(){
    document.getElementById("numOfBooks").textContent = `Number of books you have on your bookshelf : ${myLibrary.length}`;
}