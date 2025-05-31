import { useState } from "react"
import MenuBtn from "./button/MenuBtn"
import List from "./elements/List"

function Menu() {
    const [isOpen, setIsOpen] = useState("open")

    return (
        <nav id="menu" className={`menu-color ${isOpen == "open" ? 'menu-size' : null}`}>
            <MenuBtn
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            />
            {isOpen == "open" ? <List /> : null}
        </nav>
    )
}

export default Menu