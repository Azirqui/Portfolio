import { MyButton } from "./Button";
import { NavHashLink as Link } from 'react-router-hash-link';
import { useState } from "react";
import '../styles/header.css';
import { Turn as Hamburger } from 'hamburger-react'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close menu when a menu item is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <nav className="navBar">
        <div className="navStart">
                <div className="ms-nav">
                    <div className="btn btn-ghost lg:hidden" id="menu-icon" onClick={toggleMenu}>
                        {/* <FiMenu onClick={toggleMenu} aria-hidden="true" style={{fontSize: 24}}/> */}
                        <Hamburger toggled={menuOpen} toggle={setMenuOpen} duration={0.8} size={24} color="white"/>
                    </div>
                    <div  id="menu-list" className={menuOpen ? '' : 'hidden'}>
                        <ul>
                            <li><Link to = {'#'} onClick={closeMenu}>Home</Link></li>
                            <li><Link to = {'#about'} onClick={closeMenu}>About</Link></li>
                            <li><Link to = {'#skills'} onClick={closeMenu}>Skills</Link></li>
                            <li><Link to = {'#projects'} onClick={closeMenu}>Projects</Link></li>
                        </ul>
                    </div>
                </div>
            <div>
                <Link to = {"#"}><span>Noman </span><span>Ahmad</span></Link>
            </div>
        </div>
            <div className="navLinks">
                <Link to = {'#'} className="nav-link">Home</Link>
                <Link to = {'#about'} className="nav-link">About</Link>
                <Link  to = {'#skills'} className="nav-link">Skills</Link>
                <Link to = {'#projects'} className="nav-link">Projects</Link>
                {/* <button onClick={toggleTheme} className="nav-toggle"><FaRegSun style={{fontSize: 24}}/></button> */}
            </div>
            <div className="navEnd">
                {/* <div className="ms-nav-end"><FiMenu style={{fontSize: 24}}/></div> */}
                <div className="contact-container">
                <MyButton text="Contact"></MyButton>
                </div>
                
            </div>
        
    </nav>
    </>
    
  );
};
export default Header;

