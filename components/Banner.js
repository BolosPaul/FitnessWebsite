import styles from '../styles/Home.module.css'


function Banner() {
    return (
        <>
        <section id="Home">
            <div className={`${styles.bannercontainer} ${styles.flexcontainer}`}>
                <div className={styles.watermark}></div>
                <div className={styles.welcomeTextCont}>
                    <p className={styles.welcomeText}>Welcome to Fitness Center</p>
                </div>
                <div className={styles.lifter}></div>
            </div>
        </section>
        </>
 
    )
}

export default Banner