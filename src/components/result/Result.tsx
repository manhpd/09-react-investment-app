import { IResult } from "../../model/result.model";
import "./result.css";
import { formatter } from "../../util/investment";

export default function Result({ result }: { result: IResult[] }) {

    if (result.length === 0) {
        return <div className="center">
            <h2>No Results</h2>
        </div>;
    }
    return (
      
        <table id="result" className="center" >
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Value End of Year</th>
                    <th>Annual Investment</th>
                </tr>
            </thead>
            <tbody>
                {result.map((res) => {
                    return (
                        <tr key={res.year}>
                            <td>{res.year}</td>
                            <td>{formatter.format(res.interest)}</td>
                            <td>{formatter.format(res.valueEndOfYear)}</td>
                            <td>{formatter.format(res.annualInvestment)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}