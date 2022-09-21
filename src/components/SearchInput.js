import React, { useRef } from "react";
import "./SearchInput.css";

const SearchInput = () => {
  const searchValue = useRef();
 
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>

        
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
