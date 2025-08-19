import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react'
import {useRef,useEffect} from "react";
import gsap from 'gsap';
const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful and responsive landing page built with React and Tailwind CSS.",
    image: "/assets/projects/apple-tech-store.jpg",
    tags: ["React", "Tailwind", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description: "Full-featured e-commerce app with product listings, cart, and checkout functionality.",
    image: "/assets/projects/game-store.jpg",
    tags: ["Next.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my projects, skills, and contact information.",
    image: "/assets/projects/plant-shop.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  }
];

function ProjectsSection() {
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
  return (
    <section id='projects' className='pt-18 pb-12 relative'>
    <div className="font-amiamie h-[10vh] md:h-[20vh] w-full cursor-text relative ">

      <div className="relative font-amiamie-round pb-0 md:py-8 px-12 border-b-2 md:border-0">
        <h2 className="md:text-[16px] tracking-widest text-lg md:tracking-[12px] text-black pl-4 uppercase">Beyond the screen</h2>
       <h1 className="tracking-wider pointer-events-none uppercase pt-6 md:pt-8 text-5xl sm:text-6xl md:text-8xl">
          Projects
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
              stroke="black"
              fill="transparent"
              ref={svgPathRefDesktop}
            />
          </svg>
        </div>
      </div>
      
    <div className='container mx-auto max-w-5xl mt-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map((project,index)=>{
                    return <div key={index} className='group bg-card rounded-lg overflow-hidden shadow-xs shadow-slate-500'>
                        <div className='h-48 overflow-hidden'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                        </div>
                        <div className='p-6'>
                            <div className='flex flex-wrap mb-4 gap-2'>
                                {project.tags.map((tag,index)=>{
                                    return <span className='px-2 py-1 text-xs font-medium rounded-full bg-primary/15 text-secondary-foreground border' key={index}>
                                        {tag}
                                    </span>
                                })}
                            </div>
                        <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                        <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex space-x-3'>
                                <a href={project.demoUrl} target='_blank'
                                className='text-foreground/80 hover:text-SageGray transition-colors duration-300'><ExternalLink size={20}/></a>
                                <a href={project.githubUrl} target='_blank'
                                className='text-foreground/80 hover:text-SageGray transition-colors duration-300'><Github size={20}/></a>
                            </div>
                    </div>
                    
                        </div>
                    </div>
                })}
            </div>
            <div className='text-center mt-12'></div>
                <a href="#" target='_blank'
                className='w-fit flex cosmic-button items-center mx-auto gap-2'>
                    Checkout My Github  <ArrowRight size={16}/>
                </a>
        </div>
    </section>
)
}

export default ProjectsSection