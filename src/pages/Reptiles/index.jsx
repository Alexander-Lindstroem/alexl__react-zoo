import { useEffect } from "react"

const Reptiles = ({setPage}) => {
    useEffect(() => {
        setPage("Reptiles")
    },[])
    
    return (
        <>
            <div>reptiles</div>
        </>
    )
}

export default Reptiles