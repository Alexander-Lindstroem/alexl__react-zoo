import { useEffect } from 'react'
import styles from './home.module.css'

const Home = ({setPage}) => {
    useEffect(() => {
        setPage("Home")
    },[])

    return (
        <>
            <div>home</div>
        </>
    )
}

export default Home