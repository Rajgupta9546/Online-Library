import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";

export default function BrowseBooks() {
  const { category } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.booksList);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchCategory = category ? book.category === category : true;
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div className="container">

      {/* Page Title */}
      <h2>
        {category ? `${category} Books` : "Browse All Books"}
      </h2>

      {/* Category Buttons */}
      <div className="category-buttons">
  <button
    className={!category ? "active" : ""}
    onClick={() => navigate("/books")}
  >
    All Books
  </button>

  <button
    className={category === "Fiction" ? "active" : ""}
    onClick={() => navigate("/books/Fiction")}
  >
    Fiction
  </button>

  <button
    className={category === "Non-Fiction" ? "active" : ""}
    onClick={() => navigate("/books/Non-Fiction")}
  >
    Non-Fiction
  </button>

  <button
    className={category === "Sci-Fi" ? "active" : ""}
    onClick={() => navigate("/books/Sci-Fi")}
  >
    Sci-Fi
  </button>
  
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Books Grid */}
      <div className="grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <h3>No Books Found</h3>
        )}
      </div>

    </div>
  );
}