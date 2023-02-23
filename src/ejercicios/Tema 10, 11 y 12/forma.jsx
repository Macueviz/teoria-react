import React, {useState, useEffect} from 'react';


const Forma = () => {


  const [color, setColor] = useState('rgb(0,0,0');
  const [manageInterval, setManageInterval] = useState(0);

  const getRandomNumber = (maxNum) =>{
    return Math.floor(Math.random() * maxNum)
  }
  
  const getRandomColor = () => {
    const r = getRandomNumber(255);
    const g = getRandomNumber(255);
    const b = getRandomNumber(255);
    return setColor(`rgb(${r},${g},${b})`)
  }
  

  const changeColor = () => {
    return setManageInterval(setInterval(getRandomColor, 500));
  }

  const stopChangeColor = () => {
    return clearInterval(manageInterval);
  }

  const clickChangeColor = () => {
    return clearInterval(manageInterval);
  }

  return (
    <div>
      <div onMouseOver={changeColor} 
            onMouseLeave={stopChangeColor}
            onDoubleClick={clickChangeColor}
            style={{backgroundColor: color, margin: 'auto', width: '255px', height: '255px'  }}>

      </div>
    </div>


  );
};




export default Forma;
