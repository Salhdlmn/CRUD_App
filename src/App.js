import { useState } from "react";
import { v4 } from "uuid";
import BookCard from "./components/BookCard";
import DeleteModal from "./components/DeleteModal";
import Editmodal from "./components/Editmodal";
import { toast } from "react-toastify";

function App() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");
  const [inputError, setInputError] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(false);

  const handleChange = (e) => {
    setInputError(false);
    setBookName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookName) {
      toast.warn("Lütfen Kitap ismi Giriniz");
      return;
    }

    const newBook = {
      id: v4(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    setBooks([...books, newBook]);

    setBookName("");
  };

  const handleModal = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    const filtred = books.filter((book) => book.id !== deleteId);

    setBooks(filtred);
    setShowDeleteModal(false);
  };

  const handleRead = (book) => {
    const updatedBook = { ...book, isRead: !book.isRead };

    const index = books.findIndex((item) => item.id === book.id);

    const cloneBooks = [...books];

    cloneBooks[index] = updatedBook;

    setBooks(cloneBooks);
  };

  const handleEditModal = (book) => {
    setEditItem(book);
    setShowEditModal(true);
  };

  const handleEditBook = () => {
    const index = books.findIndex((book) => book.id == editItem.id);
    const cloneEditBooks = [...books];

    cloneEditBooks.splice(index, 1, editItem);

    setBooks(cloneEditBooks);

    setShowEditModal(false);
  };

  return (
    <div>
      <header className="bg-dark text-light py-3 text-center fs-5">
        <h1>Kitap Kurdu</h1>
      </header>
      <div className="container">
        {inputError && (
          <div className="alert alert-danger mt-5">{inputError}</div>
        )}
        <form onSubmit={handleSubmit} className="d-flex gap-2 mt-4">
          <input
            placeholder="Bir Kitap İsmi Giriniz..."
            onChange={handleChange}
            value={bookName}
            className="form-control shadow"
            type="search"
          />
          <button className="btn btn-warning shadow">Ekle</button>
        </form>
        {books.length === 0 ? (
          <h4>Henüz herhangi bir kitap eklenmedi</h4>
        ) : (
          books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleModal={handleModal}
              handleRead={handleRead}
              handleEditModal={handleEditModal}
            />
          ))
        )}
      </div>

      {showDeleteModal && (
        <DeleteModal
          handleDelete={handleDelete}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}

      {showEditModal && (
        <Editmodal
          editItem={editItem}
          setEditItem={setEditItem}
          setShowEditModal={setShowEditModal}
          handleEditBook={handleEditBook}
        />
      )}
    </div>
  );
}

export default App;
