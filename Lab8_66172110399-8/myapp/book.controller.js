import data from './book-data.json' with { type: 'json' };

export const getBooks = (req, res) => {
  res.status(200).json(data);
};

export const getBookById = (req, res) => {
  const bookID = parseInt(req.params.id);
  const book = data.find(b => b.id === bookID);

  if (book) {
    res.status(200)
    res.json(book);
  } else {
    res.status(404).json({ error: "book not found" });
  }
};

export const createBook = (req, res) => {
  const book_data = req.body;
  data.push(book_data);
  res.status(201).json(book_data);
};

export const updateBook = (req, res) => {
  const bookID = parseInt(req.params.id);
  const { title, author } = req.body;
  const bookIndex = data.findIndex(b => b.id === bookID);

  if (bookIndex !== -1) {
    data[bookIndex] = { id: bookID, title, author };
    res.status(200).json(data[bookIndex]);
  } else {
    res.status(404).json({ error: "book not found" });
  }
};

export const deleteBook = (req, res) => {
  const bookID = parseInt(req.params.id);
  const bookIndex = data.findIndex(b => b.id === bookID);

  if (bookIndex !== -1) {
    data.splice(bookIndex, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "book not found" });
  }
};
