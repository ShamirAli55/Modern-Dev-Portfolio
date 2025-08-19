import HeroText from "../components/HeroText";
import HeroBtmText from "../components/HeroBtmText";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Card from "../components/Card";
import Button from "../components/Button";

const About = () => {
  const svgPathRefDesktop = useRef(null);
  const stringRef = useRef(null);
  const finalPathDesktop = "M 50 100 Q 10 100 400 100";
  useEffect(() => {
    const stringEl = stringRef.current;
    const handleMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      y = Math.max(0, Math.min(200, y));

      if (svgPathRefDesktop.current) {
        const path = `M 50 100 Q ${x} ${y} 400 100`;
        gsap.to(svgPathRefDesktop.current, {
          attr: { d: path },
          duration: 0.1,
          ease: "power3.out",
        });
      }
    };

    const handleLeave = () => {
      if (svgPathRefDesktop.current) {
        gsap.to(svgPathRefDesktop.current, {
          attr: { d: finalPathDesktop },
          duration: 1.5,
          ease: "elastic.out(1, 0.2)",
        });
      }
    };

    stringEl.addEventListener("mousemove", handleMove);
    stringEl.addEventListener("mouseleave", handleLeave);

    return () => {
      stringEl.removeEventListener("mousemove", handleMove);
      stringEl.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
  return (
    <section id="about" className="min-h-screen w-full relative">

      <div className="font-amiamie h-[10vh] md:h-[20vh] w-full cursor-text relative">

      <div className="relative font-amiamie-round pb-0 md:py-8 px-12 border-b-2 md:border-0">
        <h2 className="md:text-[16px] tracking-widest text-lg md:tracking-[12px] text-black pl-4 uppercase">Code with purpose</h2>
       <h1 className="tracking-wider pointer-events-none uppercase pt-6 md:pt-8 text-5xl sm:text-6xl md:text-8xl">
          About
        </h1>
      </div>

        <div
          className="hidden md:block absolute top-[40%] sm:top-[50%] md:top-[70%] cursor-grab"
          ref={stringRef}
        >
          <svg
            width="450"
            height="160"
            className="hidden md:inline-block pointer-events-none"
          >
            <path
              d="M 50 100 Q 10 100 400 100"
              stroke="black"
              fill="transparent"
              ref={svgPathRefDesktop}
            />
          </svg>
        </div>
      </div>
      <div className="text-right md:pt-30 md:pb-14 md:px-8 px-8 uppercase">
      <h1 className="text-xl pt-12 md:pt-1 md:text-3xl">Passionate about clean architecture</h1>
      <h1 className="text-lg md:text-3xl">I build scalable, high-performance solutions</h1>
      <h1 className="text-lg md:text-3xl">from prototype to production</h1>
    </div>
  <div className="min-h-screen w-full flex flex-col md:flex-row text-center md:text-left md:px-10 pt-10 md:pt-0 container">
  

  <div className="w-full md:w-1/2 px-4 md:px-20 py-6 md:py-16 md:pt-38 md:pr-33 flex flex-col gap-6">
    <h1 className="text-lg md:text-xl font-semibold">
      Passionate Web Developer
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
      voluptas placeat! Suscipit minima impedit dolore ipsum hic possimus
      laudantium expedita!
    </p>
    <div className="flex flex-col sm:flex-row gap-4 w-full md:py-6 md:justify-evenly md:items-center md:pb-8">
      <Button name={"Get in touch"} />
      <Button name={"Download Resume"} />
    </div>
  </div>


  <div className="w-full md:w-1/2 flex flex-col px-6 md:px-0 py-6 md:p-8 gap-6 justify-center">
    <Card
      Icon={"<>"}
      title={"Web Development"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
    />
    <Card
      Icon={"<>"}
      title={"UI Design"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
    />
    <Card
      Icon={"<>"}
      title={"UX Design"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
    />
  </div>
</div>
    </section>
  );
};

export default About;
