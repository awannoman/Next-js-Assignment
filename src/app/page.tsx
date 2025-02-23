import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-black">
      <div className="rounded-full overflow-hidden">
        <Image src={"/picture.jpg"} alt="my picture" width={300} height={300} />
      </div>
      <div className="m-5 text-2xl text-white">
        <h2>This is My Image</h2>
      </div>
    </div>
  );
};
export default page;