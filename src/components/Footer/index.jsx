import styles from './footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.paragraph}>Created by Alexander Lindström 2025</div>
            <div className={styles.paragraph}>Powered by Vite + React</div>
        </footer>
    )
}

export default Footer