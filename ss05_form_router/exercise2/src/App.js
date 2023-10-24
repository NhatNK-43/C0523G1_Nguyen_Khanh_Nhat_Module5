import logo from './logo.svg';
import './App.css';
import {FormMedical} from "./components/FormMedical";
import {Routes, Route} from "react-router-dom"
import {NotFound} from "./components/NotFound";
import {ToastContainer} from "react-toastify";
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<FormMedical/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
