import "./HiddenOverlay.css"


function HiddenOverlay({ isOpen, setIsOpen }) {

    return (

        <div className={`overlay ${isOpen ? "" : "hidden"}`} aria-hidden="true" onClick={() => setIsOpen(false)}></div>
    )



}

export default HiddenOverlay;