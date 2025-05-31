import { useNavigate } from "react-router-dom"

function Component({name, url}) {
    const navigate = useNavigate()

    return (
        <li className="center">
            <button className="btn component" onClick={() => navigate(url)}>
                {name}
            </button>
        </li>
    )
}

export default Component