import Bulb from './bulb.jpg';
import WEB from './Web.jpg'
export function Project() {
    return (
      <div>
        <marquee direction="left" class="bg-dark text-white m-0">
          <h1>PROJECTS</h1>
        </marquee>
        <div
          class="p-3 bg-dark mt-0"
          style={{ color: "white", overflow: "auto" }}>
          <h2 class="text-primary">SMART BULB</h2>
          <img src={Bulb} style={{ float: "right", height: "200px",width:"300px"}} class="ms-2"/>
          <h6 class="text-danger">Problem Statement:</h6>
          <p>
            We often tend to forget switching on and off lights at our homes and
            workplaces. At times, when we go for long holidays, when we are away
            from our homes, turning on lights and switching them off is a
            brainstorming problem.
          </p>
          <h6 class="text-success">Solution</h6>
          <p>
            We did a project on Enable LED to turn on and off automatically for a
            certain period of time with an added option to adjust time without the
            help of IoT.
          </p>
        </div>
        <div
          class="p-3 bg-dark mt-0"
          style={{ color: "white", overflow: "auto" }}>
          <h2 class="text-primary">UNIVERSITY WEBSITE</h2>
          <img src={WEB} style={{ float: "right", height: "200px",width:"300px"}} class="ms-2" />
          <h6 class="text-success">About</h6>
          <p>Our university website is a modern and user-friendly platform designed to provide 
            students, faculty, and staff with easy access to essential information, resources, 
            and services. Leveraging the latest web technologies, our website is built using a
             combination of Bootstrap, React.js, Node.js, and MongoDB to deliver a seamless 
             and efficient user experience.
          </p>
        </div>
      </div>
    );
  }
  