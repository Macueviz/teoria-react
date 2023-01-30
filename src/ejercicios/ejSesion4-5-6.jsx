import React, {useState, useEffect} from 'react';


export const ClockFuncional = () => {

    const stateInitial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Miguel',
        apellidos: 'Cuevas',
    };

    const [state, setState] = useState(stateInitial);

    useEffect(() => {
        const intervalAge = setInterval(() =>{
            actualizar();
        },1000);
        return () => {
            clearInterval(intervalAge);    
        };
    });

    const actualizar = () => {
        return setState({
            fecha: state.fecha,
            edad: state.edad + 1,
            nombre: state.nombre,
            apellidos: state.apellidos,
        });
    };

    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {state.nombre} {state.apellidos}
            </h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );
};
