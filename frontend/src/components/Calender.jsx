import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import React, { useState } from "react";

const Calender = ({date, setDate}) => {
  
  const handleChange =(ranges)=>{
    setDate(ranges.selection);
  };

  return (
    <div className="w-full max-w-lg mx-auto text-center mt-12 font-sans">
    <h2 className="text-xl sm:text-2xl font-semibold mb-4">
       When are you going?
      </h2>
      <p className="text-gray-500 mb-6 text-sm sm:text-base">
      Choose a date range, atleasssst a day.
      </p>
      <DateRangePicker ranges={[date]} onChange={handleChange} />
    </div>
  );
};

export default Calender;
