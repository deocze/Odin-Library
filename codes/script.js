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
  inputHeader1.textContent = "Book Author:";

  let bookAuthor = document.createElement("input");
  bookAuthor.type = "text";
  bookAuthor.name = "bookAuthor";
  bookAuthor.id = "bookAuthor";  
  bookAuthor.classList.add("jsFormElements");

  let inputHeader2 = document.createElement("p");
  inputHeader2.textContent = "Book Name:"; 

  let bookName = document.createElement("input");
  bookName.type = "text";
  bookName.name = "bookName";
  bookName.id = "bookName";   
  bookName.classList.add("jsFormElements");

  let inputHeader3 = document.createElement("p");
  inputHeader3.textContent = "Number of pages:"; 
   
  let bookPages = document.createElement("input");
  bookPages.type = "number";
  bookPages.name = "bookPages";
  bookPages.id = "bookPages";   
  bookPages.classList.add("jsFormElements");  

  let inputHeader4 = document.createElement("p");
  inputHeader4.textContent = "Book Read:"; 
  inputHeader4.id = "bkReadLabel"

  let inputHeader5 = document.createElement("p");
  inputHeader5.textContent = "Book Type:"; 
  inputHeader5.id = "bkTypeLabel"
 
  let label1 = document.createElement("label");
  label1.textContent = "Read: "; 
  label1.id = "read";  
  label1.classList.add("readChoice");    

  let bookRead = document.createElement("input");
  bookRead.type = "radio";
  bookRead.name = "bookRead";

  let bookRead2 = document.createElement("input");
  bookRead2.type = "radio";
  bookRead2.name = "bookRead";

  let label2 = document.createElement("label");
  label2.textContent = "Not read: "; 
  label2.id = "notRead";
  label2.classList.add("readChoice");

  let label3 = document.createElement("label");
  label3.textContent = "Fiction: ";  
  label3.id = "fiction";
  label3.classList.add("fictionOrNot");  

  let bookType = document.createElement("input");
  bookType.type = "radio";
  bookType.name = "bookType";
  
  let label4 = document.createElement("label");
  label4.textContent = "N-Fiction: "; 
  label4.id = "Non_Fiction";
  label4.classList.add("fictionOrNot");  

  let bookType2 = document.createElement("input");
  bookType2.type = "radio";
  bookType2.name = "bookType";





  form.appendChild(inputHeader1);
  form.appendChild(bookAuthor);
  form.appendChild(inputHeader2);  
  form.appendChild(bookName);
  form.appendChild(inputHeader3);  
  form.appendChild(bookPages);  
  form.appendChild(inputHeader4);   
  form.appendChild(label1);  
  label1.appendChild(bookRead);
  form.appendChild(label2);  
  label2.appendChild(bookRead2);  
  form.appendChild(inputHeader5);  
  form.appendChild(label3);   
  label3.appendChild(bookType);
  form.appendChild(label4);   
  label4.appendChild(bookType2);
  


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
