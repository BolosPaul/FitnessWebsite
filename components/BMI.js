import styles from '../styles/Home.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
 
function BMI() {
    const PersonInitialDetails = {
        height: 0,
        weight: 0,  
        age: 0,
    }
    const [PersonDetails, setPersonDetails] = React.useState(PersonInitialDetails);
    let [BMI, setBMI] = React.useState();
    let [Status, setStatus] = React.useState();
    const [isActive, setActive] = React.useState(false);

    const onFormUpdate = (category, value) => {
        setPersonDetails({
            ...PersonDetails,
            [category]: value,
        });
    }
    const calculateBMI = () => {
        if(PersonDetails.height > 0 && PersonDetails.weight > 0 && PersonDetails.age > 0 && PersonDetails.gender !== '' && PersonDetails.activity !== '') {
            setBMI(BMI = 1);
            setBMI(BMI = (PersonDetails.weight / PersonDetails.height / PersonDetails.height) * 10000);
            if(BMI < 18.5) setStatus("Underweight"); 
                else if(BMI < 24.9 && BMI > 18.5) setStatus("Normal");
                else if(BMI > 24.9 && BMI < 29.9) setStatus("Overweight");
                else if(BMI > 29.9) setStatus("Obeese");
            if(!isActive) {
                setActive(current => !current);
            }
        }
    }

    return (
        <section id="BMI">
            <div className={styles.flexcontainer}>
                <div className={`${styles.BMIContainer} ${styles.flexwrap}`}>
                    <div className={styles.BMITextContainer}>
                        <h4>BMI Calculator</h4>
                        <h3>Calculate Your body mass index</h3>
                        <div className={`${styles.BMIComponent} ${styles.center} ${styles.flexcontainer} ${styles.BMIBtnCont}`}>
                                <div className={`${styles.CalculateBtn}`} onClick={calculateBMI}>CALCULATE</div>
                        </div>
                        <br/>
                        <p className={isActive ? styles.HiddenResult : styles.hide}>YOUR BMI: {BMI}</p>
                        <p className={isActive ? styles.HiddenResult : styles.hide}>{Status}</p>
                    </div>
                    <div className={`${styles.BMIForm} ${styles.flexcontainer}`}>
                        <div className={styles.BMIApp}>
                            <div className={styles.BMIComponent}>
                                <p>Height (cm)</p>
                                <Slider
                                className={styles.slider}
                                size="large"
                                defaultValue={30}
                                aria-label="Small"
                                valueLabelDisplay="auto"
                                max={250}
                                min={30}
                                onChange={(e) => onFormUpdate('height', e.target.value)}
                                />
                            </div>
                            <div className={styles.BMIComponent}>
                                <p>Weight (KG)</p>
                                <Slider
                                    className={styles.slider}
                                    size="large"
                                    defaultValue={30}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    max={250}
                                    min={30}
                                    onChange={(e) => onFormUpdate('weight', e.target.value)}
                                    />
                            </div>
                            <div className={styles.BMIComponent}>
                                <p>Age</p>
                                <Slider
                                    className={styles.slider}
                                    size="large"
                                    defaultValue={14}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    max={100}
                                    min={14}
                                    onChange={(e) => onFormUpdate('age', e.target.value)}
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