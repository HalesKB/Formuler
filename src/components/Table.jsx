import { useState } from "react";
import {DndContext} from "@dnd-kit/core";
import Formula from "./Formula.jsx";
import material_data_array from "./material_data.js";

const Table = () => {
    const [materials, setMaterials] = useState(material_data_array)
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
                    <Formula data={materials} />
                </tbody>
            </table>
            <button className="btn" onClick={() => setMaterials([])}>Reset</button>
        </>
    )
}
export default Table