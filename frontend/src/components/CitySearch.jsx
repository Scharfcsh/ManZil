import React, { useState } from "react";
import data from "../constants/City";
import { PiMapPinLineFill } from "react-icons/pi";


const CitySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handliClick=(e)=>{
    console.log("clicked");
    document.querySelector('input').value=e.target.innerText;
  }

  const filteredCities = data
    .flatMap((country) =>
      country.cities
        .filter((city) => city.toLowerCase().includes(searchTerm))
        .map((city) => ({
          city,
          country: country.country,
        }))
    )
    .slice(0, 4);
    console.log(filteredCities);

  return (
    <div className="w-full max-w-lg mx-auto text-center mt-12 font-sans">
      <h2 className="text-2xl font-semibold mb-4">Where do you want to go?</h2>
      <p className="text-gray-500 mb-6">
        Search o.
      </p>
      <input
        type="text"
        placeholder="Search by city or town"
        className="w-full py-4 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        onChange={handleInputChange}
      />

      <ul className="list-none p-0">
        {searchTerm &&
          filteredCities.map((item, index) => (
           

            <div class="flex items-center space-x-4 p-4 rounded-md hover:bg-gray-100" key={index} onClick={handliClick}>
              <div class="bg-gray-100 p-4 rounded-lg">
                <PiMapPinLineFill class="text-2xl text-gray-500" />
              </div>
              <div>
                <div class="font-semibold text-lg">{item.city}</div>
                <div class="text-gray-500">{item.country}</div>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default CitySearch;
