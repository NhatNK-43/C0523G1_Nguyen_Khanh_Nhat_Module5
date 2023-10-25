import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {PostList} from "./components/PostList";
import {ToastContainer} from "react-toastify";
import {BookCreate} from "./components/BookCreate";
import {BookUpdate} from "./components/BookUpdate";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<PostList/>}></Route>
                <Route path="/create" element={<BookCreate/>}></Route>
                <Route path="/update/:id" element={<BookUpdate/>}></Route>
                {/*<Route path="*" element={<NotFound/>}></Route>*/}
            </Routes>
            <ToastContainer></ToastContainer>
        </>
    );
}

export default App;
