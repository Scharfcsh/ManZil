import React, { useState } from "react";
import SearchDestination from "./SearchDestination";

const ProgressBar = () => {
  const [step, setStep] = useState(0); // Track the current step
  const totalSteps = 4; // Total steps in the progress
  const progress = (step / totalSteps) * 100; // Calculate progress percentage

  return (
    <div className="w-4/5 items-center mt-4 ">
    
        {/* Progress Indicator Bar */}
        <div className="relative h-2 w-full rounded-full bg-gray-200">
            <div
            className="absolute top-0 h-2  rounded-full bg-green-500 transition-all duration-1000"
            style={{ width: `${progress}%` }}
            ></div>
        </div>

        <SearchDestination />


        <div className="flex justify-between mt-6">
            <button
            onClick={() => setStep(step - 1)}
            disabled={step <= 0}
            className={`px-4 py-2 rounded ${
                step > 0 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
            }`}
            >
            Back
            </button>
            <button
            onClick={() => setStep(step + 1)}
            disabled={step >= totalSteps}
            className={`px-4 py-2 rounded ${
                step < totalSteps
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            >
            Next
            </button>
        </div>
    </div>
  );
};

export default ProgressBar;
