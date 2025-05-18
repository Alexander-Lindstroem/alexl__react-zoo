import { Navigate, useParams } from "react-router-dom"
import { checkPageValidity, getImageURL, matchAnimal } from "../../utils/functions"
import { allAnimals } from "../../utils/data"
import styles from "./animal.module.css"

const Animal = () => {
    const param = useParams()
    const animalObject = matchAnimal(allAnimals, param.animal)
    
    return (
            checkPageValidity(allAnimals, param.animal) 
            ? 
            <div className={styles.animal}>
                <div className={styles.imageContainer}>
                    <div className={styles.nameContainer}>
                        <h3 className={styles.name}>{animalObject.name}</h3>
                    </div>
                    <img className={styles.image} src={getImageURL(animalObject.imageFilename)} alt={animalObject.name} width="100%" height="auto" />
                </div>
                <div className={styles.details}>
                    <div className={styles.category}><span className={styles.categoryName}>Type</span><span className={styles.categoryContent}>{animalObject.group}</span></div>
                    <div className={styles.category}><span className={styles.categoryName}>Lifespan</span><span className={styles.categoryContent}>{animalObject.lifespan} years</span></div>
                    <div className={styles.category}><span className={styles.categoryName}>Diet</span><span className={styles.categoryContent}>{animalObject.food}</span></div>
                    <div className={styles.category}><span className={styles.categoryName}>Length</span><span className={styles.categoryContent}>{animalObject.length}</span></div>
                    <div className={styles.category}><span className={styles.categoryName}>Weight</span><span className={styles.categoryContent}>{animalObject.weight}kg</span></div>
                    <div className={styles.category}><span className={styles.categoryName}>Habitat</span><span className={styles.categoryContent}>{animalObject.habitat}</span></div>
                    <div className={styles.description}>
                        <h4 className={styles.descriptionTitle}>Description</h4>
                        <div className={styles.descriptionContent}>{animalObject.description}</div>
                    </div>
                </div>
            </div>
            : 
            <Navigate to="/"/>
    )
}

export default Animal