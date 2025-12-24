import MaterialRow from './MaterialRow.jsx';

const Formula = ({data}) => {
    return data.map((material, index) => {
        return <MaterialRow key={index} material={material} />       
    })
}

export default Formula