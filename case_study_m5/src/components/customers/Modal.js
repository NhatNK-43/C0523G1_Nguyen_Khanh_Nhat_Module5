import SweetAlert2 from "react-sweetalert2";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css"
import {withSwal} from 'react-sweetalert2';

export function Modal() {
    const modal = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-danger ms-3 rounded-0',
            cancelButton: 'btn btn-outline-secondary rounded-0'
        },
        buttonsStyling: false
    });
    const showModal = async () => {
        const result = await modal.fire({
            title: "Are you sure?",
            text: "You will be redirected",
            icon: "warning",
            confirmButtonText: "Delete",
            // confirmButtonColor: "#d33",
            showCancelButton: true,
            // cancelButtonColor: "gray",
            reverseButtons: true,

        });
        if (result.isConfirmed) {
            window.location.href = "/facility";
        }
    }
    return (
        <>
            <button className="btn btn-primary" onClick={showModal}>
                Click
            </button>
        </>
    )
}