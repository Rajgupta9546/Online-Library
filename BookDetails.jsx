import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();

  const book = useSelector((state) =>
    state.books.booksList.find((b) => b.id.toString() === id)
  );

  if (!book) return <h2 style={{ textAlign: "center" }}>Book not found</h2>;

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <img
        src={book.image}
        alt={book.title}
        style={{ width: "250px", borderRadius: "10px" }}
      />

      <h2>{book.title}</h2>

      <p><strong>Author:</strong> {book.author}</p>

      <p style={{ maxWidth: "600px", margin: "auto" }}>
        {book.description}
      </p>

      <p><strong>Rating:</strong> ⭐ {book.rating}</p>

      <br />

      <Link to="/books">
        <button style={{
          padding: "8px 15px",
          backgroundColor: "#4da6ff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Back to Browse
        </button>
      </Link>
    </div>
  );
}