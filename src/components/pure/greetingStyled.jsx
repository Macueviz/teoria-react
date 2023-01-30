import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Definiendo estilos en constantes:

//  Estilos para usuario logueado
const loggedStyle = {
    color: 'tomato'
};

//  Estilos para usuario NOlogueado
const unloggedStyle = {
    color: 'white',
    fontWeight: 'bold'
};

const GreetingStyled = (props) => {

const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>

            { logged ?
            (<p>Hola, {props.name}</p>) 
            : 
            (<p>Please login</p>) }
            
            <button onClick={ () => {
                console.log('boton pulsado');
                setLogged(!logged);
            }

            }>
                { logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default GreetingStyled;
