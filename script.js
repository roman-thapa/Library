let myLibary = [];
let bookContainer = document.querySelector(".bookContainer");
let newBookButton = document.querySelector(".newBookButton");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.info = function() {
    return(this.title + " by " + this.author
        + ", "+ this.pages + " pages, " + this.status);
}

Book.prototype.updateMyLibary = function() {
        myLibary.push([{title: this.title, author: this.author, pages: this.pages, status: this.status}]);
}

Book.prototype.deleteMyLibary = function() {
        delete this.myLibary;
}



let bookOne = new Book("Atomic Habit",
    "James Clear",
    400,
    "completed"
);

let bookTwo = new Book ("12 Rules for Life", 
    "Jorden Peterson", 
    300, 
    "not read yet"
);

bookOne.updateMyLibary();

bookTwo.updateMyLibary();

addBookToLibary();

function addBookToLibary() {
    myLibary.forEach((book) => {
        book.forEach((detials) => {
            console.log(detials);
            bookContainer.innerText += "Title : "+ detials.title + "\n" 
                + "Author : " + detials.author + "\n" 
                + "Page : " + detials.pages + "\n" 
                + "Status : " + detials.status  + "\n";
        })
    })
}

newBookButton.addEventListener('click', ()=>{
    showForm();
})

function showForm() {
    document.getElementById("myDropdown").classList.toggle("show");
  }