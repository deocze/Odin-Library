let myBooks = [];
const newBookButton = document.getElementById("newB");
const displayBookButton = document.getElementById("displayB");
const formCont = document.getElementById("formContainer");

function book(aut, ttle, rd, pgs, typ) {
  this.author = aut;
  this.title = ttle;
  this.read = rd;
  this.pages = pgs;
  this.type = typ;
  this.bookId = crypto.randomUUID();
}

function makeNewBook() {
  let form = document.createElement("form");
  form.id = "bookForm";
  let inputHeader1 = document.createElement("p");
  let bookName = document.createElement("input");
  bookName.type = "text";
  bookName.name = "bookName";
  bookName.id = "BookName";
  bookName.placeholder = "Author";

  form.appendChild(bookName);
  formCont.appendChild(form);

  let button = document.createElement("button");

  // let aut = prompt("What is the name of your book's author?");
  // let ttle = prompt("What is the name of your book's title?");
  // let rd = prompt("Have you read the book yet? (y/n)");
  // if (rd == "y") {
  //   rd = true;
  // } else if (rd == "n") {
  //   rd = false;
  // } else {
  //   console.log("Not y or n");
  // }
  // let pgs = prompt("How many pages does your book have?");
  // let typ = prompt("Is it a fiction or a non-fiction book?");
  // const newBook = new book(aut, ttle, rd, pgs, typ);

  console.log(myBooks.length);
  console.log(myBooks);
}
myBooks[myBooks.length] = new book(
  "James Clear",
  "Atomic Habits",
  true,
  305,
  "non-fiction",
);
myBooks[myBooks.length] = new book(
  "Scott Young",
  "Ultralearning",
  false,
  305,
  "non-fiction",
);
myBooks[myBooks.length] = new book(
  "Jill Price",
  "Rich mom, Poor mom",
  false,
  220,
  "non-fiction",
);

displayBookButton.addEventListener("click", function (e) {
  for (let i = 0; i < myBooks.length; i++) {
    console.log(myBooks[i]);
  }
});
newBookButton.addEventListener("click", function (e) {
  makeNewBook();
});
