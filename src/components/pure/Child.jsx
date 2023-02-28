import React, { useRef} from 'react';


const Child = ({name, send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressedButton(){
        const text = messageRef.current.value;
        alert(`Text: ${text}`);
    }

    function pressedButtonParam(text) {
        alert(`Text: ${text}`)
    }    
    
    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    } 

    return (
        <div onMouseOver={() => console.log('On mouse over')}>
            <h3>
                Hello, {name}
            </h3>
            <button onClick={() => console.log('Pressed button 1')}>
                button 1
            </button>
            <button onClick={pressedButton}>
                button 2
            </button>
            <button onClick={() => pressedButtonParam('Hello, father')}>
                button 3
            </button>
            <input 
                placeholder='Insert text'
                onCopy={() => console.log('Copy')}
                onFocus={() => console.log('Focused')}
                onChange={(e) => console.log(e.target.value)}
                ref = {messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>
                Send message
            </button>
            <div style={{marginTop:' 20px'}}>
                <form onSubmit={submitName}>
                    <input 
                    placeholder='New name'
                    ref={nameRef}/>

                    <button type='submit'>
                        Update name
                    </button>
                </form>

            </div>
        </div>
    );
};





export default Child;
