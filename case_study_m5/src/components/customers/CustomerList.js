function CustomerList(){
    return(
        <>
            <div id="header">
                <h1>Customer</h1>
            </div>
            <div className="container-fluid">
                <div>
                    <a
                        role="button"
                        href="#"
                        className="btn btn-sm btn-primary mt-3 mb-3"
                    >
                        Create customer
                    </a>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Date of birth</th>
                            <th>Gender</th>
                            <th>Id Card</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Customer type</th>
                            <th>Address</th>
                            <th />
                        </tr>
                        </thead>
                        <tbody id="content">
                        <tr>

                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}