let myLibary = [];


document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('bookData');
  if (storedData) {
    myLibary = JSON.parse(storedData);
    for (const key in myLibary) {
      showBook(key);
    }
  }
});


let bookContainer = document.querySelector(".bookContainer");
let newBookButton = document.querySelector(".newBookButton");
let addBook = document.querySelector(".addBook");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let status = document.querySelector("#status");
let visibilityOfForm = document.querySelector("#myDropdown");

newBookButton.addEventListener("click", () => {
  showForm();
  clearForm();
});

function showForm() {
  visibilityOfForm.classList.toggle("show");
}

function clearForm() {
  title.value = "";
  author.value = "";
  pages.value = "";
  status.checked = false;
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
    localStorage.setItem('bookData', JSON.stringify(myLibary));
    showForm();
    showBook(myLibary.length-1);
  }
})

function showBook(indexOfBook) {
  myLibary[indexOfBook].forEach((detials) => {
    let newBook = document.createElement("div");
    let removeBookButton = document.createElement("button");
    removeBookButton.className = "close";
    newBook.id = indexOfBook;
    removeBookButton.innerText = "X";
    removeBookButton.onclick = function() { deleteBook(indexOfBook); };
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
    newBook.appendChild(removeBookButton);
});
}

function readStatus(status) {
  if(status){
    return "\nStatus : Completed";
  } else {
    return "\nStatus : Incomplete";
  }
}

function deleteBook(id) {
  myLibary.splice([id], 1);
  let bookToDelete = document.getElementById(id);
  bookToDelete.remove();
  localStorage.setItem('bookData', JSON.stringify(myLibary));
}