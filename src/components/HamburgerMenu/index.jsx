import { ListIcon } from '@phosphor-icons/react'

const HamburgerMenu = ({size, color, className, onClick}) => {
    return (
        <ListIcon size={size} color={color} className={className} onClick={onClick}/>
    )
}

export default HamburgerMenu