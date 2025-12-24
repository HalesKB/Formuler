import materials from './material_data.js';
import MaterialRow from './MaterialRow.jsx';


// useState?

const Formula = () => {
    return materials.map((material, index) => {
        return <MaterialRow key={index} material={material} />       
    })
}

export default Formula