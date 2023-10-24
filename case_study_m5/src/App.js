
import './App.css';
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import {CustomerList} from "./components/customers/CustomerList";
import {ContractList} from "./components/contracts/ContractList";
import {FacilityList} from "./components/facilities/FacilityList";
import {NotFound} from "./components/NotFound";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/customer" element={<CustomerList/>}/>
                <Route path="/contract" element={<ContractList/>}/>
                <Route path="/facility" element={<FacilityList/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}
export default App;
