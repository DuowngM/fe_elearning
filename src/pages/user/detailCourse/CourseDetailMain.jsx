import imgPlus from "../../../../public/images/plusImg.jpg";
import imgMinus from "../../../../public/images/Vector_minus.jpg";
import playBtn from "../../../../public/images/btnPlay.svg";
import teacherImage from "../../../../public/images/teacherImage.jpg";
import StartVector from "../../../../public/images/StartVector.svg";
import playBorder from "../../../../public/images/playBorder.svg";

const CourseDetailMain = () => {
  return (
    <div className="w-full">
      <div className="bg-[#EFEBF5] shadow-lg py-36 overflow-hidden rounded-3xl">
        <div className="my-0 mx-auto max-w-[1500px]  ">
          <div className="flex flex-wrap justify-between ">
            <div className="rounded-2xl overflow-hidden max-w-[850px] w-full relative">
              <video
                controls
                width={850}
                src="https://cdn.tuoitre.vn/471584752817336320/2024/3/4/ong-dot-17095258009061367797780.gif.mp4"
              ></video>
              <div className=" cursor-pointer absolute bg-[#BC2228] flex items-center justify-center rounded-full w-16 h-16 top-[50%] left-[50%] translate-y-[-25px] translate-x-[-25px] overflow-hidden">
                <img src={playBtn} alt="" width={17} height={17} />
              </div>
            </div>
            <div className="  max-w-[600px] w-full flex flex-col justify-between">
              <div className="w-full h-24 bg-white rounded-lg flex items-center justify-center ">
                <div className="flex items-center justify-between w-[90%] h-full ">
                  <h1 className="text-2xl font-medium text-red-500">
                    How to launch a Webflow website?
                  </h1>
                  <img src={imgPlus} alt="" width={20} height={20} />
                </div>
              </div>

              <div className="w-full  bg-white rounded-lg flex items-center justify-center flex-col h-2/3">
                <div className=" w-[90%] h-[90%] flex items-center justify-center">
                  <div className=" flex items-center justify-between w-full">
                    <h1 className="text-2xl font-medium text-[#170F49] w-2/3 ">
                      What is Webflow and why is it the best website builder?
                    </h1>
                    <img src={imgMinus} alt="" width={20} height={20} />
                  </div>
                </div>
                <div className=" w-[90%]  border border-solid border-[#D9DBE9]"></div>

                <div className=" w-[90%] h-[90%] flex items-center justify-center">
                  <div className=" flex items-center justify-between w-full">
                    <h1 className="text-2xl font-medium text-[#170F49]">
                      What is your favorite template from BRIX Templates?
                    </h1>
                    <img
                      src={imgPlus}
                      alt=""
                      width={20}
                      height={20}
                      className="ml-3"
                    />
                  </div>
                </div>
                <div className=" w-[90%] h-[90%] flex items-center justify-center">
                  <div className=" flex items-center justify-between w-full">
                    <h1 className="text-2xl font-medium text-[#170F49]">
                      What is your favorite template from BRIX Templates?
                    </h1>
                    <img
                      src={imgPlus}
                      alt=""
                      width={20}
                      height={20}
                      className="ml-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1500px] mx-auto my-0">
          <div className="py-32 px-10">
            <div className="">
              <div className=" text-[#0A033C] ">
                <h1 className="text-2xl mb-5 font-semibold ">Course Details</h1>
                <p className="leading-9 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </p>
                <p className="leading-9 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>
              </div>
              <div className=" text-[#0A033C] mt-14">
                <h1 className="text-2xl font-semibold mb-5">
                  Who this course is for
                </h1>
                <p className="leading-9 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div className="text-[#0A033C] mt-32">
              <h1 className="text-2xl font-semibold mb-6">
                What you'll learn in this course:
              </h1>
              <div className="flex ">
                <div className="mr-10 w-1/2 flex flex-col gap-4">
                  <div className="flex items-center ">
                    <div className="w-3 h-3 rounded-full bg-[#FF6652] mr-6"></div>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF6652] mr-6"></div>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF6652] mr-6"></div>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
                <div className="mr-10 w-1/2 flex flex-col gap-4">
                  <div className="flex items-center ">
                    <div className="w-3 h-3 rounded-full bg-[#FF6652] mr-6"></div>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF6652] mr-6"></div>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF6652] mr-6"></div>
                    <p className="text-base">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className=""></h1>

              <div className="">
                <div className="">
                  <div className=""></div>
                  <p className=""></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="max-w-[1500px] mx-auto my-0">
          <h1 className="text-3xl mb-5 font-semibold ">Similar Courses</h1>
          <div className="flex flex-wrap w-full gap-10">
            {/* item Courses */}
            <div className="p-2  bg-white flex justify-between w-[calc(50%-40px)]  hover:shadow-md overflow-hidden rounded-lg">
              <div className="flex w-[80%]">
                <div className="w-2/5">
                  <img src={teacherImage} alt="" className="w-full " />
                </div>
                <div className="ml-4">
                  <h4 className="text-2xl mb-1 font-semibold ">
                    The Three Musketeers
                  </h4>
                  <div className="flex gap-1 items-center">
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className=" w-16 h-16 rounded-lg bg-[#F8F2FF] flex justify-center items-center self-end">
                <img src={playBorder} alt="" width={18} height={18} />
              </div>
            </div>
            <div className="p-2  bg-white flex justify-between w-[calc(50%-40px)]  hover:shadow-md overflow-hidden rounded-lg">
              <div className="flex w-[80%]">
                <div className="w-2/5">
                  <img src={teacherImage} alt="" className="w-full " />
                </div>
                <div className="ml-4">
                  <h4 className="text-2xl mb-1 font-semibold ">
                    The Three Musketeers
                  </h4>
                  <div className="flex gap-1 items-center">
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className=" w-16 h-16 rounded-lg bg-[#F8F2FF] flex justify-center items-center self-end">
                <img src={playBorder} alt="" width={18} height={18} />
              </div>
            </div>
            <div className="p-2  bg-white flex justify-between w-[calc(50%-40px)]  hover:shadow-md overflow-hidden rounded-lg">
              <div className="flex w-[80%]">
                <div className="w-2/5">
                  <img src={teacherImage} alt="" className="w-full " />
                </div>
                <div className="ml-4">
                  <h4 className="text-2xl mb-1 font-semibold ">
                    The Three Musketeers
                  </h4>
                  <div className="flex gap-1 items-center">
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className=" w-16 h-16 rounded-lg bg-[#F8F2FF] flex justify-center items-center self-end">
                <img src={playBorder} alt="" width={18} height={18} />
              </div>
            </div>
            <div className="p-2  bg-white flex justify-between w-[calc(50%-40px)]  hover:shadow-md overflow-hidden rounded-lg">
              <div className="flex w-[80%]">
                <div className="w-2/5">
                  <img src={teacherImage} alt="" className="w-full " />
                </div>
                <div className="ml-4">
                  <h4 className="text-2xl mb-1 font-semibold ">
                    The Three Musketeers
                  </h4>
                  <div className="flex gap-1 items-center">
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className=" w-16 h-16 rounded-lg bg-[#F8F2FF] flex justify-center items-center self-end">
                <img src={playBorder} alt="" width={18} height={18} />
              </div>
            </div>
            <div className="p-2  bg-white flex justify-between w-[calc(50%-40px)]  hover:shadow-md overflow-hidden rounded-lg">
              <div className="flex w-[80%]">
                <div className="w-2/5">
                  <img src={teacherImage} alt="" className="w-full " />
                </div>
                <div className="ml-4">
                  <h4 className="text-2xl mb-1 font-semibold ">
                    The Three Musketeers
                  </h4>
                  <div className="flex gap-1 items-center">
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                    <img src={StartVector} alt="" className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className=" w-16 h-16 rounded-lg bg-[#F8F2FF] flex justify-center items-center self-end">
                <img src={playBorder} alt="" width={18} height={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailMain;
