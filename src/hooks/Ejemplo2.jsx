import React, { useState, useEffect, useRef } from 'react';

const Ejemplo2 = () => {

    /*Creamos la VAR con 'useState', creamos VAR, FX y valor inicial*/
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);


    function incrementarContador1(){
        setContador1(contador1 + 1);
    }
    

    function incrementarContador2() {
        setContador2(contador2 + 2);
    }
    /** useEffect() por defecto sin lista en el 'input' registra todos los estados*/

    // useEffect(() => {
    // console.log('CAMBIO EL ESTADO DEL COMPONENTE')
    // console.log('Mostrando referencia a elemento del DOM')
    // console.log(miRef) 
    // });

    
    /*Cuando usamos el input, registramos el cambio en el estado que seleccionemos*/

    useEffect(() => {
    console.log('CAMBIO EL ESTADO DEL COMPONENTE')
    console.log('Mostrando referencia a elemento del DOM')
    console.log(miRef) 
    }, [contador1]); /*Solo registra el contador1*/

    const miRef = useRef();

    return (
        <div>
            <h1>
                **Prueba de Hooks con useState(), useEffect() y useRef()**
            </h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            <h3 ref = {miRef}>Elemento referenciado del DOM</h3>
            {/*Botones de accion para incrementar*/}
            <button onClick={incrementarContador1}> Incrementar contador 1</button>
            <button onClick={incrementarContador2}> Incrementar contador 2</button>
        </div>
    );
}

export default Ejemplo2;
