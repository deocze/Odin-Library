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

  let bookAuthor = document.createElement("input");
  bookAuthor.type = "text";
  bookAuthor.name = "bookAuthor";
  bookAuthor.id = "bookAuthor";  
  bookAuthor.classList.add("jsFormElements");

  let bookName = document.createElement("input");
  bookName.type = "text";
  bookName.name = "bookName";
  bookName.id = "bookName";   
  bookName.classList.add("jsFormElements");

  let bookRead = document.createElement("input");
  bookRead.type = "radio";
  bookRead.name = "bookRead";
  bookRead.id = "Read";
  bookRead.classList.add("readChoice");

  let bookRead2 = document.createElement("input");
  bookRead2.type = "radio";
  bookRead2.name = "bookRead";
  bookRead2.id = "notRead";
  bookRead2.classList.add("readChoice");

  let bookPages = document.createElement("input");
  bookPages.type = "number";
  bookPages.name = "bookPages";
  bookPages.id = "bookPages";   
  bookPages.classList.add("jsFormElements");

  let bookType = document.createElement("input");
  bookType.type = "radio";
  bookType.name = "bookType";
  bookType.id = "Fiction";
  bookType.classList.add("jsFormElements");

  let bookType2 = document.createElement("input");
  bookType2.type = "radio";
  bookType2.name = "bookType";
  bookType2.id = "Non_Fiction";
  bookType2.classList.add("jsFormElements");

  form.appendChild(bookAuthor);
  form.appendChild(bookName);
  form.appendChild(bookPages);  
  form.appendChild(bookRead);
  form.appendChild(bookRead2);  
  form.appendChild(bookType);
  form.appendChild(bookType2);



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
