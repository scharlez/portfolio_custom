import "./intro.css";
import Steven from "../../Images/Steven.png"

const Intro = () => {
  return (
    <div className="i">


      <div className="i-left">


        <div className="i-left-wrapper">


          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Steven Charlez Dunn </h1>


          <div className="i-title">

            <div className="i-title-wrapper">

            <div className="i-title-item">Junior Developer</div>
            <div className="i-title-item">System Administrator</div>
            <div className="i-title-item">Network Administrator</div>

          </div>


      </div>


          <p className="i-desc">
          I'm a Junior Full Stack Developer based in Atlanta, GA with a passion for building effective coding solutions, intuitive user-friendly code and a slight preference for front-end technologies. In my past life, I've played roles in entrepreneurship, project management, customer service, system administrator, network administrator & technician.
          </p>
          
      <div className="i-right">
        <div className="i-bg"></div>
            <img src={Steven} alt="" className="i-img" />
        </div>

        </div>


      </div>


    </div> 
        )}

export default Intro;