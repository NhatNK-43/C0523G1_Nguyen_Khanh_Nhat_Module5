import logo from './logo.svg';
import './App.css';
import StudentList from "./components/student";

function App() {
    const studentList = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            age: 30,
            address: "Hà Nội"
        },
        {
            id: 2,
            name: "Nguyễn Văn B",
            age: 25,
            address: "Đà Nẵng"
        },
        {
            id: 3,
            name: "Nguyễn Văn C",
            age: 32,
            address: "Hồ Chí Minh"
        }
    ]
    return (
        <>
            <StudentList list={studentList}/>
        </>
    );
}

export default App;
