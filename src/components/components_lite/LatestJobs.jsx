import React from "react";
//import JobCards from "./JobCards";
//import { useSelector } from "react-redux";
import Job1 from "./Job1";

const LatestJobs = (props) => {
  const allJobs = props.jobs // useSelector((state) => state.jobs?.allJobs || []); // Safely access allJobs

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h2>

      {/* Job Cards */}
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) =>
              job?._id ? (
               // <JobCards key={job._id} job={job}></JobCards>
                <Job1 key={job._id} job={job}></Job1>
              ) : (
                <span key={Math.random()}>Invalid Job Data</span>
              )
            )
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
