import styles from '../styles/Home.module.css'
import * as React from 'react';
import Container from '@mui/material/Container';
import Tilt from 'react-vanilla-tilt'
import Button from '@mui/material/Button'


function Plans(){
    return (
        <section id={'Plans'}>
            <Container maxWidth="xm" className={`${styles.Plans} ${styles.flexcontainer}`}>
                <Tilt options={{ scale: 1, max: 15 }} className={`${styles.Plan}`}>
                <Container maxWidth="xs" className={`${styles.Plan}`}>
                    <h2 className={styles.PlanTitle}>Basic Plan</h2>
                    <h4>Here Goes Some Description</h4>
                    <h5>For 1 Month</h5>
                    <h1 className={styles.price}>$99</h1>
                    <ul>
                        <li>Free Hand</li>
                        <li>Gym Fitness</li>
                        <li>Weight Loss</li>
                        <li>Personal Trainer</li>
                    </ul>
                    <br/>
                    <Button variant="outlined" color="error">
                      Select Now
                    </Button>

                </Container>
                </Tilt>
                <Tilt options={{ scale: 1, max: 15 }} className={`${styles.Plan}`}>
                <Container maxWidth="xs">
                    <h2 className={styles.PlanTitle}>Standart Plan</h2>
                    <h4>Here Goes Some Description</h4>
                    <h5>For 6 Months</h5>
                    <h1 className={styles.price}>$149</h1>
                    <ul>
                        <li>Free Hand</li>
                        <li>Gym Fitness</li>
                        <li>Weight Loss</li>
                        <li>Personal Trainer</li>
                    </ul>
                    <br/>
                    <Button variant="outlined" color="error">
                      Select Now
                    </Button>

                </Container>
                </Tilt>
                <Tilt options={{ scale: 1, max: 15 }} className={`${styles.Plan}`}>
                <Container maxWidth="xs">
                    <h2 className={styles.PlanTitle}>Ultimate Plan</h2>
                    <h4>Here Goes Some Description</h4>
                    <h5>For 1 Year</h5>
                    <h1 className={styles.price}>$249</h1>
                    <ul>
                        <li>Free Hand</li>
                        <li>Gym Fitness</li>
                        <li>Weight Loss</li>
                        <li>Personal Trainer</li>
                    </ul>
                    <br/>
                    <Button variant="outlined" color="error">
                      Select Now
                    </Button>

                </Container>
                </Tilt>
            </Container>
        </section>
    )
}

export default Plans;