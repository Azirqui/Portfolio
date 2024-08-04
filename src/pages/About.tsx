import {MyButton}  from "../components/Button";
import assetImage from '../assets/about-pic.jpg';
import NomanResume from '../pdfs/Noman Resume.pdf';
import { NavHashLink as Link } from 'react-router-hash-link';
import Title from "../components/Title";
import '../styles/aboutme.css';
const About = () => {
  return (
    <>
      <div id="about"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // marginTop: 30,
          height: "70vh",
        }}
      >
        {/* <div style={{ fontSize: 50, fontWeight: "bold", marginBottom: 50 }}>
          <h1>About Me</h1>
        </div> */}
        <Title  title="About" />
        <div className="about-me">
          <div className="about-img-container">
            <img
              src= {assetImage}
              alt="Avatar"
              style={{ width: 250, height: 250, borderRadius: 100 }}
            />
          </div>
          <div style={{ maxWidth: 650}} className="about-text-div">
            <p>
              My name is <span>Noman Ahmad</span>, and I am a dedicated front-end web
              developer from Pakistan. I have a passion for learning and
              creating new applications with fast, secure, and clean code. I
              obtained certificates of completion and proficiency from <span>( Udemy,
              Hacker Rank, W3 Schools )</span>.
              <br />I specialize in programming and maintaining responsive
              websites that provide seamless user experiences.I take pride in
              crafting dynamic and engaging interfaces by writing optimized and
              clean code. I stay up-to-date with the latest development tools
              and techniques to ensure that I deliver cutting-edge web
              applications.
            </p>
            <div className="about-btns">
            <a href={NomanResume} download="Noman_Resume.pdf" className='about-btns-hidden'>
                  <MyButton text="Download CV" /> 
                  </a>
                  <Link to = {'#contact'} ><MyButton text="Get in Touch" /></Link>
                <Link to = {'#skills'}className='about-btns-hidden' ><MyButton text="Show Skills"/></Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
