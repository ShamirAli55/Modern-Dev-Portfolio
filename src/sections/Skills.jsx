import React, { useState } from 'react';
import {cn} from '../lib/utils.js'
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import HeroBtmText from '../components/HeroBtmText.jsx';
const Skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React.js", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },

  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 78, category: "backend" },
  { name: "MySQL", level: 70, category: "backend" },
  { name: "REST APIs", level: 85, category: "backend" },
  { name: "JWT/Auth", level: 80, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "Vercel", level: 80, category: "tools" },
];

const Categories = ["all","frontend","backend","tools"];

function SkillsSection() {
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
    const [activeCategory,setActiveCategory] = useState("all");

    const filteredSkills = Skills.filter((skill)=> activeCategory === "all" || skill.category === activeCategory);

   return (
    <section id='skills' className='pb-12 px-4 relative bg-secondary/30'>
            <div className="font-amiamie h-[10vh] md:h-[20vh] w-full cursor-text relative">

      <div className="relative font-amiamie-round pb-0 md:py-8 px-12 border-b-2 md:border-0">
        <h2 className="md:text-[16px] tracking-widest text-lg md:tracking-[12px] text-black pl-4 uppercase">Beyond the screen</h2>
       <h1 className="tracking-wider pointer-events-none uppercase pt-6 md:pt-8 text-5xl sm:text-6xl md:text-8xl">
          Skills
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

      <div className="text-right md:pt-30 md:pb-22 md:px-8 px-4 py-4">
      <h1 className="text-xl pt-12 md:pt-1 md:text-3xl">I build secure, high performance full-stack apps</h1>
      <h1 className="text-xl md:text-3xl">with smooth UX to drive growth</h1>
      <h1 className="text-xl md:text-3xl">not headaches.</h1>
    </div>
        <div className='container mx-auto max-w-5xl md:pt-22 pt-12'>

            <div className='flex items-center justify-evenly md:flex-wrap md:justify-center md:gap-4 mb-12'>
                {Categories.map((item,index)=>{
                       return <button key={index} onClick={()=> setActiveCategory(item)}
                       className={cn('px-5 py-2 mt-4 md:mt-0 rounded-full transition-colors duration-300',
                       'capitalize cursor-pointer  text-sm md:text-lg',activeCategory === item ? "bg-DarkLava text-white":
                       " text-black bg-primary")}>
                        {item}
                       </button>
                })}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {filteredSkills.map((skill,index)=>{
                    return <div key={index} className='bg-white/30 p-6 rounded-lg shadow-xs cursor-pointer hover:scale-105 transition-all duration-300'>
                        <div className='text-left mb-4'>
                        <h3 className='text-lg'>{skill.name}</h3>
                        </div>
                        <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                        <div className='bg-DarkLava h-2 rounded-full origin-left animate-[grow_1.5s_ease-out'
                        style={{width:skill.level+"%"}}/>
                        </div>
                        <div className='text-right mt-1'>
                        <span className='text-sm'>{skill.level}%</span>
                        </div>
                    </div>  
                })}
            </div>
        </div>
    </section>
  )
}

export default SkillsSection