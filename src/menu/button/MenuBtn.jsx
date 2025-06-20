function MenuBtn({isOpen, setIsOpen}) {
    const menuBtnClick = () => {
        if (isOpen == "open") {
            setIsOpen("close")
        } else if (isOpen == "close") {
            setIsOpen("open")
        }
    }

    return (
        <div id="menu-btn-container">
            <button id="menu-btn" className="btn menu-btn" onClick={menuBtnClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>
        </div>
    )
}

export default MenuBtn