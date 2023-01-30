import logo from './logo.svg';
import './App.css';
//import Greetings from './components/pure/greetings'
//import GreetingsF from './components/pure/greetingsF';
//import TaskListComponent from './components/container/task_list';
//import GreetingStyled from './components/pure/greetingStyled';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
// import  Clock  from './ejercicios/ejSesion4,5,6';
import { ClockFuncional } from './ejercicios/ejSesion4-5-6';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greetings.jsx*/}
        {/* <Greetings name='Miguel'></Greetings>  COMPONENT DE CLASE */}
        {/* <GreetingsF name="Miguela"></GreetingsF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <GreetingStyled name='Miguel'></GreetingStyled> */}
        {/* <Clock></Clock> */}
        <ClockFuncional></ClockFuncional>
      </header>
    </div>
  );
}

export default App;
