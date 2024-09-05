import React, { useState, useCallback } from "react";
import data from "../constants/City"; // Assuming city data is imported
import { PiMapPinLineFill } from "react-icons/pi";

const CitySearch = ({selectedCity, setSelectedCity}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input change
  const handleInputChange = useCallback((e) => {
    setSearchTerm(e.target.value.toLowerCase());
  }, []);

  // Handle city click
  const handleCityClick = useCallback((city) => {
    setSelectedCity(city);
    setSearchTerm(""); // Clear search input after city selection
  }, []);

  // Function to sort cities based on relevance to the search term
  const rankCityMatches = (city, term) => {
    if (city.startsWith(term)) {
      return 1; // Highest priority if the city starts with the search term
    }
    if (city.includes(term)) {
      return 2; // Lower priority if the term is found elsewhere in the city name
    }
    return 3; // Default priority
  };

  // Filter and sort cities based on search term relevance
  const filteredCities = data
    .flatMap((country) =>
      country.cities
        .filter((city) => city.toLowerCase().includes(searchTerm)) // Filter based on search input
        .map((city) => ({
          city,
          country: country.country,
          relevance: rankCityMatches(city.toLowerCase(), searchTerm), // Add relevance rank
        }))
    )
    .sort((a, b) => a.relevance - b.relevance) // Sort by relevance
    .slice(0, 4); // Limit to first 4 results

  return (
    <div className="w-full max-w-lg mx-auto text-center mt-12 font-sans">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Where do you want to go?
      </h2>
      <p className="text-gray-500 mb-6 text-sm sm:text-base">
        Search or get inspired by popular destinations.
      </p>
      <input
        type="text"
        value={selectedCity || searchTerm}
        placeholder="Search by city or town"
        className="w-full py-3 sm:py-4 pl-10 sm:pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={handleInputChange}
      />

      {/* Render filtered city suggestions */}
      {searchTerm && (
        <ul className="list-none p-0 mt-4">
          {filteredCities.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 p-3 sm:p-4 rounded-md hover:bg-gray-100 cursor-pointer"
              onClick={() => handleCityClick(item.city)}
            >
              <div className="bg-gray-100 p-3 sm:p-4 rounded-lg">
                <PiMapPinLineFill className="text-xl sm:text-2xl text-gray-500" />
              </div>
              <div>
                <div className="font-semibold text-base sm:text-lg">
                  {item.city}
                </div>
                <div className="text-gray-500 text-sm sm:text-base">
                  {item.country}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CitySearch;
export { CitySearch };
