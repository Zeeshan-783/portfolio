import  { useState, useEffect } from 'react';
import Logo from '../../assets/Logo1.jpg';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar({ toggleTheme, darkMode }: { darkMode: boolean, toggleTheme: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true); // Track navbar visibility
  const [lastScrollY, setLastScrollY] = useState<number>(0); // Track last scroll position

  const handleItemClick = (item: string) => {
    setSelectedItem(item); // Set selected item on click
    setIsMenuOpen(false); // Close the menu on item click
  };

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down, hide navbar
        setIsNavbarVisible(false);
      } else {
        // Scroll up, show navbar
        setIsNavbarVisible(true);
      }
      // Update last scroll position
      setLastScrollY(window.scrollY);
    };

    // Listen to scroll event
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-2 px-8 md:px-32 shadow-inner-md shadow-none p-12 transition-all md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] 
          ${isNavbarVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}
          transition-transform duration-300 ease-in-out`}
      >
        <Link className="flex flex-row justify-center items-center gap-5" to="home" spy={true} smooth={true} offset={50} duration={500}>
          <div onClick={() => handleItemClick('home')} className="w-16 h-16   flex items-center justify-center  rounded-full ">
            <img
              src={Logo}
              alt="Logo"
              className=" outline outline-[1px] outline-[#F96E2A]
              w-16 h-16 rounded-full transition-all "
            />
          </div>
          <h1 onClick={() => handleItemClick('home')} className="md:font-semibold hidden md:block hover:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]">Zeeshan Khalid</h1>
        </Link>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li
            onClick={() => handleItemClick('about')}
            className={`p-3 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] hover:${darkMode ? 'text-white' : 'text-black'} rounded-md transition-all hover:bg-[#F96E2A] hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] ${selectedItem === 'about' ? ' bg-[#F96E2A]' : ''}`}>
            <Link to="about" spy={true} smooth={true} duration={500} onClick={() => handleItemClick('about')}> About </Link>
          </li>
          <li
            onClick={() => handleItemClick('projects')}
            className={`p-3 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] hover:${darkMode ? 'text-white' : 'text-black'} rounded-md transition-all hover:bg-[#F96E2A] hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] ${selectedItem === 'projects' ? ' bg-[#F96E2A]' : ''}`}>
            <Link onClick={() => handleItemClick('projects')} to="projects" spy={true} smooth={true} duration={600}> Projects </Link>
          </li>
          <li
            onClick={() => handleItemClick('contact')}
            className={`p-3 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] hover:${darkMode ? 'text-white' : 'text-black'} rounded-md transition-all hover:bg-[#F96E2A] hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] ${selectedItem === 'contact' ? ' bg-[#F96E2A]' : ''}`}>
            <Link onClick={() => handleItemClick('contact')} to="contact" spy={true} smooth={true} duration={800}> Contact </Link>
          </li>
        </ul>

        <div className="flex flex-row gap-4">
          <i
            className="px-4 bx bx-menu xl:hidden block text-5xl cursor-pointer text-[#F96E2A]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className={`md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] 
            shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]
              p-2 mt-1.5 md:mt-0 w-10 h-10 flex items-center justify-center rounded-full ${darkMode ? 'bg-[#1B1833]' : 'bg-white'}`}
          >
            {darkMode ? <FaSun size={24} color="#F96E2A" /> : <FaMoon size={24} color="#F96E2A" />}
          </button>
        </div>

        <div style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }} className={`absolute xl:hidden top-24 right-0 flex flex-col items-center gap-4 font-semibold text-lg transform transition-transform h-56 w-64 rounded-md shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)] ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} ${darkMode ? 'bg-[#1B1833] text-white' : 'bg-white bg-[#1B1833]'}`}>
          <li className=" bg-[#F96E2A] list-none w-full text-center p-4 transition-all cursor-pointer rounded-xl shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]">
            <Link to="about" spy={true} smooth={true} duration={500} onClick={() => handleItemClick('about')}> About</Link>
          </li>
          <li className=" bg-[#F96E2A] list-none w-full text-center p-4 transition-all cursor-pointer rounded-xl shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]">
            <Link to="projects" spy={true} smooth={true} duration={800} onClick={() => handleItemClick('projects')}> Projects </Link>
          </li>
          <li className=" bg-[#F96E2A] list-none w-full text-center p-4 transition-all cursor-pointer rounded-xl shadow-[3px_3px_10px_rgba(0,0,0,0.3),_-3px_-3px_10px_rgba(255,255,255,0.8)]">
            <Link to="contact" spy={true} smooth={true} duration={600} onClick={() => handleItemClick('contact')}> Contact</Link>
          </li>
         
        </div>
      </header>
    </div>
  );
}

export default Navbar;
