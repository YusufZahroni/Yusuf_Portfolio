import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about-bg1.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2  border-l-[8px] border-black border-slate-400 px-5">
          <p className="uppercase text-xl tracking-widest text-[#000000]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 text-justify indent-8">
            Innovative Full Stack Developer with 2 years of experience in
            developing and maintaining web applications using HTML, CSS,
            JavaScript, Node.js, React.js, Next.js, and MySQL. Proven track
            record in improving user engagement, revenue, and application
            performance by up to 30%. Skilled in collaborating with
            cross-functional teams, integrating third-party services and APIs,
            and optimizing web applications for performance.
          </p>
          <p className="py-2 text-gray-600 text-justify indent-8">
            Enthusiastic and motivated Full-Stack Web Developer with a solid
            understanding of front-end and back-end technologies. Adept at
            collaborating with cross-functional teams to drive project success.
            Eager to contribute technical skills and passion for innovative
            problem-solving in a dynamic development environment.
          </p>
          <br />
          <br />
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer text-right">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-200">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
