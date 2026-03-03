import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: ""
  });

  // ✅ IMAGE UPLOAD FUNCTION (THIS WAS MISSING OR OUTSIDE)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        image: reader.result
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addBook({
        ...form,
        id: Date.now().toString()
      })
    );

    navigate("/");
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Add New Book</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          placeholder="Author"
          value={form.author}
          onChange={(e) =>
            setForm({ ...form, author: e.target.value })
          }
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Rating"
          value={form.rating}
          onChange={(e) =>
            setForm({ ...form, rating: e.target.value })
          }
        />

        {/* ✅ IMAGE FIELD */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {/* ✅ IMAGE PREVIEW */}
        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            style={{
              width: "100%",
              marginTop: "10px",
              borderRadius: "10px"
            }}
          />
        )}

        <button type="submit">Add Book</button>

      </form>
    </div>
  );
}