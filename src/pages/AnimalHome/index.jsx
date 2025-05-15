import { useParams, Navigate } from "react-router-dom"
import { checkPageValidity } from "../../utils/functions";
import { allAnimals } from "../../utils/data";

const AnimalHome = () => {
    const param = useParams();
    
    return (
            checkPageValidity(allAnimals, param.animal) 
            ? 
            <div>
                {param.animal}
            </div>
            : 
            <Navigate to="/"/>
    )
}

export default AnimalHome