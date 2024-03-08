import React from "react";
import StartVector from "/images/StartVector.svg";
import playBorder from "/images/playBorder.svg";
import { useNavigate } from "react-router-dom";
export default function SimilarCourses({ item }) {
  const navigate = useNavigate();
  const navigateDetail = () => {
    navigate(`/detailCourse/${item.id}`);
  };
  return (
    <div className="p-2  bg-white flex justify-between w-[calc(50%-40px)]  hover:shadow-md overflow-hidden rounded-lg">
      <div className="flex w-[80%]">
        <div className="w-2/5">
          <img
            src={import.meta.env.VITE_API_URL_IMG + item.image}
            alt=""
            className="w-full"
          />
        </div>
        <div className="ml-4">
          <h4 className="text-2xl mb-1 font-semibold ">{item?.title}</h4>
          <div className="flex gap-1 items-center">
            <img src={StartVector} alt="" className="w-6 h-6" />
            <img src={StartVector} alt="" className="w-6 h-6" />
            <img src={StartVector} alt="" className="w-6 h-6" />
            <img src={StartVector} alt="" className="w-6 h-6" />
            <img src={StartVector} alt="" className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div
        className=" w-16 h-16 rounded-lg bg-[#F8F2FF] flex justify-center items-center self-end"
        onClick={navigateDetail}
      >
        <img src={playBorder} alt="" width={18} height={18} />
      </div>
    </div>
  );
}
