import { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";
import './Navbar.css';

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const closeDropdown = () => {
        setIsNavExpanded(false);
    };

    return (
        <nav className="navigation">
            <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="brand-name"
                onClick={closeDropdown}
            >
                NS
            </Link>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                <HiMenuAlt3 />
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                            onClick={closeDropdown}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                            onClick={closeDropdown}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                            onClick={closeDropdown}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={500}
                            onClick={closeDropdown}
                        >
                           Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
