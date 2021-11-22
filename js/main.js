let books = [
  {
    title: "Book1",
    author: "Author1",
  },
  {
    title: "Book2",
    author: "Author2",
  },
];

let bookDiv = document.querySelector("#books");
let removeBtns = document.querySelectorAll(".remove")
console.log(bookDiv);
function displayBooks() {
  bookDiv.innerHTML = "";
  books.forEach((book, index) => {
    let bookElement = `<p>${book.title}</p>
  <p>${book.author}</p>
  <button class="remove" id="${index}">Remove</button>
  <hr>`;
    bookDiv.innerHTML += bookElement;
  });
  removeBtns = document.querySelectorAll(".remove");
  removeBtns.forEach((remove) => {
    remove.addEventListener('click', (e) => {
      let bookIndex = e.target.id;
      books.splice(bookIndex,1);
      displayBooks();
    })
  })
}
displayBooks();

let addBookBtn = document.querySelector("#add");
addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  books.push({ title: title, author: author });
  displayBooks();
});
