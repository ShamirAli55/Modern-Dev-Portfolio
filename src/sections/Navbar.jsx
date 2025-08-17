import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavRef = useRef(null);
  const MenuT1 = useRef(null);
  const TopLine = useRef(null);
  const BottomLine = useRef(null);
  const iconTl = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      MenuT1.current.play();
      iconTl.current.play();
    } else {
      MenuT1.current.reverse();
      iconTl.current.reverse();
    }
  }, [isOpen]);

  useGSAP(() => {
    MenuT1.current = gsap
      .timeline({ paused: true })
      .from(NavRef.current, {
        x: 400,
        opacity: 0,
        duration: 0.8,
        delay: 0.01,
      })
    iconTl.current = gsap
      .timeline({ paused: true })
      .to(TopLine.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        BottomLine.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  return (
    <section className="h-screen w-screen overflow-hidden fixed z-40 inset-0">
      <nav
        className="h-full w-[60%] md:w-1/2 bg-black fixed z-30 right-0 py-16 px-2"
        ref={NavRef}
      >
        <div>
          {["Home", "About", "Projects", "Contact"].map((links, index) => (
            <Link
              className="block relative text-5xl p-3 leading-10 tracking-wide text-left cursor-pointer text-white/60 md:text-7xl md:p-4 md:leading-12 hover:text-white mouse-ovr md:px-6 "
              key={index}>
              {links}
            </Link>
          ))}
        </div>
      </nav>
      <div
        className="h-15 w-15 bg-black rounded-full fixed right-3 top-2 flex gap-1 items-center justify-center flex-col md:h-16 md:w-16 md:right-10 cursor-pointer z-40"
        onClick={() => toggleMenu()} 
      >
        <span
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
          ref={TopLine}
        ></span>
        <span
          className="block w-8 h-0.5 bg-white rounded-full origin-center"
          ref={BottomLine}
        ></span>
      </div>
    </section>
  );
};

export default Navbar;
