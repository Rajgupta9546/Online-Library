import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";

export default function Home() {
  const books = useSelector((state) => state.books.booksList);
  const navigate = useNavigate();

  return (
    <div className="container">

      <h1 className="welcome-title">
        Welcome to Online Library
      </h1>

      {/* Category Buttons */}
      <div className="category-buttons">
        <button onClick={() => navigate("/books/Fiction")}>
          Fiction
        </button>

        <button onClick={() => navigate("/books/Non-Fiction")}>
          Non-Fiction
        </button>

        <button onClick={() => navigate("/books/Sci-Fi")}>
          Sci-Fi
        </button>
      </div>

      {/* All Books */}
      <div className="grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

    </div>
  );
}