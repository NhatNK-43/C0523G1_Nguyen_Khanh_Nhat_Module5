function CustomerUpdate(){
    return(
        <div className="row mt-5">
            <div className="col-md-3" />
            <div className="col-md-6 border-primary">
                <div className=" text-content">
                    <h2 className="text-primary">Update Customer</h2>
                </div>
                <form action="#" method="post">
                    <div className="row mb-3">
                        <label htmlFor="name" className="form-label col-sm-2">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input type="text" id="name" className="form-control" required="" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="dateOfBirth" className="form-label col-sm-2">
                            Date of birth
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="date"
                                id="dateOfBirth"
                                className="form-control"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="gender" className="form-label col-sm-2">
                            Gender
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-select col-sm-10"
                                aria-label="Default select example"
                                name="area"
                                id="gender"
                                required=""
                            >
                                <option value="" selected="">
                                    Select
                                </option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="idCard" className="form-label col-sm-2">
                            Id card
                        </label>
                        <div className="col-sm-10">
                            <input type="text" id="idCard" className="form-control" required="" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="phoneNumber" className="form-label col-sm-2">
                            Phone number
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="phoneNumber"
                                className="form-control"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="email" className="form-label col-sm-2">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input type="email" id="email" className="form-control" required="" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="customerType" className="form-label col-sm-2">
                            Customer type
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-select col-sm-10"
                                aria-label="Default select example"
                                name="area"
                                id="customerType"
                                required=""
                            >
                                <option value="" selected="">
                                    Select
                                </option>
                                <option>Member</option>
                                <option>Silver</option>
                                <option>Gold</option>
                                <option>Platinum</option>
                                <option>Diamond</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="address" className="form-label col-sm-2">
                            Address
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="address"
                                className="form-control"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="form-label col-sm-2" />
                        <div className="col-sm-10">
                            <a
                                href="customer-list.html"
                                role="button"
                                className="btn btn-sm btn-secondary"
                            >
                                Back
                            </a>
                            <button type="submit" className="btn btn-sm btn-primary">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-3" />
        </div>
    )
}