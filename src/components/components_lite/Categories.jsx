import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { setSearchedCategory } from "@/redux/jobSlice";
//import Browse from "./Browse";
 

 
const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mern Stack Developer",
  "Data Analyst",
  "Python Developer",
  "Java Developer",
  "Business Analyst",
  "Consultant",
  "Video Editor",
];


const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const searchjobHandler = (category) => {
    navigate('/Browse/Category', { state: { category } });
  }
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Categories
        </h1>
        <p className="text-center text-gray-600">
          Explore our extensive job market.
        </p>
      </div>
      <Carousel className="w-full   max-w-xl  mx-auto my-10">
        <CarouselContent>
          {Category.map((category, index) => {
            return (
              <CarouselItem className="md:basis-1/2 lg-basis-1/3 " key={index}>
                <Button onClick={() => searchjobHandler(category)}>
                  {category}
                </Button>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Categories;
