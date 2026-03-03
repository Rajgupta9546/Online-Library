import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>⭐ {book.rating}</p>

      <Link to={`/book/${book.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}

export default BookCard;