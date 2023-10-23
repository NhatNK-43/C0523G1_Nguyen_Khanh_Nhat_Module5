
import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import {CustomerList} from "./components/customers/CustomerList";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/customer" element={<CustomerList/>}/>
            </Routes>
        </>
    )
}
export default App;
