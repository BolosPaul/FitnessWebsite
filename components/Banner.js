import styles from '../styles/Home.module.css'
import Container from '@mui/material/Container'


function Banner() {
    return (
        <>
        <section id="Home">
            <div className={`${styles.bannercontainer} ${styles.flexcontainer}`}>
                <div className={styles.watermark}>
                    <div className={styles.watermarkIMG}></div>
                </div>
                <div className={styles.welcomeTextCont}>
                    <p className={styles.welcomeText}>Welcome to Fitness Center</p>
                    <Container maxWidth="sm" sx={{display: `flex`}}>
                        <a href="#" className={`${styles.join} ${styles.join4}`}>Joinjoin us now</a>
                    </Container>
                </div>
                <div className={styles.lifter}>
                </div>
            </div>
        </section>
        </>
 
    )
}

export default Banner