import {useEffect, useState} from "react";
import * as facilityService from "../../service/facility_service"

export function FacilityList() {
    const [facilitys, setFacility] = useState([]);
    useEffect(() => {
        getAll();
    }, [])

    const getAll = async () => {
        let response = await facilityService.getAllFacility();
        setFacility(response);
    }
    return (
        <>
            <div id="content" className="container">
                <div id="header-element" className="mt-3">
                    <h1>Facilities</h1>
                </div>
                <div className="row">
                    {
                        facilitys.map((facility)=>(
                            <div className="col-lg-4 col-md-6 col-sm-12 mt-4" key={facility.id}>
                                <div className="card rounded-0">
                                    <img src={facility.pathImage} className="card-images-top rounded-0" alt="..."/>
                                    <div className="card-body">
                                        <p className="card-text fw-bold m-0">{facility.name}</p>
                                        <p>Room area: {facility.area} m<sup>2</sup></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}