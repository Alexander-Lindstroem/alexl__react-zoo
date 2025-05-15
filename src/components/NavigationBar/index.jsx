import { NavLink } from 'react-router-dom'
import styles from './navigationbar.module.css'
import { pages } from '../../utils/data'
 
const NavigationBar = () => {

    return (
        <div className={styles.navBar}>
            {pages.map((item, index) => (
                <NavLink 
                    key={index} 
                    className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link} 
                    to={item.link === 'home' ? "/" : item.link}>
                    {item.link}    
                </NavLink>
            ))}
        </div>
    )
}

export default NavigationBar