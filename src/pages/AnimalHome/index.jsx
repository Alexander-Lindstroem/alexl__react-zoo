import { useParams, Navigate, NavLink } from "react-router-dom"
import { checkPageValidity, getImageURL, matchAnimal } from "../../utils/functions";
import { allAnimals } from "../../utils/data";
import styles from "./animalhome.module.css"

const AnimalHome = () => {
    const param = useParams();
    const animalObject = matchAnimal(allAnimals, param.animal)
 
    return (
            checkPageValidity(allAnimals, param.animal) 
            ? 
            <div className={styles.animal}>
                <h3 className={styles.name}>{animalObject.name}</h3>
                <img className={styles.image} src={getImageURL(animalObject.imageFilename)} alt="" />
                <p className={styles.description}>The {animalObject.name.toLowerCase()} is a {animalObject.group.toLowerCase().slice(0, -1)}.</p>
                <NavLink className={styles.button} to={`/${animalObject.group.toLowerCase()}/${animalObject.link}`}>Read More</NavLink>
            </div>
            : 
            <Navigate to="/"/>
    )
}

export default AnimalHome