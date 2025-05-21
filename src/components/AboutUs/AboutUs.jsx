import "./AboutUs.css";
import { Outlet, Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <p>You can find out more information about our site here.</p>
      <ul>
        <li>
          <Link to="site-history">Site History</Link>
        </li>
        <li>
          <Link to="site-mission">Site Mission</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUs;
