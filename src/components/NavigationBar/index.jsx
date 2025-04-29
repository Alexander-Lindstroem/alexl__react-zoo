import { NavLink } from 'react-router-dom'
import styles from './navigationbar.module.css'
import { pages } from '../../utils/data'
 
const NavigationBar = () => {

    return (
        <div className={styles.navBar}>
            {pages.map((item, index) => (
                <NavLink key={index} className={styles.link} to={item === 'home' ? "/" : item}>{item}</NavLink>
            ))}
        </div>
    )
}

export default NavigationBar