import { useEffect } from "react"

const Mammals = ({setPage}) => {
    useEffect(() => {
        setPage("Mammals")
    },[])
    
    return (
        <div>Mammals</div>
    )
}

export default Mammals