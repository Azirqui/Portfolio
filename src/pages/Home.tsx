import { MyButton } from "../components/Button";
import { NavHashLink as Link } from 'react-router-hash-link';
import { FaLinkedin,FaFacebook,FaGithub } from "react-icons/fa";
import NomanResume from '../pdfs/Noman Resume.pdf';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1700167698291.json"
import '../styles/home.css';
const Home = () => {
  const homeTitle = useTypewriter({
    words: ["Developer", "Designer",],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  return (
    <>
      <div className="home-content-layout">
      <div className="home-content" id="home">
          <div>
            <div><h6>Hi There, it's</h6></div>
            <div className="home-title"><h1><span>Noman</span> Ahmad</h1></div>
            <div className="home-title-h3"><h3>{`I'm Web ${homeTitle[0]}`}<Cursor cursorStyle="|" /></h3></div>
            <div className="my-2"><p>Need a professional web developer?</p></div>
            {/* <div><p>You've come to the best place.</p></div> */}
                <div className="home-btns">
                  <a href={NomanResume} download="Noman_Resume.pdf">
                  <MyButton text="Download CV" /> 
                  </a>      
                  <Link to = {'#contact'}><MyButton text="Contact" /></Link>
                </div>
                </div>
          <div className="image-container">
          <motion.div
              initial={{ x: "130%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "130%", opacity: 0 }}
              className="mt-5"
            >
              <Lottie animationData={animationData}/>
            </motion.div>
          </div>
          
        </div>
        <div className="linksPlace">
          <a href="https://www.linkedin.com/in/chaudhary-noman-ahmad-393764261" target="_blank"><FaLinkedin /></a>
          <a href="https://www.facebook.com/profile.php?id=100039076668129" target="_blank"><FaFacebook/></a>
          <a href="https://github.com/Azirqui" target="_blank"><FaGithub/></a>
          </div>
      </div>
    </>
  );
};
export default Home;
