//
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"
import { Logic } from "./logic.js";
import "./material_data.js";

const MaterialRow = ({material, concentrateGrammage, totalGrammage}) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: material.id})

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    };

    return (
        <tr ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}>
                <td>{material.name}</td>
                <td>{material.dilution}</td>
                <td>{material.grams}</td>
                <td>{Logic.percentConcentrate(material, concentrateGrammage)}</td> 
                <td>{Logic.percentTotal(material, totalGrammage)}</td>
                <td>{material.note}</td>
        </tr>
    )
}

export default MaterialRow