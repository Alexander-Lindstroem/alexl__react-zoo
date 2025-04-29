import { useState, useEffect } from 'react'
import styles from './header.module.css'
import HamburgerMenu from '../HamburgerMenu'
import Logo from '../Logo'
import NavigationBar from '../NavigationBar'
import PageTitle from '../PageTitle'

const Header = ({headerTitle}) => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    useEffect(() => {
        setShowMenu(false)
    }, [headerTitle])

    return (
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Logo className={styles.logo}/>
                    <div className={styles.titleContainer}>
                        <PageTitle title={headerTitle}/>
                        <div className={styles.desktopNavBar}>
                            <NavigationBar />
                        </div>
                    </div>
                    <HamburgerMenu size={50} color={"black"} className={styles.hamburger} onClick={handleClick}/>
                </div>
                {showMenu &&
                <div className={styles.mobileNavBar}>
                    <NavigationBar/>
                </div>
                }
            </header>
    )
}

export default Header