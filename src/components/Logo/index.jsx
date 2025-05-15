import { NavLink } from "react-router-dom"
import { getImageURL } from "../../utils/functions"

const Logo = ({className}) => {
    return (
        <NavLink to="/">
            <img src={getImageURL("zoo-logo.png")} className={className} />
        </NavLink>
    )
}

export default Logo