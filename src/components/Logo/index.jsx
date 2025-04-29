import { getImageURL } from "../../utils/functions"

const Logo = ({className}) => {
    return (
        <img src={getImageURL("zoo-logo.png")} className={className} />
    )
}

export default Logo