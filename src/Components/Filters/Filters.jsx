import { useState } from "react";
import "./filters.css";
import { useProductStore } from "../../store";

export default function Filters() {
  const { tags, filters, setFilter, toggleTag } = useProductStore();
  const [open, setOpen] = useState(false);

  return (
    <div className="filters ">
      <select onChange={(e) => setFilter("price", e.target.value)}>
        <option value="">Price</option>
        <option value="low">Below $20</option>
        <option value="mid">$20 - $50</option>
        <option value="high">Above $50</option>
      </select>

      <select onChange={(e) => setFilter("rating", e.target.value)}>
        <option value="">Rating</option>
        <option value="4">4★ & above</option>
        <option value="3">3★ & above</option>
        <option value="2">2★ & above</option>
      </select>

      <div className="tag-filter">
        <button
          type="button"
          className="tag-btn"
          onClick={() => setOpen((prev) => !prev)}
        >
          Tags
          {filters.tags.length > 0 && (
            <span className="count">{filters.tags.length}</span>
          )}
        </button>

        {open && (
          <div className="tag-menu">
            {tags.map((tag) => (
              <label
                key={tag}
                className={
                  filters.tags.includes(tag) ? "active" : ""
                }
              >
                <input
                  type="checkbox"
                  checked={filters.tags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                />
                <span>{tag}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
