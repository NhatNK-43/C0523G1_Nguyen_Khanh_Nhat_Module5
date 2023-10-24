
import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import {CustomerList} from "./components/customers/CustomerList";
import {ContractList} from "./components/contracts/ContractList";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/customer" element={<CustomerList/>}/>
                <Route path="/contract" element={<ContractList/>}/>
            </Routes>
        </>
    )
}
export default App;
