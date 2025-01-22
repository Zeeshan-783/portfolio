
import { FaLinkedin, FaGithub, FaTwitter,  } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-8 mb-5 mt-20
     shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
                 md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]  md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
    ">
      <div className="container mx-auto px-6 md:px-32">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          {/* Left Side: Contact Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <p className="text-lg">
              Email: <a href="mailto:khalidzeeshan067@gmail.com" className="text-[#F96E2A] hover:underline">khalidzeeshan067@gmail.com</a>
            </p>
          </div>

          {/* Center: Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a
            className='md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]
       md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
     shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] h-10 w-10 flex  items-center justify-center  rounded-lg'
            href="https://www.linkedin.com/in/zeeshan-khalid-6a23a9344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={30} className=" text-[#F96E2A] hover:text-[#F96E2A] transition-all duration-300" />
            </a>
            <a
            className='md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]
       md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
     shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] h-10 w-10 flex  items-center justify-center  rounded-lg'
            href="https://github.com/Zeeshan-783" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={30} className=" text-[#F96E2A] hover:text-[#F96E2A] transition-all duration-300" />
            </a>
            <a
            className='md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]
       md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
     shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] h-10 w-10 flex  items-center justify-center  rounded-lg '
            href="https://x.com/Z_ee_sh_an?s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={30} className=" text-[#F96E2A] hover:text-[#F96E2A] transition-all duration-300" />
            </a>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center mt-4 md:mt-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Zeeshan Khalid. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
