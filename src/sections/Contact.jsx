import { useGSAP } from "@gsap/react";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";
import { useRef,useEffect } from "react";

const Contact = () => {
         const svgPathRefDesktop = useRef(null);
            const stringRef = useRef(null);
            const finalPathDesktop = "M 50 100 Q 10 100 560 100";
            useEffect(() => {
              const stringEl = stringRef.current;
              const handleMove = (e) => {
                let x = e.clientX;
                let y = e.clientY;
                y = Math.max(0, Math.min(200, y));
          
                if (svgPathRefDesktop.current) {
                  const path = `M 50 100 Q ${x} ${y} 560 100`;
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
  const items = [
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section id="contact" className="flex flex-col justify-between min-h-screen bg-black w-screen">
    <div className="font-amiamie h-[10vh] md:h-[20vh] w-full cursor-text relative  text-white">

      <div className="relative font-amiamie-round pb-0 md:py-8 px-12 border-b-2 md:border-0">
        <h2 className="md:text-[16px] tracking-widest text-lg md:tracking-[12px] pl-4 uppercase">Beyond the screen</h2>
       <h1 className="tracking-wider pointer-events-none uppercase pt-6 md:pt-8 text-5xl sm:text-6xl md:text-8xl">
          Contact
        </h1>
      </div>

        <div
          className="hidden md:block absolute top-[40%] sm:top-[50%] md:top-[70%] cursor-grab"
          ref={stringRef}
        >
          <svg
            width="560"
            height="160"
            className="hidden md:inline-block pointer-events-none"
          >
            <path
              d="M 50 100 Q 10 100 560 100"
              stroke="white"
              fill="transparent"
              ref={svgPathRefDesktop}
            />
          </svg>
        </div>
      </div>

    <div className="text-right md:pt-30 md:pb-2 md:px-18 px-4 text-white">
      <h1 className="text-lg pt-12 md:pt-1 md:text-3xl">Got a question, how or project Idea?</h1>
      <h1 className="text-lg md:text-3xl">I’d love to hear from you and discus further!</h1>
    </div>

        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10 pt-28">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                JohnDoe@gmail.com
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                +33 7 12 12 32 12
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;
