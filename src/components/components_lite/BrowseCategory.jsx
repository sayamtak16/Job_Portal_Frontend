import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Job1 from "./Job1";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedCategory, setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useLocation } from "react-router-dom";

const BrowseCategory = () => {
  const dispatch = useDispatch();
  useGetAllJobs();
  const { allJobs} = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);
  const location = useLocation();

  const cat= location.state?.category; 

  useEffect(() => {
  
      const filteredJobs = allJobs.filter((job) => {
        const query = cat.toLowerCase();
        
        return (
          job.title?.toLowerCase().includes(query) ||
          job.description?.toLowerCase().includes(query)
        );
      });
      setFilterJobs(filteredJobs);
  }, [allJobs, cat]);
  //dispatch(setSearchedCategory(""));
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10 ">
          Search Results {filterJobs.length}
        </h1>
        <div className="grid grid-cols-3 gap-4  ">
          {filterJobs.map((job) => {
            return <Job1 key={job._id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowseCategory;
