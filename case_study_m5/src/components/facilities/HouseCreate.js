function HouseCreate(){
    return(
        <div className="row mt-5">
            <div className="col-md-3" />
            <div className="col-md-6 border-primary">
                <div className=" text-content">
                    <h2 className="text-primary">Create Facility</h2>
                </div>
                <form action="#" method="post">
                    <div className="row mb-3">
                        <label htmlFor="title" className="form-label col-sm-2">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input type="text" id="title" className="form-control" required="" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="roomArea" className="form-label col-sm-2">
                            Room area
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="roomArea"
                                className="form-control"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="rentalCosts" className="form-label col-sm-2">
                            Rental costs
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                id="rentalCosts"
                                className="form-control"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="capacity" className="form-label col-sm-2">
                            Capacity
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                id="capacity"
                                className="form-control"
                                required=""
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="rentalType" className="form-label col-sm-2">
                            Rental type
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-select col-sm-10"
                                aria-label="Default select example"
                                name="area"
                                id="rentalType"
                                required=""
                            >
                                <option value="" selected="">
                                    Select
                                </option>
                                <option>Hours</option>
                                <option>Day</option>
                                <option>Month</option>
                                <option>Year</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="form-label col-sm-2" />
                        <div className="col-sm-10">
                            <a
                                href="facility-list.html"
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