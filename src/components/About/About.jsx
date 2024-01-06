import React from "react";
export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Anil Piparaiya
            </h2>
            <p className="mt-6 text-gray-600">
              I'm a software engineer skilled in C++, Python, and JavaScript,
              with a strong background in Web Development and Machine Learning.
              I am deeply interested in exploring the fields of Software Engineering and
              algorithms, with a huge interest in programming, mathematics, and
              problem-solving.
            </p>
            <p className="mt-4 text-gray-600">
              I like solving logical problems, building useful things, and
              experimenting with new technologies. I love reading books to get
              my time out of screen. - My current book reading list <br /><span>bit.ly/lDFR9</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
