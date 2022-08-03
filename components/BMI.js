import styles from '../styles/Home.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function BMI() {
    return (
        <section id="BMI">
            <div className={styles.flexcontainer}>
                <div className={`${styles.BMIContainer} ${styles.flexwrap}`}>
                    <div className={styles.BMITextContainer}>
                        <p>BMI Calculator</p>
                        <p>Calculate Your body mass index</p>
                        <div className={`${styles.BMIComponent} ${styles.center} ${styles.flexcontainer} ${styles.BMIBtnCont}`}>
                                <a href="#" className={`${styles.CalculateBtn}`}>CALCULATE</a>
                        </div>
                        <br/>
                        <p className={styles.HiddenResult}>YOUR BMI: {30.12312312232}</p>
                    </div>
                    <div className={`${styles.BMIForm} ${styles.flexcontainer}`}>
                        <div className={styles.BMIApp}>
                            <div className={styles.BMIComponent}>
                                <p>Height (cm)</p>
                                <Slider
                                className={styles.slider}
                                size="large"
                                defaultValue={70}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                max={130}
                                min={30}
                                />
                            </div>
                            <div className={styles.BMIComponent}>
                                <p>Weight (KG)</p>
                                <Slider
                                    className={styles.slider}
                                    size="large"
                                    defaultValue={70}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    max={130}
                                    min={30}
                                    />
                            </div>
                            <div className={styles.BMIComponent}>
                                <p>Age</p>
                                <Slider
                                    className={styles.slider}
                                    size="large"
                                    defaultValue={70}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    max={130}
                                    min={30}
                                    />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BMI;