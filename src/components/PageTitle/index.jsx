import styles from './pagetitle.module.css'

const PageTitle = ({title}) => {
    return (
        <h1 className={styles.pageTitle}>{title}</h1>
    )
}

export default PageTitle