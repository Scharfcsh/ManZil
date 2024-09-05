import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import a search icon (install react-icons if you haven't)

const SearchDestination = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value); // Track the user's input
  };

  const submitSearch = () => {
    if (query) {
      // Do something with the query, like fetching destination results
      console.log("Searching for:", query);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto text-center mt-12">
      <h2 className="text-2xl font-semibold mb-4">Where do you want to go?</h2>
      <p className="text-gray-500 mb-6">Search or get inspired by popular destinations.</p>
      
      {/* Search Bar */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search by city or town"
          className="w-full py-4 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={query}
          onChange={handleSearch}
        />
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Button to submit search */}
      
    </div>
  );
};

export default SearchDestination;
