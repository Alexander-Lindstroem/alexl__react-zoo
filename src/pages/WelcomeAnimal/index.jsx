import styles from "./welcomeanimal.module.css"

const WelcomeAnimal = ({type}) => {
    return (
        <div className={styles.welcome}>
            <h3 className={styles.title}>{type}</h3>
            <p className={styles.paragraph}>Here you can browse the many {type} that you can find at our zoo!</p>
            <p className={styles.paragraph}>Start by navigating the sidebar to the left.</p>
        </div>
    )
}

export default WelcomeAnimal