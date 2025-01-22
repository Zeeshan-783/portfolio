
import { FaLinkedin, FaGithub,   FaNode } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiTailwindcss, SiHtml5 ,SiReact, SiIndeed } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFirebaseFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

function About() {
  const myResume = '../assets/ZeeshanKhalidResume.pdf'
  return (
    <div className='m-10 h-full mt-20'id='about' >
      <h1 className='font-semibold text-2xl ml-4'>Zeeshan Khalid | React Native</h1>
      <h1 className='font-semibold text-2xl ml-4 '>Developer</h1>
      <div className='transition-all ml-4  mt-10 h-64 md:h-32 flex justify-center items-center md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.2),_-3px_-3px_10px_rgba(255,255,255,0.7)]
      shadow-[3px_3px_10px_rgba(0,0,0,0.2),_-3px_-3px_10px_rgba(255,255,255,0.7)]
      '>

      <p className='ml-4  '>I am an aspiring React and React Native developer with a strong interest in building both mobile applications and websites. Although I’m relatively new to the field, I am dedicated to honing my skills in frontend development and creating seamless user experiences. Currently, I’m focusing on mastering React for web development and React Native for mobile apps. I’m eager to apply my knowledge to real-world projects and continue learning as I grow in my career.</p>
      </div>

      <div className="flex gap-6 mt-10 ml-4 md:gap-24 ">
        <a href="https://www.linkedin.com/in/zeeshan-khalid-6a23a9344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="flex items-center justify-center h-10 w-10 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
        shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
        ">
          <FaLinkedin size={30} color='#F96E2A' />
        </a>
        <a href="https://github.com/Zeeshan-783" target="_blank" className="flex items-center justify-center h-10 w-10 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
        shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
        ">
          <FaGithub size={30}  color='#F96E2A'/>
        </a>
        <a href="https://x.com/Z_ee_sh_an?s=09" target="_blank" className="flex items-center justify-center h-10 w-10 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
        shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
        ">
          <FaXTwitter size={30} color='#F96E2A' />
        </a>
        <a href="https://www.indeed.com/cmp/your-company" target="_blank" className="flex items-center justify-center h-10 w-10 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
        shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
        ">
          <SiIndeed size={30} color=' #F96E2A' />
        </a>
      </div>
      <div className='flex justify-center items-center mt-16'>

      <div className=' h-14 w-48    bg-[#F96E2A] rounded-md gap-4  items-center justify-center flex  transition-all duration-300 transform active:bg-sky-700 active:animate-bounce active:scale-95
      md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]
       md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.1),_-3px_-3px_10px_rgba(255,255,255,0.6)]
     shadow-[3px_3px_10px_rgba(0,0,0,0.1),_-3px_-3px_10px_rgba(255,255,255,0.6)]
     '>
        <a href={myResume} className='flex flex-row text-xl font-semibold' download='ZeeshanKhalidResume.pdf'> 
          My Resume</a>
        <FiDownload  size={30} />
        
      </div>
      </div>

      <div className='mt-12 ml-4'>
        <h1 className='md:text-3xl text-2xl font-semibold '>Skills</h1>
        <h2 className='md:text-2xl text-xl font-semibold mt-6 '>Languages</h2>
        <div className="flex flex-row gap-6 md:gap-24 mt-6">
          <div className='flex items-center justify-center h-12 w-12 md:h-16 md:w-16 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] rounded-lg hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] 
          shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
          '>

               <SiJavascript color='#F96E2A' size={30} />
          </div>
          <div className='flex items-center justify-center h-12 w-12 md:h-16 md:w-16 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] 
          shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
          ' >

               <SiTypescript size={30} color='#F96E2A' />
          </div>
          <div className='flex items-center justify-center h-12 w-12 md:h-16 md:w-16 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] 
          shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
          '>
              <FaNode size={30} color='#F96E2A' />

          </div>
          <div className='flex items-center justify-center h-12 w-12 md:h-16 md:w-16 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] 
          shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
          '>
              <SiHtml5 size={30}  color='#F96E2A' />

          </div>
          
        </div>
        <h2 className='md:text-2xl text-xl font-semibold mt-6 '>Frameworks & Liabraries</h2>
        <div className="flex flex-row gap-6 md:gap-24 mt-6">
          <div className='flex items-center justify-center h-12 w-12 md:h-16 md:w-16 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg hover:shadow-[3px_3px_10px_rgba(0,0,0,0.1),_-3px_-3px_10px_rgba(255,255,255,0.6)] 
          shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
          '>

               <SiReact size={30} color='#F96E2A' />
          </div>
          <div className='flex items-center justify-center h-12 w-12 md:h-16 md:w-16 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg hover:shadow-[3px_3px_10px_rgba(0,0,0,0.1),_-3px_-3px_10px_rgba(255,255,255,0.6)]
          shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
          ' >

               <TbBrandReactNative size={30} color='#F96E2A' />
          </div>
          <div className='flex items-center justify-center h-12 w-12 md:h-16 md:w-16 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg hover:shadow-[3px_3px_10px_rgba(0,0,0,0.1),_-3px_-3px_10px_rgba(255,255,255,0.6)] 
          shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
          '>
              <SiTailwindcss size={30} color='#F96E2A' />

          </div>
          <div className='flex items-center justify-center h-12 w-12 md:h-16 md:w-16 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] rounded-lg hover:shadow-[3px_3px_10px_rgba(0,0,0,0.1),_-3px_-3px_10px_rgba(255,255,255,0.6)] 
          shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
          '>
              <RiFirebaseFill size={30} color='#F96E2A' />

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About
