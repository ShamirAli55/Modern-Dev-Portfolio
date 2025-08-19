import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useRef ,useEffect} from "react";
import { useMediaQuery } from "react-responsive";
import HeroText from "../components/HeroText";
import HeroBtmText from "../components/HeroBtmText";
import gsap from "gsap";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const svgPathRefDesktop = useRef(null);
  const stringRef = useRef(null);
  const finalPathDesktop = "M 50 100 Q 10 100 840 100";
 useEffect(() => {
    const stringEl = stringRef.current;
    const handleMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      y = Math.max(0, Math.min(200, y));

      if (svgPathRefDesktop.current) 
      {
       const path = `M 50 100 Q ${x} ${y} 840 100`;
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
    <section id="hero" className="min-h-screen w-full flex flex-col overflow-x-hidden relative">
      <div className="font-amiamie h-[50vh] md:h-[65vh] w-full cursor-text">
        <HeroText
          sText={"404 NO LIMITS FOUND"}
          mText1={"Shamir"}
          mText2={"Ali"}
        />
        
      <div
        className="absolute top-[20%] cursor-grab md:top-[30.5%]"
        ref={stringRef}
      >
        <svg
          width="850"
          height="160"
          className="hidden md:inline-block pointer-events-none"
        >
          <path
            d="M 50 100 Q 10 100 840 100"
            stroke="black"
            fill="transparent"
            ref={svgPathRefDesktop}
          />
        </svg>
      </div>
      </div>

      <HeroBtmText
        heading1={"I help growing brands and startups gain an"}
        heading2={"unfair advantage through premium"}
        heading3={"results driven webs/apps"}
      />

      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
          className="pointer-events-none"
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
