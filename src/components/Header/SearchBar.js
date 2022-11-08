import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    navigate(`/search?q=${searchTerm}`);

    setSearchTerm("");
  };
  return (
    <div className="w3l_search">
      <form onSubmit={searchHandler}>
        <input
          type="text"
          value={searchTerm}
          required=""
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Product..."
        />
        <input type="submit" value="" />
      </form>
    </div>
  );
};

export default SearchBar;
