import { useEffect } from 'react'
import styles from './home.module.css'
import { Outlet, useParams } from 'react-router-dom'

const Home = ({setPage}) => {
    useEffect(() => {
        setPage("home")
    },[])

    return (
        <Outlet/>
    )
}

export default Home