/**
 * Usamos useState() y useContext()
 * Con el contexto podemos pasar información de padre a hijo
 */

import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacio que va a rellenarse con
    // los datos del contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El Token es: {state.token}
            </h1>
            {/*Pintamos el componente 2*/}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    const state = useContext(miContexto);
    
    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {
    
    const estadoInicial = {
        token: '123456',
        sesion: 1
    }
    
    /*Creamos el estado de este componente*/
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {token: 'jKfrkncd232',
            sesion: sessionData.sesion +1 }
        )
    }

    return (

    <miContexto.Provider value = {sessionData}>
    {/*Todo lo que está aqui dentro puede leer los datos de sessionData */}
    <h1>*** Ejemplo de useState() y useContext()</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Cambiar sesion</button>
    </miContexto.Provider>
    )
}



