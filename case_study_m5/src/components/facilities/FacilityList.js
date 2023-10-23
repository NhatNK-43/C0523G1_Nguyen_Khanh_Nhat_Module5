function FacilityList(){
    return(
        <>
            <div className="header fixed-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="../../img/logo@2x.png" height="70px" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Facilities
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Customers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contacts
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="header-element" className="p">
                <h1>Facilities</h1>
            </div>
            <div id="content" className="container"></div>
        </>
    )
}
class facility {
    constructor(name, image, area) {
        this.name = name;
        this.image = image;
        this.area = area;
    }
}

let facilityList = [];
let facility1 = new facility("SEA VIEW SUITE", "../../img/facilities/1-Ocean-Suite-Feature-768x497.jpg", 85.8);
let facility2 = new facility("STUDIO SUITE SEA VIEW", "../../img/facilities/2-Ocean-Studio-Suite-F-768x497.jpg", 40.1);
let facility3 = new facility("DELUXE ROOM SEA VIEW", "../../img/facilities/3-Ocean-Deluxe-2-450x291.jpg", 43.7);
let facility4 = new facility("SUPERIOR LAKE VIEW ROOM", "../../img/facilities/4-Lagoon-Superior-twin-bed-F-768x497.jpg", 40.1);
let facility5 = new facility("SUPERIOR ROOM GARDEN VIEW", "../../img/facilities/5-Garden-Superior-TwinBed-1-F-768x497.jpg", 40.1);
let facility6 = new facility("DELUXE ROOM GARDEN VIEW", "../../img/facilities/6-Garden-Deluxe-5-450x291.jpg", 43.7);
let facility7 = new facility("PRESIDENTIAL SUITE", "../../img/facilities/7-Presidential-Suite-F-768x497.jpg", 130);
let facility8 = new facility("SEA VIEW VILLA WITH PRIVATE SWIMMING POOL", "../../img/facilities/8-Villas_Beach_Pool_Villas-_Exterior-1-F-768x497.jpg", 900);
let facility9 = new facility("GARDEN VIEW VILLA WITH PRIVATE POOL", "../../img/facilities/9-Villas_Pool_Villas-F-768x497.jpg", 320);

facilityList.push(facility1, facility2, facility3, facility4, facility5, facility6, facility7, facility8, facility9);

document.getElementById("content").innerHTML = showList(facilityList);

function showList(list) {
    let result = '<div class="row">';
    for (let i = 0; i < list.length; i++) {
        result +=
            '<div class="col-lg-4 col-md-6 col-sm-12 mt-4">' +
            '<div class="card rounded-0">' +
            '<img src="' + list[i].image + '" class="card-img-top rounded-0" alt="...">' +
            '<div class="card-body">' +
            '<p class="card-text fw-bold m-0">' + list[i].name + '</p>' +
            '<p>Room area: '+ list[i].area +'m<sup>2</sup></p>'+
            '</div>' +
            '</div>' +
            '</div>'
    }
    result += '</div>';
    return result;
}