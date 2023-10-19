const {Component} = require("react");
class StudentList extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <>
                <div className="container">
                    <h2>Student</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.list.map(temp => {
                                return (
                                    <tr key={temp.id}>
                                        <td>{temp.id}</td>
                                        <td>{temp.name}</td>
                                        <td>{temp.age}</td>
                                        <td>{temp.address}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default StudentList;