// import { TypeAnimation } from "react-type-animation";
import image from "../assets/avatar.svg";
import { FaDribbble, FaGithub, FaYoutube } from "react-icons/fa";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center lg:text-left font-secondary">
            <h1
              className="font-[55px] lg:text-[110px] text-bold leading-[0.8]"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              {" "}
              Riyazul <span>Haque</span>
            </h1>
            <div
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1700"
            >
              <span className="mr-4">I am a</span>
              <span className="text-accent">Web Developer</span>
              {/* <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              /> */}
            </div>
            <p
              className="mb-8 max-w-lg mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1900"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa
              quasi aperiam doloribus, doloremque veniam tempore enim officiis
              atque alias.
            </p>
            <div
              className="flex items-center gap-x-6 max-w-max mx-auto lg:mx-0 mb-12"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="btn-link text-gradient">
                My Portfolio
              </a>
            </div>
            <div
              className="flex gap-x-6 text-[20px] max-w-max mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2200"
            >
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </div>
          </div>
          <div
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
