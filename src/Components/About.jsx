import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        {/* Image */}
        <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
          Img
        </div>
        {/* Description */}
        <div>
          <h2>About Me</h2>
          <h3>
            I&apos;m a MERN-Stack Web Developer with over 1 years of experience.
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            consequatur non aut amet dignissimos. Quae recusandae perspiciatis
            reiciendis veritatis ipsam
          </p>
        </div>
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
              {inView ? <CountUp start={0} end={13} duration={5} /> : null}
            </div>
            <div className="font-primary text-sm tracking-[2px]">
              Years of <br /> Experience
            </div>
          </div>
          <div>
            <div className="text-4xl font-tertiary text-gradient mb-2">
              {inView ? <CountUp start={0} end={13} duration={5} /> : null}
            </div>
            <div className="font-primary text-sm tracking-[2px]">
              Years of <br /> Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
