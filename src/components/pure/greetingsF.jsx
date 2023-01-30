import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingsF = (props) => {

    //const [VAR, FX que usa] = useState(Valor inicial)
    const [age, setage] = useState(29);

    const birthday = () => {
        //actualizamos el State
        setage(age + 1)
    }

    return (
        <div>
                <h1> Hola,  {props.name} !</h1>
                <h2>Tu edad es: {age}</h2>
                <div>
                    <button onClick = {birthday}>Cumplir años</button>
                </div>
            </div>
    );
};


GreetingsF.propTypes = {
    name: PropTypes.string
};


export default GreetingsF;
