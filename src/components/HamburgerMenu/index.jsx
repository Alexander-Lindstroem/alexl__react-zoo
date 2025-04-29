import { List } from '@phosphor-icons/react'

const HamburgerMenu = ({size, color, className, onClick}) => {
    return (
        <List size={size} color={color} className={className} onClick={onClick}/>
    )
}

export default HamburgerMenu