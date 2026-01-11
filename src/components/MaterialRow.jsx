//
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"
import "./material_data.js";

const MaterialRow = ({material}) => {
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
                <td>{material.percent_concentrate}</td>
                <td>{material.percent_total}</td>
                <td>{material.note}</td>
        </tr>
    )
}

export default MaterialRow