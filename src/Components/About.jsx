import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-6 lg:items-center lg:gap-x-20 lg:gap-y-0 h-sceen">
          {/* Image */}
          <div
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          ></div>
          {/* Description */}
          <div className="flex-1">
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-3">
              I&apos;m a MERN-Stack Web Developer with over 1 years of
              experience.
            </h3>
            <p className="mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              consequatur non aut amet dignissimos. Quae recusandae perspiciatis
              reiciendis veritatis ipsam
            </p>
            {/* Stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-4xl font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-4xl font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={5} /> : null}
                  K+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-4xl font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={5} /> : null}
                  K+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-6">
              <button className="btn btn-lg">Contact Me</button>
              <a className="text-gradient btn-link" href="#">
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
