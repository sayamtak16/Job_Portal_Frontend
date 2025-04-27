import React from 'react'
import Navbar from '../components_lite/Navbar'
import { useNavigate } from 'react-router-dom';

const Creator = () => {
  const navigate = useNavigate();
  return (<>
    <Navbar/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-10">
          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
            About Us
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            <span className="font-semibold text-blue-500">JobSphere</span> is a leading job portal dedicated to connecting job seekers with top employers across the globe. 
            Designed to empower career growth and streamline recruitment processes, JobSphere offers a seamless and trusted platform for professional advancement.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Built with the vision that the right opportunity can transform lives and businesses, JobSphere provides a wide range of services, from job listings to talent acquisition solutions. 
            The platform ensures that companies find the right candidates while professionals discover roles that match their skills and aspirations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-100 p-6 rounded-xl text-center">
              <h2 className="text-xl font-bold text-blue-600 mb-2">10,000+</h2>
              <p className="text-gray-600">Jobs Posted</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-xl text-center">
              <h2 className="text-xl font-bold text-blue-600 mb-2">5,000+</h2>
              <p className="text-gray-600">Companies Hiring</p>
            </div>
            <div className="bg-blue-100 p-6 rounded-xl text-center">
              <h2 className="text-xl font-bold text-blue-600 mb-2">100,000+</h2>
              <p className="text-gray-600">Applicants Connected</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            JobSphere continues to innovate and evolve, aiming to bridge the gap between ambition and opportunity. 
            With a commitment to excellence, JobSphere remains a trusted partner for individuals and organizations alike.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"  onClick={() => navigate('/')}>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
      </>);
}

export default Creator
