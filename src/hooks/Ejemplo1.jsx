import React, { useState } from 'react';

const Ejemplo1 = () => {
    
    const contadorInicial = 0;

    const personaInicial = {
        nombre: 'Miguel',
        apellido: 'Cuevas'
    }

    /*Uso de useState, nombrando la VAR y la FX que cambiará el estado*/
    const [contador, setContador] = useState(contadorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * FX que cambia el state usando la FX anterior de useState
     */
    function incrementarContador() {
        setContador(contador + 1);  
    }

    function cambiarPersona() {
        setPersona (
            {   nombre: 'Ila',
                apellido: 'Scandolo'
            }
        )
    }


    return (
        <div>
            <h1>
                **Probando los Hooks**
            </h1>
            <h2>
                Contador: {contador}
            </h2>
            <h2> Datos de la persona</h2>
            <h3>Persona: {persona.nombre}</h3>
            <h3>Apellido: {persona.apellido}</h3>
            {/*Bloque de botones para cambiar el estado */}
            <button onClick={incrementarContador}>incrementar Contador</button>
            <button onClick={cambiarPersona}>Cambiar la persona</button>
        </div>
    );
}

export default Ejemplo1;
