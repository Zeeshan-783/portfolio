
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';
interface HomeProps {
  darkMode: boolean;
}
function Home({ darkMode }: HomeProps) {
 
  return (
    <>
      <About />
      <Projects darkMode={darkMode}  />
      <Contact />
      <Footer  />
    </>
  );
}

export default Home;
