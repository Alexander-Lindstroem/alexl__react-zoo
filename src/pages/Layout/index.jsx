
import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"


const Layout = ({layoutCurrentPage}) => {
    return (
        <>
            <Header headerTitle={layoutCurrentPage}/>
            <div className={styles.main}>
                <Sidebar sidebarPageReference={layoutCurrentPage}/>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}

export default Layout