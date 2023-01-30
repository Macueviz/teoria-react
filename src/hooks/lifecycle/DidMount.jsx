import React, { Component, useEffect } from 'react';


export class DidMount extends Component {

    componentDidMount() {
        console.log('Accion antes de que el comp sea añadido al DOM')
    }

    render() {
        return (
            <div>
                <h1>**DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Accion antes de que el comp sea añadido');
    }, []);

    return (
        <div>
            <h1>**DidMountHook</h1>
        </div>
    );
}




