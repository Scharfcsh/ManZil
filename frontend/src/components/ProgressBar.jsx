import React, { useState } from "react";
import SearchDestination from "./SearchDestination";
import CitySearch from "./CitySearch";
import Calender from "./Calender";
import Travellers from "./Travellers";
import Activities from "./Activities";

const ProgressBar = () => {
  const [step, setStep] = useState(0); // Track the current step
  const totalSteps = 4; // Total steps in the progress
  const progress = (step / totalSteps) * 100; // Calculate progress percentage

  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [selectedCity, setSelectedCity] = useState("");
  const [persons, setPersons] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([]);

return (
    <div className="w-4/5 items-center mt-4 mx-auto">
    
            {/* Progress Indicator Bar */}
            <div className="relative h-2 w-full rounded-full bg-gray-200">
                    <div
                    className="absolute top-0 h-2  rounded-full bg-green-500 transition-all duration-1000"
                    style={{ width: `${progress}%` }}
                    ></div>
            </div>
            {
                step ===0 && <SearchDestination selectedCity={selectedCity} setSelectedCity={setSelectedCity} />

            }
            {
                step ===1 && <Calender date={date} setDate={setDate} />
            }
            {
                step ===2 && <Travellers persons={persons} setPersons={setPersons} />
            }
            {
                step ===3 && <Activities selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
            }


            <div className="flex justify-between mt-6">
                    {step > 0 && (
                        <button
                            onClick={() => setStep(step - 1)}
                            disabled={step <= 0}
                            className={`px-4 py-2 rounded ${
                                    step > 0 ? "bg-blue-500 text-white" : ""
                            }`}
                        >
                            Back
                        </button>
                    )}
                    {step===3?(
                        <button
                        onClick={() => setStep(step + 1)}
                        disabled={step >= totalSteps}
                        className={`px-4 py-2 rounded ${
                                step < totalSteps
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-500"
                        }`}
                        style={{ marginLeft: step === 0 ? "auto" : "" }}
                    >
                        Submit
                    </button>

                    ):
                    <button
                        onClick={() => setStep(step + 1)}
                        disabled={step >= totalSteps}
                        className={`px-4 py-2 rounded ${
                                step < totalSteps
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-500"
                        }`}
                        style={{ marginLeft: step === 0 ? "auto" : "" }}
                    >
                        Next
                    </button>
                    }
            </div>
    </div>
);
};

export default ProgressBar;
