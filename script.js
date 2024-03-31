function addBook(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const addedDate = document.getElementById('addedDate').value;
    const bookCategory = document.getElementById('bookCategory').value;

    // Create an object for the new book
    const newBook = {
      name: bookName,
      author: authorName,
      description: bookDescription,
      addedDate: addedDate,
      category: bookCategory
    };

    // Retrieve existing book list from localStorage or create a new empty array
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];

    // Add the new book to the book list
    bookList.push(newBook);

    // Store the updated book list back in localStorage
    localStorage.setItem('book-list', JSON.stringify(bookList));

    // Reset the form
    document.getElementById('addBookForm').reset();

    // Alert user that the book has been added (you can customize this part)
    alert('Book added successfully!');
  }

  // Add event listener to the form for form submission
  document.getElementById('addBookForm').addEventListener('submit', addBook);
  