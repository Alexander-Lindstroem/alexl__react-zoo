import { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import { checkPageValidity } from '../../utils/functions'
import { pages } from '../../utils/data'

const AnimalType = ({setPage}) => {
    const params = useParams()
    const path = useLocation()

    useEffect(() => {
        setPage(`${params.animalType}`)
    },[path.pathname])

    return (
            checkPageValidity(pages, params.animalType)
            ?
            <Outlet/>
            :
            <Navigate to="/"/>
    )
}

export default AnimalType