import React, { useState } from "react";

const Travellers = ({persons, setPersons}) => {
  // State to hold selected radio value

  // Function to handle the radio button value change
  const handleRadioChange = (event) => {
    setPersons(event.target.value);
  };

  // Function to handle form submission (optional)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected: ${selectedValue}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      {/* Header and description */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        What kind of trip are you planning?
      </h2>
      <p className="text-gray-500 mb-6 text-sm sm:text-base">
        Select the type of trip you are planning.
      </p>

      {/* Radio buttons */}
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Solo Trip */}
          <label
            className={`p-4 border-2 rounded-lg text-center cursor-pointer transition-colors duration-300 ${
              persons === "solo" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            <input
              type="radio"
              className="hidden"
              value="solo"
              checked={persons === "solo"}
              onChange={handleRadioChange}
            />
            Solo Trip
          </label>

          {/* Partner Trip */}
          <label
            className={`p-4 border-2 rounded-lg text-center cursor-pointer transition-colors duration-300 ${
              persons === "partner" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            <input
              type="radio"
              className="hidden"
              value="partner"
              checked={persons === "partner"}
              onChange={handleRadioChange}
            />
            Partner Trip
          </label>

          {/* Friends Trip */}
          <label
            className={`p-4 border-2 rounded-lg text-center cursor-pointer transition-colors duration-300 ${
              persons === "friends" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            <input
              type="radio"
              className="hidden"
              value="friends"
              checked={persons === "friends"}
              onChange={handleRadioChange}
            />
            Friends Trip
          </label>

          {/* Family Trip */}
          <label
            className={`p-4 border-2 rounded-lg text-center cursor-pointer transition-colors duration-300 ${
              persons === "family" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            <input
              type="radio"
              className="hidden"
              value="family"
              checked={persons === "family"}
              onChange={handleRadioChange}
            />
            Family Trip
          </label>
        </div>

        {/* Display selected value */}
        <div className="mt-6">
          <p className="text-lg font-semibold">
            Selected Trip: <span className="text-green-600">{persons ? persons : "None"}</span>
          </p>
        </div>

        {/* Submit Button */}
        {/* <button
          type="submit"
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Confirm Selection
        </button> */}
      </form>
    </div>
  );
};

export default Travellers;
