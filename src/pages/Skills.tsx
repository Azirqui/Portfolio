import { skills } from "./data";
import Title from "../components/Title";
import "../styles/skills.css";

const Skills = () => {
  return (
    <>
    <span id="skills"></span>
    <Title  title="Skills" />
    <div className="container-box">
      {skills.map((item) => (
        <div className="box" key={item.id}>
          <div className="box-icon">
            <span className="box-icon-style">{item.icon}</span>
          </div>
          <div className="box-text">{item.text}</div>
        </div>
      ))}
    </div>
  </>
  );
};

export default Skills;
