import logo from './logo.svg';
import './App.css';
import {Todo} from "./components/Todo";
import {ToastContainer} from "react-toastify";
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
      <>
        <Routes>
            <Route path="/" element={<Todo/>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
