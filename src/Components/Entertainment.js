import React from "react";
import video from "../images/video.png";

const Entertainment = () => {
  return (
    <>
      <div className=" max-w-1700px mx-auto h-screen">
        <img src={video} alt="" className="object-cover w-full h-full absolute left-0 -z-10" />
        <div className="max-w-[1000px] text-white text-center  relative top-[30%] left-[50%] translate-x-[-50%]">
          <h1 className="font-bold text-3xl m-6" >A world of Entertainment Available wherever you are</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            commodo gravida neque, id euismod tellus pellentesque eu. Ut non
            tempus quam, varius posuere leo. Proin nec tellus non velit pharetra
            accumsan et eget ante. Nunc dui massa, auctor vel libero id, commodo
            condimentum metus. Integer volutpat consequat lectus, vel volutpat
            mi. Curabitur rhoncus sagittis libero sagittis dictum. Aliquam magna
            massa, porta eu viverra a, aliquam in nibh. Aliquam quis sem vel
            erat gravida accumsan eu ut ante. Maecenas ornare aliquet arcu, at
            vehicula magna.
          </p>
        </div>
      </div>
    </>
  );
};

export default Entertainment;
