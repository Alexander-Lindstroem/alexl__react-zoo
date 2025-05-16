import styles from './sidebar.module.css'
import { allAnimals, mammals, reptiles, birds } from '../../utils/data'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = ({sidebarPageReference}) => {
    let sidebarObjects = sidebarPageReference === "home" ?  allAnimals : {mammals, reptiles, birds}[sidebarPageReference]
    
    const path = useLocation()
    return (
        <div className={styles.sidebar}>
            {sidebarObjects.map((animal, index) => (
                <NavLink 
                    key={index} 
                    className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} 
                    to={path.pathname === `/${sidebarPageReference}/${animal.link}` ? path.pathname.includes("home") ? "/" : `${sidebarPageReference}` : `${sidebarPageReference}/${animal.link}`}>
                    {animal.name[0]}
                </NavLink>
            ))}
        </div>
    )
}

export default Sidebar