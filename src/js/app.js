VANTA.CELLS({
  el: "#main",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  color1: 0xf2f2,
  color2: 0x2d2266,
  size: 1.8,
  speed: 1.6,
});

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");

const btnSend = document.querySelector("#submit");
const btnDelet = document.querySelector("#submitDelet");

let bookId = 1;

function addBook(event) {
  event.preventDefault();

  const titleValue = title.value.trim();
  const authorValue = author.value.trim();
  const isbnValue = isbn.value.trim();

  const list = document.querySelector("#book__table");
  const row = document.createElement("div");

  row.className = `bookList`;
  row.id = `book-${bookId}`;
  bookId++;

  row.innerHTML = `
  <buttom class="deletBookList" id="deletBookList">Закрыть</buttom>
  <div class="book__list">
  <u class="title">Title:</u>
  <p class="book__title">${titleValue.toUpperCase()}</p>
  <u class="title">Author:</u>
  <p class="book__title">${authorValue.toUpperCase()}</p>
  <u class="title">ISBN:</u>
  <p class="book__subtitle">${isbnValue}</p>
  </div>
  `;

  if (titleValue === "" || authorValue === "" || isbnValue === "") {
    alert(`Нет данных, заполните поле title, author, isbn`);
  } else {
    list.appendChild(row);
    title.value = "";
    author.value = "";
    isbn.value = "";
  }
}

function deletBook(event) {
  event.preventDefault();

  title.value = "";
  author.value = "";
  isbn.value = "";
}

const btnDeleteAllBooks = document.querySelector("#deleteAllBooks");

function deletBookListAll(event) {
  event.preventDefault();

  const list = document.querySelector("#book__table");
  const rows = list.querySelectorAll(".book__list");

  rows.forEach((row) => {
    row.remove();
  });
}

btnSend.addEventListener("click", function (event) {
  addBook(event);
});

btnDelet.addEventListener("click", function (event) {
  deletBook(event);
});

btnDeleteAllBooks.addEventListener("click", function (event) {
  deletBookListAll(event);
});

document.addEventListener("click", function (event) {
  const deletBookList = document.querySelector(".deletBookList");

  const bookList = document.querySelectorAll(".bookList");

  let resolt = null;

  bookList.forEach((e) => {
    if (
      event.target.closest(".bookList") &&
      event.target.closest(".bookList").id
    ) {
      resolt = event.target.closest(".bookList").id;
      console.log(resolt);
    }
  });

  if (deletBookList && resolt) {
    event.preventDefault();

    const elementToDelete = document.getElementById(resolt);

    if (elementToDelete) {
      elementToDelete.remove();
    }
  }
});
