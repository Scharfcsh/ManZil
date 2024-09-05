import React, { useState } from "react";
// import { categories } from "../constants/ActivityCategory";
const Activities = ({selectedCategories, setSelectedCategories}) => {
//   Extended list of categories for a travel company
  const categories = [
    "Activities",
    "Food & Dining",
    "Shopping",
    "Sightseeing",
    "Nightlife",
  ];

  // State to store selected categories
  

  const handleCheckboxChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(
          (selectedCategory) => selectedCategory !== category
        )
      );
    } else {
      
      setSelectedCategories([...selectedCategories, category]);
    }
  };
return (
    <div className=" w-full  text-center mt-12 font-sans">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Tell us what you’re interested in
      </h2>
      <p className="text-gray-500 mb-6 text-sm sm:text-base">
      Select all that apply...
      </p>
        <div className="grid grid-cols-4 gap-4 h-3/4">
            {/* Loop through categories to dynamically create checkboxes */}
            {categories.map((category) => (
                <div key={category} className="flex flex-row items-center justify-center p-2">
                    <label className="relative cursor-pointer w-full text-center">
                        <input
                            type="checkbox"
                            className="peer sr-only"
                            name="size-choice"
                            id={category}
                            value={category}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCheckboxChange(category)}
                        />
                        <span className="absolute top-2 right-2 z-10 opacity-0 transition-all peer-checked:opacity-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-green-500 stroke-white"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="9" />
                                <path d="M9 12l2 2l4 -4" />
                            </svg>
                        </span>
                        <div className="overflow-hidden rounded-xl bg-white shadow-md ring ring-transparent grayscale transition-all active:scale-95 peer-checked:ring-green-300 peer-checked:grayscale-0">
                            <div className="h-6">
                                {/* <img
                                    src="https://picsum.photos/200/122"
                                    className="h-12 w-48 object-cover"
                                /> */}
                            </div>
                            <header className="p-1">
                                <p className="text-lg font-semibold tracking-wide text-black">
                                    {category}
                                </p>
                            </header>
                        </div>
                    </label>
                </div>
            ))}
        </div>

        {/* Display selected categories
        {selectedCategories.length > 0 && (
            <div className="mt-4">
                <h3 className="text-md font-semibold">Selected Categories:</h3>
                <ul className="list-disc list-inside">
                    {selectedCategories.map((category) => (
                        <li key={category} className="text-gray-600">
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
        )} */}
    </div>
);
};

export default Activities;
