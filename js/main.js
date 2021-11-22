let books = [];

const bookDiv = document.querySelector('#books');
let removeBtns = document.querySelectorAll('.remove');
function displayBooks() {
  bookDiv.innerHTML = '';
  if (books) {
    books.forEach((book, index) => {
      const bookElement = `<p>${book.title}</p>
  <p>${book.author}</p>
  <button class="remove" id="${index}">Remove</button>
  <hr>`;
      bookDiv.innerHTML += bookElement;
    });
    removeBtns = document.querySelectorAll('.remove');
    removeBtns.forEach((remove) => {
      remove.addEventListener('click', (e) => {
        const bookIndex = e.target.id;
        books.splice(bookIndex, 1);
        displayBooks();
        localStorage.setItem('books', JSON.stringify(books));
      });
    });
  }
}

const addBookBtn = document.querySelector('#add');
addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  books.push({ title, author });
  displayBooks();
  localStorage.setItem('books', JSON.stringify(books));
});

if (localStorage.getItem('books') !== null) {
  books = JSON.parse(localStorage.getItem('books'));
}

displayBooks();