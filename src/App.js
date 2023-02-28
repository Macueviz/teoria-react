//import logo from './logo.svg';
import './App.css';
// import Greetings from './components/pure/greetings'
// import GreetingsF from './components/pure/greetingsF';
// import GreetingStyled from './components/pure/greetingStyled';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import  Clock  from './ejercicios/ejSesion4,5,6';
// import { ClockFuncional } from './ejercicios/ejSesion4-5-6';
//import Father from './components/container/Father';
// import TaskListComponent from './components/container/task_list';
// import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
// import Forma from './ejercicios/Tema 10, 11 y 12/forma';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Componente propio Greetings.jsx*/}
        {/* <Greetings name='Miguel'></Greetings>  COMPONENT DE CLASE */}
        {/* <GreetingsF name="Miguela"></GreetingsF> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <GreetingStyled name='Miguel'></GreetingStyled> */}
        {/* <Clock></Clock> */}
        {/* <ClockFuncional></ClockFuncional> */}
        {/* <Father ></Father> */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/** EJEMPLO DE FORMULARIO FORMIK */}
        {/* <LoginFormik></LoginFormik> */}
        <RegisterFormik></RegisterFormik>
        
        {/* <Forma></Forma> */}
      {/* </header> */}
    </div>
  );
}

export default App;
