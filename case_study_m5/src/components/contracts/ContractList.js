function ContractList() {
    return (
        <>
            <div id="header">
                <h1>Contract</h1>
            </div>
            <div className="container-fluid">
                <div>
                    <a
                        role="button"
                        href="#"
                        className="btn btn-sm btn-primary mt-3 mb-3"
                    >
                        Create contract
                    </a>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Contract code</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Deposit</th>
                            <th>Total Payment</th>
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