import * as facilityTypeService from "../../service/facility_type_service";
import * as accompaniedServiceService from "../../service/accompanied_service_service";
import * as facilityService from "../../service/facility_service";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {useEffect, useState} from "react";

export function FacilityUpdate() {
    const navigate = useNavigate();
    const [facilityTypes, setFacilityTypes] = useState([]);
    const [facilityTypeId, setFacilityTypeId] = useState(1);
    const [accompaniedServices, setAccompaniedServices] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getAllFacilityType();
        getAllAccompaniedService();
    }, []);

    const getAllFacilityType = async () => {
        let data = await facilityTypeService.getAllFacilityType();
        setFacilityTypes(data);
    }

    const getAllAccompaniedService = async () => {
        let data = await accompaniedServiceService.getAllAccompaniedService();
        setAccompaniedServices(data);
    }

    if (!facilityTypes || !accompaniedServices) {
        return null;
    }

    const initValue = {
        name: "",
        area: "",
        rentalCosts: "",
        capacity: "",
        rentalType: "",
        pathImage: "",
        freeService: [],
        roomStandards: "",
        poolArea: "",
        numberFloor: "",
        otherUtilities: "",
        accompaniedService: {},
        facilityType: {
            id: 1,
            name: "Villa"
        }
    }

    // const d = new Date();
    // const date = (d.getFullYear() - 18) + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    //
    const validateObject = {
        name: Yup.string()
            .required("Please enter facility name"),
        rentalCosts: Yup.number()
            .required("Please enter rental costs")
            .min(0, "The rental costs must be greater than 0"),
        area: Yup.number()
            .required("Please enter usable area")
            .min(20, "The pool area must be greater than 20"),
        capacity: Yup.number()
            .required("Please enter capacity")
            .min(1, "The capacity must be greater than 0"),
        rentalType: Yup.number()
            .required("Please select rental type"),
        poolArea: Yup.number()
            .required("Please enter pool area")
            .min(20, "The pool area must be greater than 20"),
        numberFloor: Yup.number()
            .required("Please enter number of floor")
            .min(1, "The number of floor must be greater than 0")
    }

    const update = async (values) => {
        values.area = +values.area;
        values.rentalCosts = +values.rentalCosts;
        values.capacity = +values.capacity;
        values.poolArea = +values.poolArea;
        values.numberFloor = +values.numberFloor;
        values.accompaniedService = JSON.parse(values.accompaniedService);
        let status = await facilityService.createFacility(values);
        if (status === 200) {
            toast.success("Update successfully!");
            navigate("/facilities");
        } else {
            toast.error("Update failed!");
            navigate("/facilities/create");
        }
    }

    return (
        <>
            <div className="body">
                <div className="row pt-5 m-0">
                    <div className="col-md-3"/>
                    <div className="col-md-6 shadow p-0">
                        <div className="form-control p-5 rounded-0">
                            <div className="mb-5">
                                <h2 className="text-primary">Update Facility</h2>
                            </div>
                            <Formik
                                initialValues={initValue}
                                onSubmit={values => {
                                    update(values);
                                }}
                                validationSchema={Yup.object(validateObject)}
                            >
                                <Form>
                                    <div className="row mb-3">
                                        <label htmlFor="facilityType" className="form-label col-sm-3">
                                            Facility Type
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                className="form-select"
                                                aria-label="Default select example"
                                                component="select"
                                                name="facilityType"
                                                id="facilityType"
                                            >
                                                {
                                                    facilityTypes.map((facilityType) => (
                                                        <option
                                                            key={facilityType.id}
                                                            value={JSON.stringify(facilityType)}
                                                            onChange={(event) =>
                                                                setFacilityTypeId(event.target.value)}
                                                        >
                                                            {facilityType.name}
                                                        </option>
                                                    ))
                                                }
                                            </Field>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="name" className="form-label col-sm-3">
                                            Name
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="text" id="name" name="name" className="form-control"/>
                                            <ErrorMessage name="name" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="area" className="form-label col-sm-3">
                                            Area
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                type="number"
                                                id="area"
                                                name="area"
                                                className="form-control"
                                            />
                                            <ErrorMessage name="area" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="rentalType" className="form-label col-sm-3">
                                            Rental type
                                        </label>
                                        <div className="col-sm-9">
                                            <Field
                                                className="form-select"
                                                aria-label="Default select example"
                                                component="select"
                                                name="rentalType"
                                                id="rentalType"
                                            >
                                                <option value="hours">Hours</option>
                                                <option value="day">Day</option>
                                                <option value="month">Month</option>
                                                <option value="year">Year</option>

                                            </Field>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="rentalCosts" className="form-label col-sm-3">
                                            Rental costs
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="number" id="rentalCosts" name="rentalCosts"
                                                   className="form-control"
                                            />
                                            <ErrorMessage name="rentalCosts" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label htmlFor="capacity" className="form-label col-sm-3">
                                            Capacity
                                        </label>
                                        <div className="col-sm-9">
                                            <Field type="number" id="capacity" name="capacity" className="form-control"
                                            />
                                            <ErrorMessage name="capacity" component="div"
                                                          className="mt-2 form-text text-danger"
                                            ></ErrorMessage>
                                        </div>
                                    </div>
                                    {
                                        facilityTypeId === 3 ?
                                            <div className="row mb-3">
                                                <label className="form-label col-sm-3">
                                                    Other Utilities
                                                </label>
                                                <div className="col-sm-9">
                                                    <div className="form-check form-check-inline">
                                                        <Field className="form-check-input" type="checkbox"
                                                               name="otherUtilities"
                                                               id="inlineRadio1"
                                                               value="Free wifi"/>
                                                        <label className="form-check-label"
                                                               htmlFor="inlineRadio1">Free wifi</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Field className="form-check-input" type="checkbox"
                                                               name="otherUtilities"
                                                               id="inlineRadio2"
                                                               value="Hairdryer"/>
                                                        <label className="form-check-label"
                                                               htmlFor="inlineRadio2">Hairdryer</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Field className="form-check-input" type="checkbox"
                                                               name="otherUtilities"
                                                               id="inlineRadio3"
                                                               value="Air conditional"/>
                                                        <label className="form-check-label"
                                                               htmlFor="inlineRadio3">Air conditional</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <Field className="form-check-input" type="checkbox"
                                                               name="otherUtilities"
                                                               id="inlineRadio4"
                                                               value="Minibar"/>
                                                        <label className="form-check-label"
                                                               htmlFor="inlineRadio4">Minibar</label>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div>
                                                <div className="row mb-3">
                                                    <label htmlFor="roomStandards" className="form-label col-sm-3">
                                                        Room Standards
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Field
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            component="select"
                                                            name="roomStandards"
                                                            id="roomStandards"
                                                        >
                                                            <option value="Superior">Superior</option>
                                                            <option value="Deluxe">Deluxe</option>
                                                            <option value="Suite">Suite</option>
                                                            <option value="Presidential">President</option>
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="poolArea" className="form-label col-sm-3">
                                                        Pool area
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Field
                                                            type="number"
                                                            id="poolArea"
                                                            name="poolArea"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage name="poolArea" component="div"
                                                                      className="mt-2 form-text text-danger"
                                                        ></ErrorMessage>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="numberFloor" className="form-label col-sm-3">
                                                        Number floor
                                                    </label>
                                                    <div className="col-sm-9">
                                                        <Field
                                                            type="number"
                                                            id="numberFloor"
                                                            name="numberFloor"
                                                            className="form-control"
                                                        />
                                                        <ErrorMessage name="numberFloor" component="div"
                                                                      className="mt-2 form-text text-danger"
                                                        ></ErrorMessage>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="form-label col-sm-3">
                                                        Accompanied Service
                                                    </label>
                                                    <div className="col-sm-9">
                                                        {
                                                            accompaniedServices.map((accompaniedService, index) => (
                                                                <div className="form-check form-check-inline">
                                                                    <Field className="form-check-input" type="checkbox"
                                                                           name="accompaniedService"
                                                                           id={`accompaniedService${index}`}
                                                                           key={accompaniedService.id}
                                                                           value={JSON.stringify(accompaniedService)}/>
                                                                    <label className="form-check-label"
                                                                           htmlFor={`accompaniedService${index}`}>{accompaniedService.name}</label>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                    }
                                    <div className="row mb-3">
                                        <label className="form-label col-sm-3"/>
                                        <div className="col-sm-9">
                                            <NavLink
                                                to="/customers"
                                                className="btn btn-sm btn-secondary me-4 rounded-0"
                                            >
                                                Back
                                            </NavLink>
                                            <button type="submit" className="btn btn-sm btn-primary rounded-0">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                        <div className="col-md-3"/>
                    </div>
                </div>
            </div>
        </>
    )
}