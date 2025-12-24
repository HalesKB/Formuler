import Formula from "./Formula.jsx";

const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Material</th>
                    <th>Dilution</th>
                    <th>Grams</th>
                    <th>Percent in Concentrate</th>
                    <th>Percent of Total</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                <Formula />
            </tbody>
        </table>
    )
}
export default Table