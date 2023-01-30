import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greetings extends Component {

    // AÑADO COMPONENTE A TRAVES DE UNA CLASE CON CONSTRUCTOR, PROPS, STATE.. HAY QUE DECLARAR LOS PROPTYPES
    constructor(props){
        super(props);   //TRAE LOS PROPS DEL PADRE
        this.state = {  // INICIALIZAMOS EL STATE
            age: 31
        }
    }
    render() {

        return (
            <div>
                <h1> Hola,  {this.props.name} !</h1>
                <h2>Tu edad es: {this.state.age}</h2>
                <div>
                    <button onClick = {this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }

    birthday = () => (  //EN LAS PURAS NO SE CAMBIA EL ESTADO, ES SOLO EJEMPLO. FX PARA CAMBIAR
        this.setState((prevState) =>( // HAY QUE MARCAR EL ESTAD PREVIO
            {
                age: prevState.age + 1 // INTRODUCIMOS EL CAMBIO EN EL ESTADO (+1)
            }
        ))
    )
}


Greetings.propTypes = {
    name: PropTypes.string, //SEÑALAR EL TIPO DE PROPTYPE PARA HACERLO UNICO (STRING, INT, BOOLEANO...)
};


export default Greetings;
