
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
import {Modal} from "./components/customers/Modal";
import ContractCreate from "./components/contracts/ContractCreate";
import ContractUpdate from "./components/contracts/ContractUpdate";
import Footer from "./components/Footer";
import {FacilityCreate} from "./components/facilities/FacilityCreate";
import {FacilityUpdate} from "./components/facilities/FacilityUpdate";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<FacilityList/>}/>
                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/contracts" element={<ContractList/>}/>
                <Route path="/facilities" element={<FacilityList/>}/>
                <Route path="/customers/create" element={<CustomerCreate/>}/>
                <Route path="/customers/update/:id" element={<CustomerUpdate/>}/>
                <Route path="/contracts/create" element={<ContractCreate/>}/>
                <Route path="/contracts/update/:id" element={<ContractUpdate/>}/>
                <Route path="/facilities/create" element={<FacilityCreate/>}/>
                <Route path="/facilities/update/:id" element={<FacilityUpdate/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            {/*<Modal/>*/}
            <Footer/>
            <ToastContainer></ToastContainer>
        </>
    )
}
export default App;
