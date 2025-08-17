import { useEffect ,useRef} from 'react'
import gsap from 'gsap';

const Hero = () => 
{
    const svgPathRef = useRef(null);
    const stringRef = useRef(null);
    const finalPath = "M 10 100 Q 10 100 350 100";
    useEffect(() => {
    const svgPath = svgPathRef.current;
    const stringEl = stringRef.current;

    const handleMove = (e) => {
      let y = e.clientY ;
      y = Math.max(0, Math.min(180, y));

      const path = `M 10 100 Q 10 ${y} 350 100`;

      gsap.to(svgPath, {
        attr: { d: path },
        duration: 0.1,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(svgPath, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    stringEl.addEventListener("mousemove", handleMove);
    stringEl.addEventListener("mouseleave", handleLeave);

    return () => {
      stringEl.removeEventListener("mousemove", handleMove);
      stringEl.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

    
  return (
    <section className='min-h-screen w-full flex relative flex-col'>
        <div className='w-full h-screen 
        p-12 pt-0'>
            <div className='tracking-widest py-8 font-amiamie'>
            <h2 className='md:text-lg font-light'>404 NO LIMITS FOUND</h2>
            </div>
            <div className='uppercase text-6xl leading-17 pt-12  md:leading-20 md:text-9xl relative' ref={stringRef}>
                <h1 className='tracking-wider'>Shamir <span className='block text-center -mr-40 leading-10 font-bold md:inline '>Ali</span></h1>
                <div className='absolute top-15 cursor-grab'>
                <svg width="1000" height="200">
                <path d="M 10 100 Q 10 100 350 100" stroke="black" fill="transparent" ref={svgPathRef}/>
                </svg></div>
            </div>
    <div className='p-4 text-xl border-l-4 border-black/60 my-20 tracking-wider 
        md:border-0 md:text-5xl md:flex md:flex-col items-end md:tracking-widest 
        md:leading-15 leading-10 uppercase'>
      <h1 className='px-2 whitespace-nowrap'>Code with <span className='font-bold'>purpose</span></h1>
      <h1 className='ml-14 whitespace-nowrap'>Animate with <span className='font-bold'>impact</span></h1>
      <h1 className='ml-18 whitespace-nowrap'>Create that <span className='font-bold'>lasts</span></h1>
    </div>

        </div>
    </section>
  )
}

export default Hero