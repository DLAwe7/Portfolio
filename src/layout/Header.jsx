import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css"
import useRestoreFocus from "../hooks/useRestoreFocus";
import { useRef } from "react";
import NavBarDesktop from "./NavBarDesktop";




function Header({ isOpen, setIsOpen, isMobile }) {



    const buttonRef = useRef(null);

    useRestoreFocus(isOpen, buttonRef);



    return (

        <header className="portfolio-header">

            <img src="/assets/logo-removebg-preview.ico" alt="Kevin Portfolio Logo" className="portfolio-logo" />

            {!isMobile && <NavBarDesktop />}





            {isMobile &&

                <button onClick={() => setIsOpen(true)} aria-expanded={isOpen} aria-controls="sidebar" aria-label="Open sidebar" className="opening-button" ref={buttonRef}>

                    <FontAwesomeIcon icon={faBars} aria-hidden="true" />

                </button>

            }

        </header>

    )
};

export default Header;