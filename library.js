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
        readBtn.style.backgroundColor = "red"
        counter++
    }else{
        readBtn.textContent = "Reading it";
        readBtn.style.backgroundColor = "rgb(211, 156, 18)"
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
        let newBook = new Book(title.value, author.value, genres.value, release.value, pages.value);
            pushToLibrary(newBook);
        let newBookDiv = document.createElement("div");
            newBookDiv.className = "book";
        let bookP = document.createElement("p");
            bookP.textContent = `${title.value} | ${author.value} | ${genres.value} | released date: ${release.value} | ${pages.value} pages`;
        let read = document.createElement("button");
            read.className = "bookBtn read";
            read.textContent = "Reading it"
            read.addEventListener("click", changeStatus);
        let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "bookBtn delete";
            deleteBtn.addEventListener("click", deleteSelf);
        newBookDiv.appendChild(bookP);
        newBookDiv.appendChild(read);
        newBookDiv.appendChild(deleteBtn);
        bookShelf.appendChild(newBookDiv);
    }else{
        alert("You have to fill out all the datas!")
    }
});

//Searchbar
let searchBar = document.getElementById("searchBar")
searchBar.addEventListener("change", (e) => {
    console.log(e.target.value)
})

