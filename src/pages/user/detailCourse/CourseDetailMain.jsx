import AddIcon from "@mui/icons-material/Add";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getChaptersThunk } from "../../../redux/reducer/chapterSlice";
import { getLessonsThunk } from "../../../redux/reducer/lessonSlice";
import SimilarCourses from "../../../components/similarCourses/SimilarCourses";
import { getAllCoursesAPI } from "../../../redux/reducer/courseSlice";

const CourseDetailMain = () => {
  const chapters = useSelector((state) => state.chapterSlice.chapters);
  const lesson = useSelector((state) => state.lessonSlice.lesson);
  const similarCourses = useSelector((state) => state.courseSlice.courses);
  const [expanded, setExpanded] = useState("panel2");
  const [sourceVideo, setSourceVideo] = useState(
    "https://www.youtube.com/embed/vdKE_Tz8cy0"
  );
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChaptersThunk(id));
    dispatch(getLessonsThunk());
    dispatch(getAllCoursesAPI({ page: 0, size: 4 }));
  }, [dispatch, id]);

  // Nhóm dữ liệu lại
  const groupedContentItems = chapters.map((chapter) => {
    return {
      ...chapter,
      lessons: lesson.filter((item) => item.chapterId === chapter.id),
    };
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <div className="w-full">
        <div className="bg-[#f8f8f8] shadow-lg py-20 overflow-hidden rounded-3xl">
          <h1 className="text-2xl font-bold text-[#170F49]  bg-[#f8f8f8] rounded-lg ml-16 mb-10">
            <span className="text-rikkei">Khóa học: </span>
            {chapters[0]?.courseName}
          </h1>

          <div className="my-0 mx-auto max-w-[1500px]">
            <div className="flex flex-wrap justify-between">
              <div className="rounded-2xl overflow-hidden max-w-[850px] w-full relative">
                <iframe
                  width="100%"
                  height="500px"
                  src={sourceVideo}
                  title="Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="max-w-[600px] w-full flex flex-col">
                {groupedContentItems?.map((chapter) => (
                  <Accordion
                    sx={{ maxHeight: "50%" }}
                    className="text-xl font-medium text-[#170F49] "
                    expanded={expanded === `panel${chapter.id}`}
                    onChange={handleChange(`panel${chapter.id}`)}
                    key={chapter.id}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === `panel${chapter.id}` ? (
                          <RemoveIcon
                            fontSize="large"
                            sx={{ color: "#BC2228" }}
                          />
                        ) : (
                          <AddIcon fontSize="large" sx={{ color: "#BC2228" }} />
                        )
                      }
                      aria-controls={`panel${chapter.id}-content`}
                      id={`panel${chapter.id}-header`}
                      sx={{ minHeight: "4rem", color: "#BC2228" }}
                    >
                      {chapter?.title}
                    </AccordionSummary>
                    <div className="overflow-auto max-h-64 bg-white rounded-[20px] pb-3">
                      <Divider />
                      {chapter?.lessons?.length > 0 ? (
                        chapter.lessons.map((item) => (
                          <AccordionDetails
                            sx={{
                              padding: "12px 16px 0 24px",
                              display: "flex",
                              justifyContent: "space-between",
                              cursor: "pointer",
                            }}
                            key={item.id}
                            onClick={() => {
                              setSourceVideo(item.video);
                              setSelectedLessonId(item.id);
                            }}
                          >
                            <p
                              className={`max-w-[80%] ${
                                selectedLessonId === item.id
                                  ? "text-red-500"
                                  : ""
                              }`}
                            >
                              {item?.title}
                            </p>
                            <div>
                              <img src="/images/Playbtn.png" alt="" />
                            </div>
                          </AccordionDetails>
                        ))
                      ) : (
                        <div style={{ padding: "12px 16px" }}>
                          Coming soon...
                        </div>
                      )}
                    </div>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="max-w-[1500px] mx-auto my-0">
            <div className="py-32 px-10">
              <div className="">
                <div className=" text-[#0A033C] ">
                  <h1 className="text-2xl mb-5 font-semibold ">
                    Course Details
                  </h1>
                  <p className="leading-9 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </p>
                  <p className="leading-9 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan.
                  </p>
                </div>
                <div className=" text-[#0A033C] mt-14">
                  <h1 className="text-2xl font-semibold mb-5">
                    Who this course is for
                  </h1>
                  <p className="leading-9 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
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
        <div className="w-full mb-60">
          <div className="max-w-[1500px] mx-auto my-0">
            <h1 className="text-3xl mb-5 font-semibold ">Similar Courses</h1>
            <div className="flex flex-wrap w-full gap-10">
              {/* item Courses */}
              {similarCourses?.map((item) => (
                <React.Fragment key={item.id}>
                  <SimilarCourses item={item} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailMain;
