import { useEffect } from "react"

const Birds = ({setPage}) => {
    useEffect(() => {
        setPage("Birds")
    },[])
    
    return (
        <>
            <div>birds</div>
        </>
    )
}

export default Birds