import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="/spiraltree.jpeg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
          <br></br>
        <p className="a-desc">
        Dynamic, detail-oriented Information Technology Professional driven by the passion of building effective coding solutions. Highly collaborative with a unique perspective and problem-solving abilities. Skilled in providing effective leadership in fast-paced, deadline-driven environments. Outstanding presentation and communication skills, understanding agile user story requirements to cross-collaborate and increase product efficiency. Strong history as a network and system administrator, with 10-years experience and highly regarded for developing and deploying complex infrastructures and technical solutions.
        </p>
      </div>
    </div>
  );
};

export default About;