import Image from "next/image";
import React from "react";
import { ReactTyped } from "react-typed";
import paragrafLogo from "../../../../public/paragraf.png";
import profile from "../../../../public/main-me2.jpg";
import emailLogo from "../../../../public/icons/email-svgrepo-com.svg";
import linkeninLogo from "../../../../public/icons/linkedin-svgrepo-com.svg";
import instaLogo from "../../../../public/icons/instagram-svgrepo-com.svg";
import tgLogo from "../../../../public/icons/telegram-svgrepo-com.svg";
import gitLogo from "../../../../public/icons/github-142-svgrepo-com.svg";

function Home() {
  return (
    <div id="home">
      <div className="section-home">
        <div className="full-screen-bg-image">
          <div className="container max-w-[1110px] m-auto px-[20px]">
            <div className="flex h-[88.8vh] justify-center items-center">
              <div className="w-[500px] text-center pt-5  text-white font-primary-one">
                <h1 className="text-[60px] sm:text-[40px] smdown:text-[30px]">
                  Hello,I'm{" "}
                  <ReactTyped
                    strings={["Reyimberiyev Sanjar"]}
                    typeSpeed={100}
                    cursorChar=" "
                  />
                </h1>
                <strong className="d-block text-white text-uppercase letter-spacing">
                  and this is My Rezume
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="portfolio"
        className="container m-auto "
      >
        <div className="flex flex-col items-center gap-3">
          <h1 className=" text-center text-[40px] py-3 md:text-[20px] sm:text-[20px] smdown:text-[15px]">
            Featured <strong>Portfolio</strong>
          </h1>
          <div className="card-box flex md:text-[25px] sm:text-[25px] smdown:text-[15px] ">
            <div className="card overflow-y-scroll  border h-[300px] py-[50px] px-[20px] shadow-lg rounded-lg bg-[#37475A] text-white flex flex-col items-center">
              <Image
                width={200}
                className="pb-[30px]"
                src={paragrafLogo}
                alt="logo"
              />
              <div className="desc w-full">
                <h1 className="">
                  Paragraf.uz is a meticulously crafted clone of Paragraf.uz .
                  Designed and developed with precision, this project showcases
                  my proficiency in React.js and frontend development.
                </h1>
                <div className="pt-3 pb-5">
                  <h1>Technologies: React.js, CSS, Redux Toolkit, MUI</h1>
                  <h1>
                    Live Demo:{" "}
                    <a
                      className="font-bold"
                      href="https://paragraf.vercel.app/"
                    >
                      Paragraf
                    </a>
                  </h1>
                  <h1>
                    GitHub Repo:{" "}
                    <a
                      className="font-bold"
                      href="https://paragraf.vercel.app/"
                    >
                      Paragraf
                    </a>
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <h1>Why This Project?</h1>
                  <h1>
                    Cloning Paragraf.uz allowed me to delve deep into its
                    functionality, dissecting its features, and understanding
                    its intricacies. Through this project, I honed my skills in
                    frontend development, UI/UX design, and project management.
                    It serves as a testament to my ability to replicate complex
                    systems and deliver polished, high-quality solutions.
                  </h1>
                  <h1>
                    Future Improvements: While the current version of
                    Paragraf.uz mirrors the core functionalities of Paragraf.uz
                    , future iterations will focus on enhancing user experience,
                    optimizing performance, and incorporating additional
                    features to elevate its capabilities.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="resume"
        className="py-8 container m-auto "
      >
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <div className="flex flex-col gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-lg">
              Tashkent University of Information Technologies , Duration:{" "}
              <strong>September 1, 2021 - Present</strong>
            </p>
            <p className="text-lg">
              Na`jot Ta`lim IT school , Duration:{" "}
              <strong>August 8, 2023 - March 8, 2024</strong>
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-lg">
              Freelance Web Developer | Self-Employed June 2023 - Present
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <p className="text-lg">
              <strong>Frontend Development</strong>: Proficient in building
              modern, responsive web applications using React.js, Next.js, and
              Redux Toolkit.
            </p>
            <p className="text-lg">
              <strong>UI Frameworks & Libraries</strong>: Experienced in
              utilizing Material-UI (MUI), Tailwind CSS, and Bootstrap to create
              visually appealing and user-friendly interfaces.
            </p>
            <p className="text-lg">
              <strong>Version Control</strong>: Skilled in using Git and GitHub
              for version control, collaboration, and project management.
            </p>
            <p className="text-lg">
              <strong>Backend Integration</strong>: Familiar with integrating
              frontend applications with backend services and APIs to create
              seamless user experiences.
            </p>
            <p className="text-lg">
              <strong>Responsive Design</strong>: Knowledgeable in implementing
              responsive design principles to ensure optimal viewing experiences
              across devices and screen sizes.
            </p>
            <p className="text-lg">
              <strong>Problem-Solving</strong>: Strong problem-solving skills,
              with the ability to analyze complex issues and devise effective
              solutions efficiently.
            </p>
            <p className="text-lg">
              <strong>Team Collaboration</strong>: Effective communicator and
              team player, adept at collaborating with cross-functional teams to
              achieve project goals and deliver high-quality results.
            </p>
            <p className="text-lg">
              <strong>Continuous Learning</strong>: Committed to staying updated
              with the latest technologies and best practices in frontend
              development through self-directed learning and participation in
              online communities.
            </p>
          </div>
          {/* Add more sections as needed */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p className="text-lg">
              <strong>English</strong>: Advanced proficiency acquired through
              academic studies and everyday interactions. Comfortable with
              reading, writing, and speaking in various contexts.(3 out of 4)
            </p>
            <p className="text-lg">
              <strong>Russian</strong>: Intermediate level obtained from early
              exposure to the language. Capable of engaging in basic
              conversations and understanding common phrases.(2 out of 4)
            </p>
            <p className="text-lg">
              <strong>Uzbek</strong>: Native proficiency in spoken and written
              Uzbek, acquired through upbringing and cultural immersion. Able to
              express ideas fluently and understand nuances.(4 out of 4)
            </p>
          </div>
        </div>
      </div>
      <div
        id="biography"
        className=" container m-auto flex justify-center py-[20px]"
      >
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex gap-5 w-[65%] items-center">
          <Image
            src={profile}
            alt="Profile"
            className="h-20 w-20 object-cover rounded-full mx-auto"
          />

          <div>
            <h3 className="text-xl font-semibold mb-2">Biography</h3>
            <p className="text-md">
              As a dedicated and driven software engineer, I am passionate about
              leveraging technology to solve real-world problems and drive
              innovation. With a Bachelor's degree in Programming Engineering
              and Computer Science and hands-on experience in frontend
              development, I bring a strong foundation in programming languages
              such as JavaScript, HTML, and CSS, along with expertise in
              frameworks like React.js and Next.js.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 ">
        <div
          id="contact"
          className="p-4  container m-auto"
        >
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="text-lg">
            Feel free to reach out to me via email or connect with me on social
            media:
          </p>
          <ul className="flex items-center space-x-4 mt-4">
            <li>
              <a
                href="mailto:sanjarreyimberdiyev33.com"
                className="text-blue-500 hover:underline"
              >
                {}
                <Image
                  width={50}
                  height={50}
                  src={emailLogo}
                  alt="socials"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sanjar-reyimberdiyev-2a1626288"
                className="text-blue-500 hover:underline"
              >
                {}
                <Image
                  width={50}
                  height={50}
                  src={linkeninLogo}
                  alt="socials"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lifeofsanjar"
                className="text-blue-500 hover:underline"
              >
                {}
                <Image
                  width={50}
                  height={50}
                  src={instaLogo}
                  alt="socials"
                />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/lifeofsanjar"
                className="text-blue-500 hover:underline"
              >
                {}
                <Image
                  width={50}
                  height={50}
                  src={tgLogo}
                  alt="socials"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lifeofsanjar"
                className="text-blue-500 hover:underline"
              >
                {}
                <Image
                  width={50}
                  height={50}
                  src={gitLogo}
                  alt="socials"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
