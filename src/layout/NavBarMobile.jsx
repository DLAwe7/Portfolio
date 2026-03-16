import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./NavBarMobile.css"
import useNavBarController from "../hooks/useNavBarController";
import CV from "../assets/CVENPN.pdf"
import { useEscKeyDown } from "../hooks/useEscKeyDown";
import { useInert } from "../hooks/useInert";
import { useRef } from "react";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import useArrowNavigation from "../hooks/useArrowNavigation";
import useAutoFocusOnOpen from "../hooks/useAutoFocusOnOpen";
import { createPortal } from "react-dom";
import { FocusScope } from "@radix-ui/react-focus-scope";





function NavBarMobile({ isOpen, setIsOpen }) {

    const headerList = useNavBarController();



    const asideRef = useRef(null)

    useInert(asideRef, !isOpen);

    useLockBodyScroll(isOpen);
    useArrowNavigation(isOpen, asideRef);
    useAutoFocusOnOpen(isOpen, asideRef);

    useEscKeyDown(isOpen, () => setIsOpen(false));


    return createPortal(


        <FocusScope loop trapped={isOpen} disabled={!isOpen}>

            <aside id="sidebar" className={`aside-nav-bar-wrapper ${isOpen ? "open" : ""}`} aria-hidden={!isOpen} ref={asideRef}>

                <nav className="aside-nav-bar" aria-label="Main Navigation">


                    <div className="closing-wrapper">

                        <button onClick={() => setIsOpen(prev => !prev)} className="closing-button" aria-label="Close menu" aria-controls="sidebar" aria-expanded={isOpen}>
                            <FontAwesomeIcon icon={faX} aria-hidden="true" />
                        </button>

                    </div>

                    <ul className="aside-nav-ul">

                        {headerList.map((item) => (

                            <li key={item.id}>

                                <NavLink to={item.url} onClick={() => setIsOpen(false)} className={({ isActive }) => `header-anchor ${isActive ? "active" : ""}`}>{item.title}</NavLink>

                            </li>

                        ))}

                        <li>

                            <a href="https://github.com/DLAwe7" rel="noopener noreferrer" target="_blank" className="header-anchor github-header">Github</a>

                        </li>

                        <li>

                            <a href={CV} className="header-anchor github-header" download>

                                <span>Download CV</span>

                            </a>

                        </li>



                    </ul>


                    <div className="bottom-icons">

                        <a href={CV} download aria-label="Download my Curriculum Vitae">
                            <FontAwesomeIcon icon={faDownload} aria-hidden="true" />
                        </a>

                        <a href="https://github.com/DLAwe7" rel="noopener noreferrer" target="_blank" aria-label="GitHub Profile">
                            <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                        </a>


                    </div>



                </nav>


            </aside>

        </FocusScope>

        , document.body

    );



}


export default NavBarMobile;