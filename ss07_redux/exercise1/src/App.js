import logo from './logo.svg';
import './App.css';
import {UserList} from "./components/UserList";
import {Routes, Route} from "react-router-dom"
import {ToastContainer} from "react-toastify";
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<UserList/>}></Route>
        </Routes>
         <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
