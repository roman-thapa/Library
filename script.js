let myLibary = [];
let bookContainer = document.querySelector(".bookContainer");
let newBookButton = document.querySelector(".newBookButton");
let addBook = document.querySelector(".addBook");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let status = document.querySelector("#status");
let visibilityOfForm = document.querySelector("#myDropdown")

newBookButton.addEventListener("click", () => {
  showForm();
  clearForm();
});

function showForm() {
  visibilityOfForm.classList.toggle("show");
}

function clearForm() {
  title.innerHTML = "";
  author.innerHTML = "";
  pages.innerHTML = "";
}

addBook.addEventListener('click', (event) => {
  let flag = false;
  if(title.value === "" || author.value === "" || pages.value === ""){
    event.preventDefault();
  } else if (title.value != "" && author.value != "" && pages.value != ""){
    flag = true;
  }
  if(flag){
    myLibary.push([{
        title: title.value,
        author: author.value,
        pages: pages.value,
        status: status.checked
    }]);
    showForm();
    addBookToLibary();
  }
})



/*(function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.updateMyLibary = function () {
  myLibary.push([
    {
      title: this.title,
      author: this.author,
      pages: this.pages,
      status: this.status,
    },
  ]);
};

Book.prototype.deleteMyLibary = function () {
  delete this.myLibary;
};

let bookOne = new Book("Atomic Habit", "James Clear", 400, true);

let bookTwo = new Book(
  "12 Rules for Life",
  "Jorden Peterson",
  300,
  false
);

let bookThree = new Book(
  "Harry Porter",
  "J. K. Rolling",
  "3407",
  false
)

bookOne.updateMyLibary();

bookTwo.updateMyLibary();

bookThree.updateMyLibary();)*/

function addBookToLibary() {
  myLibary.forEach((book) => {
    book.forEach((detials) => {
        let newBook = document.createElement("div");
        let deleteBook = document.createElement("div");
        deleteBook.className = "close";
        newBook.classList = "box";
        newBook.innerText = "Title : " +
        detials.title +
        "\n" +
        "Author : " +
        detials.author +
        "\n" +
        "Pages : " +
        detials.pages +
        readStatus(detials.status);
        bookContainer.append(newBook);
        newBook.appendChild(deleteBook);
    });
  });
}

function readStatus(status) {
  if(status){
    return "\nStatus : Completed";
  } else {
    return "\nStatus : Incomplete";
  }
}