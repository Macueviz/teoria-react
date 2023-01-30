import React, {useEffect} from 'react';
import PropTypes from 'prop-types';


const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado')

        const intervalID =setInterval(() => {
            console.log('Actualización del componente')
        },1000) //Cada segundo se realiza esta acción
        return () => {
            console.log('Componente va a desaparecer')
            clearInterval(intervalID);
        };

    }, []);


    return (
        <div>
            
        </div>
    );
};


AllCycles.propTypes = {

};


export default AllCycles;
