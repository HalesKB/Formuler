import material_data_array from "./material_data.js";
import MaterialRow from './MaterialRow.jsx';
import { Logic } from "./logic.js";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove
} from "@dnd-kit/sortable";

let addedEthanol = 1; // THIS IS A TEMPORARY VALUE FOR TESTING -- REMOVE LATER

const concentrateGrammage = Logic.concentrateGrammage(material_data_array);
const totalGrammage = Logic.totalGrammage(material_data_array, addedEthanol);

const Table = () => {
    const [materials, setMaterials] = useState(material_data_array)

    return (
        <>
            <DndContext collisionDetection={closestCenter}>
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
                        <SortableContext items={materials} strategy={verticalListSortingStrategy}>
                            {materials.map((material) => (
                            <MaterialRow 
                                key={material.id}
                                material={material}
                                concentrateGrammage={concentrateGrammage}
                                totalGrammage={totalGrammage}
                            />
                            ))}
                        </SortableContext>
                    </tbody>
                </table>
            </DndContext>
            <button className="btn" onClick={() => setMaterials([])}>Reset</button>
        </>
    )
}

export default Table