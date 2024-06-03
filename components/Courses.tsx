"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { projects } from "@/data";
import { ModelViewer } from "./model-viewer";

const Courses = () => {
  return (
    <section id="courses" className="py-20">
      <h1 className="heading">
        Some of the available <span className="text-purple">courses</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="course-card lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <div className="p-4 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative max-w-140 w-full h-full overflow-hidden lg:rounded-3xl">
                  <Image
                    src={item.img}
                    alt="cover"
                    style={{ objectFit: "cover" }}
                    layout="fill"
                    className="bg-cover z-10 absolute bg-center"
                  />
                  <ModelViewer />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                        <Image
                          src={icon}
                          alt="icons"
                          className="p-2"
                          layout="fill"
                        />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Courses
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
<style jsx>{`
  .course-card {
    transition: transform 0.3s;
    transform-style: preserve-3d;
  }

  .course-card:hover {
    transform: perspective(1000px) rotateX(20deg);
  }
`}</style>

    </section>
  );
};

export default Courses;
