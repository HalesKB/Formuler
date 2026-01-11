// I believe I am abandoning this component as it would be easier to implement
// SortableContext directly on the Table page by rendering the material rows there. 
// I'm keeping this around as a vestigial member of the project.

import MaterialRow from './MaterialRow.jsx';
import {
    SortableContext,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";

const Formula = ({data}) => {
    return data.map((material, index) => {
        return (
        <SortableContext items={materials} strategy={verticalListSortingStrategy}>
            <MaterialRow key={index} material={material} />
        </SortableContext>  
        )
    })
}

export default Formula