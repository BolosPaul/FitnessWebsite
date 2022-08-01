// import { Button } from 'react-bootstrap';

import { useState } from "react"

export const BMI = () => {

    const PersonInitialDetails = {
        height: 0,
        weight: 0,  
        age: 0,
        gender: '',
        activity: '',
    }

    const [PersonDetails, setPersonDetails] = useState(PersonInitialDetails);
    let [BMI, setBMI] = useState();
    const [isActive, setActive] = useState(false);

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
            setActive(current => !current);
        }
    }

    return (
        <section id="BMI" className='flex-container'>
            <div className="content-sidebar section medium-basis">
                <div>
                    <h4>CALCULATE BMI</h4>
                    <h3>CALCULATE YOUR BODY MASS INDEX</h3>
                </div>
                <div>
                    <input type="text" placeholder="Height" onChange={(e) => onFormUpdate('height', e.target.value)}></input>
                    <input type="text" placeholder="Weight" onChange={(e) => onFormUpdate('weight', e.target.value)}></input>
                    <input type="text" placeholder="Age" onChange={(e) => onFormUpdate('age', e.target.value)}></input>
                    <select id='Gender' name='Gender' onChange={(e) => onFormUpdate('gender', e.target.value)}>
                        <option value="Select a gender">Select a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <select id='Activity' name='Activity' onChange={(e) => onFormUpdate('activity', e.target.value)}>
                        <option value='Select'>Select an activity factor</option>
                        <option value='Little'>Little or no Exercise / deskjob</option>
                        <option value='Light'>Light exercise / sports 1 - 3 days/week</option>
                        <option value='Moderate'>Moderate Exercise / sports 3 - 5 days / week</option>
                        <option value='Heavy'>Heavy Exercise / sports 6 - 7 days / week</option>
                        <option value='VeryHeavy'>Very Heavy Exercise / physical job / training 2x / day</option>
                    </select>
                    {/* <Button>Calculate</Button> */}
                    <div className="Calculate" onClick={calculateBMI}><p>Calculate</p></div>
                    <br/>
                    <div className={isActive ? "BMIDisplay" : 'hide'}>Your BMI: {BMI}</div>
                </div>
            </div>
        </section>
    )
}
