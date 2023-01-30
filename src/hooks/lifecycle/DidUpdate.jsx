import React, { Component, useEffect } from 'react'


export class DidUpdate extends Component {
    
    componentDidUpdate() {
        console.log('Accion cuando recibe nuevas actualizaciones');
    }

    render() {
        return (
        <div>DidUpdate</div>
        )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Accion cuando recibe nuevas actualizaciones')
    } );

    return (
    <div>DidUpdateHook</div>
    );
};

