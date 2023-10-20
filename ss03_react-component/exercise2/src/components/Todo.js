const {Component} = require("react");

class Todo extends Component {
    state = {
        list: [],
        item: ""
    }

    handleChange = (event) => {
        this.setState(
            {
                item: event.target.value
            }
        )
    }

    handleAddItem = () => {
        if (this.state.item) {
            this.setState({
                list: [...this.state.list, this.state.item]
            })
        }
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-center text-center">
                   <div className="form-control m-5">
                       <div>
                           <h2>Todo List</h2>
                       </div>
                       <div>
                           <input onChange={(text) => this.handleChange(text)}/>
                           <button onClick={this.handleAddItem}>Add</button>
                       </div>
                       <div>
                           <table>
                               {this.state.list.map((task, index) => (
                                   <tr key={index}>
                                       <td>{task}</td>
                                   </tr>
                               ))}
                           </table>
                       </div>
                   </div>
                </div>
            </>
        )
    }
}

export default Todo;