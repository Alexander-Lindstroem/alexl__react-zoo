import { getImageURL } from "../../utils/functions"
import styles from "./welcomehome.module.css"

const WelcomeHome = () => {
    return (
        <div className={styles.welcome}>
            <h3 className={styles.title}>Welcome to the Zoo of Australia!</h3>
            <img className={styles.image} src={getImageURL("zoo.jpg")} alt={"zoo of australia"} />
            <p className={styles.paragraph}>Try using the sidebar to the left to start browsing the animals we have at our zoo.</p>
        </div>
    )
}

export default WelcomeHome