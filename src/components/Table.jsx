import { useState } from "react";
import Formula from "./Formula.jsx";
import materials from "./material_data.js";

const Table = () => {
    const [current_materials, setMaterials] = useState(materials)
    return (
        <>
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
                    <Formula data={current_materials} />
                </tbody>
            </table>
            <button className="btn" onClick={() => setMaterials([])}>Reset</button>
        </>
    )
}
export default Table