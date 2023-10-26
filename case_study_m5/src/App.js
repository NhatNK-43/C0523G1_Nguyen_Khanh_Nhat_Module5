
import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import {CustomerList} from "./components/customers/CustomerList";
import {ContractList} from "./components/contracts/ContractList";
import {FacilityList} from "./components/facilities/FacilityList";
import {NotFound} from "./components/NotFound";
import {CustomerCreate} from "./components/customers/CustomerCreate";
import {ToastContainer} from "react-toastify";
import {CustomerUpdate} from "./components/customers/CustomerUpdate";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/contracts" element={<ContractList/>}/>
                <Route path="/facilities" element={<FacilityList/>}/>
                <Route path="/customers/create" element={<CustomerCreate/>}/>
                <Route path="/customers/update/:id" element={<CustomerUpdate/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    )
}
export default App;
