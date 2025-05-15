import { Navigate, useParams } from "react-router-dom"
import { checkPageValidity, getImageURL, matchAnimal } from "../../utils/functions"
import { allAnimals } from "../../utils/data"

const Animal = () => {
    const param = useParams()
    const animalObject = matchAnimal(allAnimals, param.animal)
    
    return (
            checkPageValidity(allAnimals, param.animal) 
            ? 
            <div>
                <div>
                    <img src={getImageURL(animalObject.imageFilename)} alt={animalObject.name} width="100%" height="auto" />
                </div>
            </div>
            : 
            <Navigate to="/"/>
    )
}

export default Animal