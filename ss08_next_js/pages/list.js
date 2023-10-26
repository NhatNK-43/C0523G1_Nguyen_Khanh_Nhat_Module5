import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.bundle"
export default function CovidList({ covidList }) {
    return (
        <div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Confirmed</th>
                    <th scope="col">Active</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Deaths</th>
                </tr>
                </thead>
                <tbody>
                {covidList.map((covid) => {
                    return (
                        <tr key={covid.id}>
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