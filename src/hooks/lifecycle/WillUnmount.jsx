import React, { Component, useEffect } from 'react'


export class WillUnmount extends Component {
    
    componentWillUnmount() {
        console.log('Accion antes de que el comp desaparezca');
    }

    render() {
        return (
        <div>WillUnmount</div>
        )
    }
}

export const WillUnmountHook = () => {

    useEffect(() => {
        
        return () => {
            console.log('Accion antes de que el comp desaparezca');
        };
    }, []);

    return (
    <div>WillUnmountHook</div>
    );
};