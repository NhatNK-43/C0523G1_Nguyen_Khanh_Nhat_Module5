import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {PostList} from "./components/PostList";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PostList/>}></Route>
                {/*<Route path="/create" element={<BookCreate/>}></Route>*/}
                {/*<Route path="/update" element={<BookUpdate/>}></Route>*/}
                {/*<Route path="*" element={<NotFound/>}></Route>*/}
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
