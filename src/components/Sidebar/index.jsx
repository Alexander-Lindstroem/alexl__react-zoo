import styles from './sidebar.module.css'
import { allAnimals, mammals, reptiles, birds } from '../../utils/data'
import { NavLink } from 'react-router-dom'

const Sidebar = ({sidebarPageReference}) => {
    let sidebarObjects
    sidebarObjects = sidebarPageReference.toLowerCase() === "home" ?  allAnimals : {mammals, reptiles, birds}[sidebarPageReference.toLowerCase()]
    
    console.log(sidebarObjects)
    return (
        <div className={styles.sidebar}>
            {sidebarObjects.map((animal, index) => (
                <NavLink key={index} className={styles.link} to={`home/${animal.link}`}>{animal.name[0]}</NavLink>
            ))}
        </div>
    )
}

export default Sidebar