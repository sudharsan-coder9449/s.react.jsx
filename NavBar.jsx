import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          KGF 2
        </div>

        <div className="linkstyle">
          <Link className="linklist" to="/">Home</Link>
          <Link className="linklist" to="/about">Cast</Link>
          <Link className="linklist" to="/product">Story</Link>
          <Link className="linklist" to="/service">Songs</Link>
          <Link className="linklist" to="/button">Button</Link>
          <Link className="linklist" to="/tailwind">TailWind</Link>
          <Link className="linklist" to="/event">Event</Link>
          <Link className="linklist" to="/state">TomAndJerry</Link>
          <Link className="linklist" to="/circle">Circle</Link>
          <Link className="linklist" to="/paratice">5 Ternary</Link>
          <Link className="linklist" to="/day8">Day 8</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
