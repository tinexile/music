import React from "react";
import mac from '../images/mac.png'
const Note = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto  text-center py-16 h-auto ">
        <div className="my-10 mb-10  flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">The movie and tv collection you always wished for granted</h1>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            commodo gravida neque, id euismod tellus pellentesque eu. Ut non
            tempus quam, varius posuere leo. Proin nec tellus non velit pharetra
            accumsan et eget ante. Nunc dui massa, auctor vel libero id, commodo
            condimentum metus
          </p>
          <button className="text-white font-bold bg-violet-800 mt-10 px-4 py-2 rounded-md inline mb-10" >Read More</button>
          <img src={mac} alt="" className="mb-10" />
        </div>
      </div>
    </>
  );
};

export default Note;
