import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Gurgaon",
      "Pune",
      "Banglore",
      "Hyderabad",
      "Chennai",
      "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "Mern",
      "React",
      "Data Analyst",
      "Full Stack",
      "Node",
      "Python",
      "Java",
      "Frontend",
      "Backend",
      "Consultant",
      "Business Analyst",
    ],
  },
  {
    filterType: "Experience",
    array: ["1","2", "3", "4 "],
  },
 
];

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (value) => {
    
    setSelectedValue(value);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]); 

  return (
    <div className="w-full bg-white rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={handleChange}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg">{data.filterType}</h2>

            {data.array.map((item, indx) => {
              const itemId = `Id${index}-${indx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId}></RadioGroupItem>
                  <label htmlFor={itemId}>{item}</label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Filter;
