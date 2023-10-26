import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
export default function CovidList({ covidList }) {
    return (
        <div className="container">
            <h3 className="text-center m-5">VietNam's COVID-19 Information</h3>
            <table className="table table-hover border">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Active</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Deaths</th>
                </tr>
                </thead>
                <tbody>
                {covidList.map((covid,index) => {
                    return (
                        <tr key={covid.id}>
                            <td>{index+1}</td>
                            <td>{covid.date}</td>
                            <td>{covid.confirmed}</td>
                            <td>{covid.active}</td>
                            <td>{covid.recovered}</td>
                            <td>{covid.deaths}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
export const getStaticProps = async () => {
    const res = await axios.get("http://localhost:8080/covid");
    return {
        props: {
            covidList: res.data,
        },
    };
};